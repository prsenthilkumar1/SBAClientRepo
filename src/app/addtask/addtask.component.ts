import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormGroup, NgForm } from '@angular/forms';
import { SBAService } from '../User.service';
import { ProjectModel } from '../ProjectModel';
import { UserModel } from '../UserModel';
import { ProjectDetailModel } from '../ProjectDetailModel';
import { TaskDetailModel } from '../TaskDetailModel';
import { TaskModel } from '../TaskModel';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  public projectdetail:any=[];
  public taskDetail:any=[];
  public users: any=[];
  public project:ProjectModel;
  public task : TaskModel;
  public parenttaskid:number;
  public userid : number;
  public projectid : number;
  public submitted:boolean;

  constructor(private router: Router
    , private servicecall:SBAService) 
    {
      this.project = new ProjectModel;
      this.task = new TaskModel;

      this.servicecall.getProjectList().subscribe((data:any)=>{this.projectdetail=data;});
      this.servicecall.getTaskList().subscribe((data:any)=>{this.taskDetail=data;});
      this.servicecall.getUserList().subscribe((data:any)=>{this.users=data;});
     }

  ngOnInit() {
  }


  public OnClickAddTask(taskForm: NgForm)
  {
    // if(task.TaskID != null)
    // {
    //   this.servicecall.updateTask(this.task).subscribe((data:any)=>{console.log(data)});
    // }
    // else
    // {
    //   this.servicecall.addTask(this.task).subscribe((data:any)=>{console.log(data)});
    // }

    this.submitted = true;
    if (taskForm.valid) {
      if (this.task && this.task.TaskID > 0) {
        this.servicecall.updateTask(this.task).subscribe((data:any)=>{console.log(data)});      
      } else {
        this.servicecall.addTask(this.task).subscribe((data:any)=>{console.log(data)});        
      }

      taskForm.reset();

      this.submitted = false;
    }
  }

  public OnClickResetTask()
  {
    this.task = new TaskModel;
  }

  selectChangeHandler (event: any) {
    //update the ui    
    this.parenttaskid = event.target.value;
  }

  userselectChangeHandler (event: any) {
    //update the ui    
    this.userid = event.target.value;
  }

  projectselectChangeHandler (event: any) {
    //update the ui
    this.projectid = event.target.value;
  }

  public OnClickEditTask(taskDeta:TaskDetailModel)
  {    
    this.task.EndDate = taskDeta.TaskEndDate;
    this.task.ParentID  = taskDeta.ParentTaskID;
    this.task.Priority  = taskDeta.TaskPriority;
    this.task.ProjectID  = taskDeta.TaskProjectID;
    this.task.StartDate = taskDeta.TaskStartDate;
    this.task.Status  = taskDeta.TaskStatus;
    this.task.TaskID  = taskDeta.TaskID;
    this.task.TaskName  = taskDeta.TaskName;
    this.task.UserID  = taskDeta.UserID;
  }

  public OnClickTask(taskDeta:TaskDetailModel)
  {

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
