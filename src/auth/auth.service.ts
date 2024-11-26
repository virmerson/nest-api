import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {

    private users = [
        {id:1, name: 'Jao',  email:'jao@gmail.com', password: bcrypt.hashSync('jao@123', 10) }
    ]

    constructor (private readonly jwtService: JwtService){}

    async validateUser (email: string, pass:string){
        const user = this.users.find( (user)=>  user.email===email)

        if (user && await bcrypt.compare(pass, user.password)){
            const {password, ...result} = user
            return result
        }
        return null
    }

    async login (user:any){
        const payload = {email: user.email, sub: user.id}
        return {
            access_token: this.jwtService.sign (payload)
        }
    }
}