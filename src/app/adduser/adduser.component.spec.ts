import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdduserComponent } from './adduser.component';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, DebugElement  } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowserModule, By } from '@angular/platform-browser';


describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserComponent ],

      imports : [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserModule
      ],

      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    // .then(()=>{
    //   fixture = TestBed.createComponent(AdduserComponent);
    //   component = fixture.componentInstance;

    //   de = fixture.debugElement.query(By.css('form'));
    //   el = de.nativeElement;
    // });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
        expect(component).toBeTruthy();
  }); 
  
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AdduserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should show default task in the h2', () => {
    const fixture = TestBed.createComponent(AdduserComponent);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('h2'));
    expect(de.nativeElement.textContent).toEqual('Add User');
  });

//   const testForm = <NgForm>{
//     value: {
//       // FirstName: "Siva",
//       // LastName: "Saran",
//       // EmployeeID: "A64"
//     }
// };

  // it('should set submitted to true',async(()=>{
  //   component.OnClickAddUser(testForm);
  //   expect(component.submitted).toBeTruthy();
  // }));

  // it('should call the OnClickAddUser method',async(()=>{
  //   fixture.detectChanges();
  //   spyOn(component,'OnClickAddUser');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.OnClickAddUser).toHaveBeenCalledTimes(0);
  // }));

  // it('form should be invalid',async(()=>{
  //   component.addUserForm.controls['FirstName'].setValue('');
  //   component.addUserForm.controls['LastName'].setValue('');
  //   component.addUserForm.controls['EmployeeID'].setValue('');
  //   expect(component.addUserForm.invalid).toBeTruthy();
  // }));

  // it('form should be valid',async(()=>{
  //   component.addUserForm.controls['FirstName'].setValue('Siva');
  //   component.addUserForm.controls['LastName'].setValue('Saran');
  //   component.addUserForm.controls['EmployeeID'].setValue('A64');
  //   expect(component.addUserForm.valid).toBeTruthy();
  // }));

});
