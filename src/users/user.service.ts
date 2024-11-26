import { Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService{
    private users= [  
        {id:1, email: 'maria@gmail.com', name: 'Maria', password: bcrypt.hashSync('maria123', 10)}, 
        {id:2, email:"lari@gmail.com", name: 'Lari', password: bcrypt.hashSync ('lari123', 10)}]

    findAll(){
        return this.users.map(  ({ password, ...user} )=> user)
    }

    findOneById (id: number){
        const user = this.users.find( (u)=> u.id===id)
        if (!user){
            throw new NotFoundException('User not found')
        }
        const { password, ...result } = user; 
        return result;
    }

    findOneByEmail (email: string){
        const user = this.users.find( (u)=> u.email===email)
        if (!user){
            throw new NotFoundException('User not found')
        }
        return user;
    }

   async create(user: {email:string, name:string, password:string}){
            const hashedPassword = await bcrypt.hash (user.password, 10)
            const newUser = {id:Date.now(), ...user, password:hashedPassword}
            this.users.push (newUser)
            const {password, ...result} = newUser
            return result
    }

    async update(id:number, updateUser:{email?:string, name?:string, password?:string}){
        const userIndex = this.users.findIndex (user=> user.id===id)
        if (!userIndex) throw new Error('User not found')
        
        const user = this.users [userIndex];

        if (updateUser.password) {
            updateUser.password = await bcrypt.hash(updateUser.password, 10);
          }
       
        const updatedUser = {...user, ...updateUser}
        this.users[userIndex] = updatedUser
       
        return {id:updatedUser.id, email: updatedUser.email, name:updatedUser.name}

    }

    delete(id:number){
        const userIndex =  this.users.findIndex ((u)=>u.id===id)
        if (userIndex===-1){
            throw new NotFoundException('User not found')
        }
        this.users.splice(userIndex,1)
    }
}