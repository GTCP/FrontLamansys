import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { BaseComponent } from './base/base.component';
import { getAllJSDocTagsOfKind } from 'typescript';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { MyepicsComponent } from './myepics/myepics.component';
import { MyallstoriesComponent } from './myallstories/myallstories.component';
import { MyuserstoriesComponent } from './myuserstories/myuserstories.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SpinnerService } from './services/spinner.service';
import { LocalStorageService } from './services/local-storage.service';
@NgModule({
  declarations: [DeleteTaskComponent,HomeComponent, HeaderComponent, NavbarComponent, BaseComponent, MyprojectsComponent, MyallstoriesComponent, MyepicsComponent, MyepicsComponent, MyuserstoriesComponent, MytasksComponent, UserProfileComponent, AddTaskComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ], exports:[BaseComponent], providers:[SpinnerService,LocalStorageService]
})
export class CoreModule { }