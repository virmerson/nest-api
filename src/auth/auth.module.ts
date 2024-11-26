import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { UserService } from "src/users/user.service";
import { UsersModule } from "src/users/user.module";

@Module( {
    imports:[
    PassportModule,    
    JwtModule.register({
        secret:"Banana",
        signOptions: {expiresIn:'1h'}
    }), UsersModule],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy] 
} )
export class AuthModule{

}