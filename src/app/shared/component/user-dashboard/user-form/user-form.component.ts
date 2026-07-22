import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/user';
import { FormUtilityService } from 'src/app/shared/services/form-utility.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

userForm!:FormGroup;
isInEditMode:boolean=false
editUser!:IUser;
userId!:string

  constructor(
    private _userService:UserService,
    private _snackbar:SnackbarService,
    private _router:Router,
    private _routes:ActivatedRoute,
    private _formutility:FormUtilityService
  ) { }

  ngOnInit(): void {
    this.createUserForm()
    this.addSkillControl()
    this.permanentAddHandler()
    this.isAddSameHandler()
    this.patchUserDetails()

  }

  patchUserDetails(){
    
    this.userId =this._routes.snapshot.paramMap.get('userId')!
    if(this.userId){
      this.isInEditMode=true
      this._userService.fetchUserById(this.userId)
      .subscribe({
        next:res=>{
         this.editUser=res;
         this.userForm.patchValue({...this.editUser})
          this.userForm.enable();
             this._formutility.pathFormArr(res.skills,this.skillsArr)
           
             if(this.formControls['address'].get('current')?.valid){
              this.formControls['isAddSame'].enable()
              this.formControls['address'].get('permanent')?.patchValue(this.editUser.address.permanent)

           }  

        }
      })

    }
  }


  permanentAddHandler(){
    
   this.formControls['address'].get('current')?.valueChanges
   .subscribe(val=>{
    if(this.formControls['address'].get('current')?.valid){
      this.formControls['isAddSame'].enable()
    }else{
      this.formControls['isAddSame'].reset()
      this.formControls['isAddSame'].disable()
    }

   })

  }

patchskills(dataArr:Array<any>,formArr:FormArray){
   this.skillsArr.clear()
         this.editUser.skills.forEach(skill=>{
          let skillControl=new FormControl(skill,[Validators.required])
          this.skillsArr.push(skillControl)

         })
}
removeSkill(index: number): void {
  this.skillsArr.removeAt(index);
}

  isAddSameHandler(){
    
   this.formControls['isAddSame'].valueChanges
   .subscribe(val=>{
    if(val){
      let currentAdd=this.formControls['address'].get('current')?.value;
      this.formControls['address'].get('permanent')?.patchValue(currentAdd)
      this.formControls['address'].get('permanent')?.disable()
    }else{
      this.formControls['address'].get('permanent')?.reset()
        this.formControls['address'].get('permanent')?.enable()
    }

   })
    

  }


  createUserForm(){ 
    this.userForm=new FormGroup({
      
       userName:new FormControl(null,[Validators.required]),
       userRole:new FormControl('Candidate'),
        profileDescription:new FormControl(null,[Validators.required]),
        profileImage:new FormControl(null,[Validators.required]),
        experienceYears:new FormControl(null,[Validators.required]),
        isActive:new FormControl(null,[Validators.required]),
        isAddSame:new FormControl({value:null,disabled:true},[Validators.required]),
        address:new FormGroup({
          current:new FormGroup({
            city:new FormControl(null,[Validators.required]),
            state:new FormControl(null,[Validators.required]),
            country:new FormControl('India'),
            zipcode:new FormControl(null,[Validators.required]),
          }),
        
          permanent:new FormGroup({
              city:new FormControl(null,[Validators.required]),
            state:new FormControl(null,[Validators.required]),
            country:new FormControl(''),
            zipcode:new FormControl(null,[Validators.required]),
          })
        }),
          skills:new FormArray([]),

    })
  }

 addSkillControl(){

 if(this.formControls['skills'].valid){

   let skillControl =new FormControl(null,[Validators.required])
  this.skillsArr.push(skillControl)
 }
 }

  get formControls(){
    return this.userForm.controls

  }
  get skillsArr(){
    return this.formControls['skills']as FormArray
  }
  onUserAdd(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched()
    }else{
      let UserDetails: IUser={...this.userForm.getRawValue(),userId:Date.now().toString()};
          console.log(UserDetails);
      this._userService.addUser(UserDetails)
      .subscribe({
        next:res=>{
          this._snackbar.openSnackBar(res.msg);
          this._router.navigate(['/user'],)
        },
        error:err=>{
          this._snackbar.openSnackBar(err);
        }
      })
    }
  }


  onUserUpdate(){
     if(this.userForm.invalid){
      this.userForm.markAllAsTouched()

  }else{
    let UPDATED_USER:IUser={...this.userForm.value,userId: this.editUser.userId}
    this._userService.updateUser(UPDATED_USER)
    .subscribe({
      next:res=>{
        this._snackbar.openSnackBar(res.msg)
      },
      error:err=>{
        this._snackbar.openSnackBar(err)
      }
    })
  }
}
}
