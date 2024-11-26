import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'
import { UserService } from "src/users/user.service";


@Injectable()
export class AuthService {


    constructor (private readonly jwtService: JwtService, private readonly userService:UserService){}

    async validateUser (email: string, pass:string){
        const user =  this.userService.findOneByEmail(email)

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