import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectManagerComponent } from './project-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

describe('ProjectManagerComponent', () => {
  let component: ProjectManagerComponent;
  let fixture: ComponentFixture<ProjectManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ ProjectManagerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
