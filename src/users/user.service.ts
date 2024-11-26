import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UserService{
    private users= [  {id:1, email: 'maria@gmail.com'}, {id:2, email:"lari@gmail.com"}]

    findAll(){
        return this.users
    }

    findOne (id: number){
        const user = this.users.find( (u)=> u.id===id)
        if (!user){
            throw new NotFoundException('User not found')
        }
        return user
    }

    create(user: {email:string, name:string}){
            const newUser = {id:Date.now(), ...user}
            this.users.push (newUser)
            return newUser
    }

    update(id:number, updateUser:{email?:string, name?:string}){
        const user = this.findOne (id)
        Object.assign (user, updateUser)
        return user
    }

    delete(id:number){
        const userIndex =  this.users.findIndex ((u)=>u.id===id)
        if (userIndex===-1){
            throw new NotFoundException('User not found')
        }
        this.users.splice(userIndex,1)
    }
}