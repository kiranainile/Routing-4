import { Observable, of } from "rxjs";
import { Ires, IUser } from "../models/user";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})

export class UserService{
   userArr: Array <IUser>= [
  {
    userName: 'Aarav Sharma',
    userId: '101',
    userRole: 'Candidate', 
    profileDescription: 'Angular Developer with 3 years experience',
    profileImage: 'assets/routing 4.jpeg',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'Bootstrap'],
    experienceYears: '1 to 3 years',
    isActive: true,
    address: {
      current: {
        city: 'Latur',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '413512'
      },
      permanent: {
        city: 'Latur',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '413512'
      }
    },
    isAddSame: false
    },
  {
    userName: 'Rahul Deshmukh',
    userId: '102',
    userRole: 'Admin',
    profileDescription: 'Frontend Team Lead',
    profileImage: 'assets/routing 4.jpeg',
    skills: ['Angular', 'RxJS', 'NGRX'],
    experienceYears: '5',
    isActive: true,
    address: {
      current: {
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '411001'
      },
      permanent: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '400001'
      }
    },
        isAddSame: false,

  },
 {
    userName: 'Pooja More',
    userId: '103',
    userRole: 'Candidate', 
    profileDescription: 'Angular Developer with 3 years experience',
    profileImage: 'assets/routing.girl4.jpeg',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'Bootstrap'],
    experienceYears: '1 to 3 years',
    isActive: true,
    address: {
      current: {
        city: 'Latur',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '413512'
      },
      permanent: {
        city: 'Latur',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '413512'
      }
    },
    isAddSame: false
    },

  ]

    


constructor(){

}

fetchUser():Observable<Array<IUser>>{

    return of(this.userArr)

}
fetchUserById(id:string){
  let userObj= this.userArr.find(u=> u.userId ===id)!
  return of(userObj)
}



addUser(user:IUser):Observable<Ires<IUser>>{
  this.userArr.unshift(user)
  return of({
    msg:`The user with id ${user.userId} is added successfully..!!!`,
    data:user
  })
}
updateUser(user:IUser){
  let getIndex=this.userArr.findIndex(u=>u.userId ===user.userId)
  this.userArr[getIndex]=user
  return of({
    msg:`The user with is ${user.userId} s updated successfully...!!!`,
    data:user
  })

}


  removeUserById(id:string):Observable<Ires<IUser>>{
            let getIndex=this.userArr.findIndex(p=>p.userId ===id)
            let user=this.userArr.splice(getIndex,1)
            return of({
                   msg:`The new product with id ${user[0].userId} is removed successfully....!!!`,
           
                   data:user[0]

            })

        }
            

}





