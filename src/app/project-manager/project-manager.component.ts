import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  public isAddProject: boolean;
  public isAddTask: boolean;
  public isAddUser: boolean;
  public isViewUser: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }



  public OnAddProject(): void 
  {
    this.isAddProject=true;
    this.isAddTask=false;
    this.isAddUser=false;
    this.isViewUser=false;
    //this.router.navigateByUrl('/addproject');
    //this.router.navigate(['/addproject']);
  }

  public OnAddTask(): void 
  {
    this.isAddProject=false;
    this.isAddTask=true;
    this.isAddUser=false;
    this.isViewUser=false;

    //this.router.navigateByUrl('/addtask');
    //this.router.navigate(['/addtask']);
  }

  public OnAddUser(): void 
  {
    this.isAddProject=false;
    this.isAddTask=false;
    this.isAddUser=true;
    this.isViewUser=false;

    //this.router.navigateByUrl('/user');
    //this.router.navigate(['/adduser']);
  }

  public OnViewUser(): void 
  {

    this.isAddProject=false;
    this.isAddTask=false;
    this.isAddUser=false;
    this.isViewUser=true;

    //this.router.navigateByUrl('/user');
    //this.router.navigate(['/addproject']);
  }

}
