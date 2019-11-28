import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { SBAService } from './User.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';

// const appRoutes: Routes = [
// {path: 'projectmgr', component:ProjectManagerComponent  },
// {path: 'adduser', component:AdduserComponent  },
// {path: 'addtask', component:AddtaskComponent  },
// {path: 'addproject', component:AddprojectComponent  }
// ];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    ProjectManagerComponent,
    AddprojectComponent,
    AdduserComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    //RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SBAService],
  bootstrap: [ProjectManagerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
