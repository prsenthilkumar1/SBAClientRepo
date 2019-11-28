import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormGroup, NgForm, FormControl } from '@angular/forms';
import { SBAService } from '../User.service';
import { UserModel } from '../UserModel';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

 //public addUserForm: FormGroup;

 FormName = "Add User";

  public users: any=[];
  public usermodel: UserModel;
  public isUpdateUser: boolean;
  public submitted:boolean;
  
  constructor(private servicecall:SBAService) 
    {       
      // this.addUserForm = new FormGroup({
      //   FirstName: new FormControl()
      //   //LastName: new FormControl(),
      //   //EmployeeID: new FormControl()
      // });
      
      this.usermodel=new UserModel; 
      this.isUpdateUser = false;

      this.servicecall.getUserList().subscribe((data:any)=>{this.users=data;});
    }

  ngOnInit() {
  }

  public OnClickAddUser(userForm: NgForm)
  {
    // if(usermodel.UserID != null)
    // {
    //   this.servicecall.updateUser(this.usermodel).subscribe((data:any)=>{console.log(data)});
    // }
    // else
    // {
    //   this.servicecall.addUser(this.usermodel).subscribe((data:any)=>{console.log(data)});
    // }

    this.submitted = true;
    if (userForm.valid) {
      if (this.usermodel && this.usermodel.UserID > 0) {
        this.servicecall.updateUser(this.usermodel).subscribe((data:any)=>{console.log(data)});      
      } else {
        this.servicecall.addUser(this.usermodel).subscribe((data:any)=>{console.log(data)});        
      }

      userForm.reset();

      this.submitted = false;

    }
  }

  public OnClickResetUser()
  {
    this.usermodel = new UserModel;
  }

  public OnClickEditUser(urs:UserModel)
  {
    console.log(urs);
    this.isUpdateUser = true; 
    this.usermodel = urs;
  }

  public OnClickDeleteUser(urs:UserModel)
  {
    this.servicecall.deleteUser(this.usermodel).subscribe((data:any)=>{console.log(data)});
  }


  public getFieldvalidateion(controllState: any, controllName?: string) {

    let elementName: string = controllState.path;
    let messages: string[] = [];
    if (controllState.errors) {
      for (let validatorName in controllState.errors) {
        switch (validatorName) {
          
          case "required":
            messages.push(`You must enter User ${elementName}`);
            break
          case "minlength":
            messages.push(`User ${elementName} must be atleast 3 letters`);
            break
          case "maxlength":
            messages.push(`User ${elementName} must be 3 letters`);
            break
          case "pattern":
            messages.push(`User ${elementName} can only contain letters`);
            break
        }
      }
    }
    return messages;
  }
}
