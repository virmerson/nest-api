import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";

@Module( {
    imports:[
    PassportModule,    
    JwtModule.register({
        secret:"Banana",
        signOptions: {expiresIn:'1h'}
    })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy] 
} )
export class AuthModule{

}