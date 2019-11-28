import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/Forms';
import { UserModel } from './UserModel';
import { ProjectModel } from './ProjectModel';
import { TaskModel } from './TaskModel';

@Injectable({
  providedIn: 'root'
})

export class SBAService{

  private httpHeaders: HttpHeaders;  

  private UserAPIserviceUrl : string ="http://localhost:50407/api/UserAPI"; 
  private ProjectAPIserviceUrl : string ="http://localhost:50407/api/ProjectAPI"; 
  private TaskAPIserviceUrl : string ="http://localhost:50407/api/TaskAPI"; 

  constructor(private httpClient:HttpClient){
    this.httpHeaders = new HttpHeaders({'content-Type' : 'application/json; charset=utf-8'});    
  }

  public getUserList(){
    return this.httpClient.get(this.UserAPIserviceUrl, { headers : this.httpHeaders });
  }

  public addUser(user:UserModel){
    return this.httpClient.post(this.UserAPIserviceUrl,user,{ headers: this.httpHeaders});
  }

  public updateUser(user:UserModel)
  {
    return this.httpClient.put(this.UserAPIserviceUrl+"/"+user.UserID,user,{headers : this.httpHeaders});
  }

  public deleteUser(user:UserModel)
  {
    return this.httpClient.delete(this.UserAPIserviceUrl+"/"+user.UserID,{headers:this.httpHeaders});
  }




  public getProjectList(){
    return this.httpClient.get(this.ProjectAPIserviceUrl, { headers : this.httpHeaders });
  }

  public addProject(project:ProjectModel){
    return this.httpClient.post(this.ProjectAPIserviceUrl,project,{ headers: this.httpHeaders});
  }

  public updateProject(project:ProjectModel)
  {
    return this.httpClient.put(this.ProjectAPIserviceUrl+"/"+project.Project_ID,project,{headers : this.httpHeaders});
  }

  public deleteProject(project:ProjectModel)
  {
    return this.httpClient.delete(this.ProjectAPIserviceUrl+"/"+project.Project_ID,{headers:this.httpHeaders});
  }



  public getTaskList(){
    return this.httpClient.get(this.TaskAPIserviceUrl, { headers : this.httpHeaders });
  }

  public addTask(task:TaskModel){
    return this.httpClient.post(this.TaskAPIserviceUrl,task,{ headers: this.httpHeaders});
  }

  public updateTask(task:TaskModel)
  {
    return this.httpClient.put(this.TaskAPIserviceUrl+"/"+task.TaskID,task,{headers : this.httpHeaders});
  }

  public deleteTask(task:TaskModel)
  {
    return this.httpClient.delete(this.TaskAPIserviceUrl+"/"+task.TaskID,{headers:this.httpHeaders});
  }


}