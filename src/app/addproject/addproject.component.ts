import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormGroup, NgForm  } from '@angular/forms';
import { SBAService } from '../User.service';
import { ProjectModel } from '../ProjectModel';
import { UserModel } from '../UserModel';
import { ProjectDetailModel } from '../ProjectDetailModel';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  
public users: any=[];
public projectdetail:any=[];
public project:ProjectModel;
public userid : number;
public submitted:boolean;
//public projectForm:FormGroup;

  //constructor(private router: Router , private servicecall:SBAService) 
  constructor(private servicecall:SBAService) 
            { 
               this.project = new ProjectModel;
              // this.users = new UserModel;

              this.servicecall.getProjectList().subscribe((data:any)=>{this.projectdetail=data;});
              this.servicecall.getUserList().subscribe((data:any)=>{this.users=data;});
            }

  ngOnInit() {    
  }

  selectChangeHandler (event: any) {
    //update the ui    
    this.userid = event.target.value;
  }

  public OnClickAddProject(projectForm:NgForm)
  {
    // console.log(project);
    // if(project.Project_ID != null)
    // {
    //   this.project.UserID = this.userid;
    //   this.servicecall.updateProject(this.project).subscribe((data:any)=>{console.log(data)});
    // }
    // else
    // {
    //   this.project.UserID = this.userid;
    //   this.servicecall.addProject(this.project).subscribe((data:any)=>{console.log(data)});
    // }

    this.submitted = true;
    if (projectForm.valid) {
      if (this.project && this.project.Project_ID > 0) {
        this.project.UserID = this.userid;
        this.servicecall.updateProject(this.project).subscribe((data:any)=>{console.log(data)});      
      } else {
        this.project.UserID = this.userid;
        this.servicecall.addProject(this.project).subscribe((data:any)=>{console.log(data)});        
      }

      projectForm.reset();

      this.submitted = false;
  }
}

  public OnClickReset()
  {
    this.project=new ProjectModel;
  }

  public OnClickEditProject(projdetails:ProjectDetailModel)
  {
console.log(projdetails);
this.project.Project_ID=projdetails.PDProjectID;
this.project.Project = projdetails.PDProjectName;
this.project.EndDate = projdetails.PDEndDate;
this.project.Priority = projdetails.PDPriority;
this.project.StartDate = projdetails.PDStartDate;
this.project.UserID = projdetails.UserID;
  }

  public OnClickSuspend(project:ProjectModel)
  {
    this.servicecall.deleteProject(this.project).subscribe((data:any)=>{console.log(data)});
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
