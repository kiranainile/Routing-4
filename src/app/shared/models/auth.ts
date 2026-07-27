
export interface ILoginUser{
    email:string;
    password:String;

}
export interface IregisterUser{
    email:string;
    password:string;
    userRole:'admin'|'buyer'|'superAdmin'

}