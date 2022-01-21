import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware
} from "type-graphql";
import { Room } from "../entities/Room";
import { isAuth } from "../middelwares/isAuth";
import { MyContext } from "../types";
import { FieldError } from "./user";


@ObjectType()
class LinkProvider{
  @Field(() => [FieldError], {nullable:true})
  errors?:FieldError[]
  @Field({nullable:true})
  link?:string
}

@ObjectType()
class PasswordMatcher{
  @Field(() => [FieldError], {nullable:true})
  errors?: FieldError[]
  @Field(() => Boolean, {nullable:true})
  isThere?:boolean
}

@InputType()
class roomVar {
  @Field()
  name: string;
  @Field()
  password: string;
}

@Resolver(Room)
export class RoomResolver {
 @Query(() => Room, {nullable:true})
 @UseMiddleware(isAuth)
 async room(
  @Arg("token") token:string
 ){
    return await Room.findOne({where:{token:token}})
 }

  @Query(() => [Room])
  @UseMiddleware(isAuth)
  async rooms() {
    return Room.find({});
  }

  @Mutation(() => Room)
  @UseMiddleware(isAuth)
  async newRoom(
    @Arg("input") input: roomVar,
    @Arg("token") token: string,
    @Ctx() { req }: MyContext
  ): Promise<Room> {
    return Room.create({
      ...input,
      owner: req.session.userId,
      token:token
    }).save();
  }

  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async enterRoom(
    @Arg("name") name: string,
    @Arg("password") password: string,
    @Arg("token") token:string,
  ) {
    const room = await Room.findOne({where: {name, password}})
    if(!room){
      // no room found
      return "/" 
    }
      return `http://localhost:3000/rooms/${token}`
  }


  @Mutation(() => LinkProvider)
  @UseMiddleware(isAuth)
  async enterExistingRoom(
    @Arg("name") name: string,
    @Arg("password") password:string
  ):Promise<LinkProvider>{
    const room = await Room.findOne({where:{name}})
    if(!room){
      return {
        errors:[
          {
            field:"roomName",
            message:"no room found"
          }
        ]
      }
    }
    else if(room.password !== password){
      return{
        errors:[
          {
            field:"password",
            message:"password is not correct"
          }
        ]
      }
    }
    return {link:`http://localhost:3000/rooms/${room.token}`} 
  }
  @Mutation(() => PasswordMatcher)
  @UseMiddleware(isAuth)
  async matchPassword(
    @Arg("token") token:string,
    @Arg("password") password: string,
    @Ctx() {req}: MyContext
  ):Promise<PasswordMatcher>{
    const room = await Room.findOne({where: {token}})
    if(!room){
      return {
        errors:[
          {
            field:"password",
            message:"room not found"
          }
        ]
      }
    }    
    if(room.password !== password){
      return {
        errors:[{
          field:"password",
          message:"password incorrect"
        }]
      }
    }
    req.session.roomId = room.id
    return {isThere:true}
  }
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteRoom(
    @Arg("id", () => Int) id:number,
    @Ctx() {req}: MyContext
  ){
    const room = await Room.findOne(id)
    if(!room){
      return false
    }
    if(room.owner !== req.session.userId){
      throw Error('not Autherised')
    }
    await Room.delete(id)
    return true
  }
}
