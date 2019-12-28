import { Injectable } from "@angular/core";
import { User } from '../example/user.example';

//UserList liegt unter "data"-Ordner ab
//eingefügt in tsconfig.json: "compilerOptions": {  "resolveJsonModule": true, "esModuleInterop": true } }
import UserList from '../data/UserList.json'; 

//sollte nimmer gebraucht werden
//import { USER_Admin, USER_1 } from '../data/user.data';


@Injectable()
export class AuthService {
    login(user: User): Promise<boolean>{

        /**
         * übergibt eingegebene email und password
         * UserList.json hat das Array "users". Jedes Element von users hat email,name,password.
         * In for-Schleife wird für jedes Element eingegebene email und password abgeglichen.
         */
        var givenMail = user.email;
        var givenPassword = user.password;
        let credentials = false;

        for(let i = 0; i < UserList.users.length; i++){
            if(givenMail == UserList.users[i].email){
                if(givenPassword == UserList.users[i].password){
                    //console.log('right credentials')
                    credentials  = true;
                }
            }
        }
        return Promise.resolve(credentials);
    }

        
        //alter Code, den ich aus Paranoia nicht löschen wollte
        /* if((user.email == USER_Admin.email && user.password == USER_Admin.password)||
        (user.email == USER_1.email && user.password == USER_1.password)){
            return Promise.resolve(true);
        }
        else{
            return Promise.resolve(false);
        } */
    

}