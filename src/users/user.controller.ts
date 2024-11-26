import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "./user.service";

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController{

    constructor (private readonly userService:UserService){}

    @Get()
     findAll(){
        return this.userService.findAll()
     }   
    
     @Get(':id')
     findOne(@Param('id') id:string){
        return this.userService.findOneById(+id);
     }

     @Post()
     create(@Body() createUseDto: {email:string, name:string, password:string}){
        return this.userService.create(createUseDto)
     }

     @Put(':id')
     update(@Param('id') id:string, @Body() updateUserDto: {email?:string, name?:string}){
        return this.userService.update(+id, updateUserDto)
     }
     
     @Delete(':id')
     delete(id:string){
        this.userService.delete(+id)
     }
}