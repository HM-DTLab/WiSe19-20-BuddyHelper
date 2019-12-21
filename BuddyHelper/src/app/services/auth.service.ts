import { Injectable } from "@angular/core";
import { User } from '../example/user.example';
import { USER_Admin, USER_1 } from '../data/user.data';

@Injectable()
export class AuthService {
    login(user: User): Promise<boolean>{

        if((user.email == USER_Admin.email && user.password == USER_Admin.password)||
        (user.email == USER_1.email && user.password == USER_1.password)){
            return Promise.resolve(true);
        }
        else{
            return Promise.resolve(false);
        }
    }
}