import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/core/home/home.component';
import { MyallstoriesComponent } from './modules/core/myallstories/myallstories.component';
import { MyprojectsComponent } from './modules/core/myprojects/myprojects.component';
import { MyepicsComponent } from './modules/core/myepics/myepics.component';
import { MyuserstoriesComponent } from './modules/core/myuserstories/myuserstories.component';
import { MytasksComponent } from './modules/core/mytasks/mytasks.component';
import { UserProfileComponent } from './modules/core/user-profile/user-profile.component';
import { AddTaskComponent } from './modules/core/add-task/add-task.component';
import { LoginComponent } from './modules/core/login/login.component';
import { AuthService } from './modules/api-rest/services/auth.service';
const routes: Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'home', component: HomeComponent, canActivate: [AuthService] },
	{ path: 'my-projects', component: MyprojectsComponent, canActivate: [AuthService]},
	{ path: 'my-allstories', component: MyallstoriesComponent,canActivate: [AuthService]},
	{ path: 'my-projects/:id', component: MyepicsComponent,canActivate: [AuthService]},
	{ path: 'my-projects/:id/my-epics/:id' , component: MyuserstoriesComponent,canActivate: [AuthService]}, 
	{ path: 'my-projects/:id/my-epics/:id/my-user-stories/:id' , component: MytasksComponent,canActivate: [AuthService]}, 
	{ path: 'my-allstories/:id', component: MytasksComponent,canActivate: [AuthService]},
	{ path: 'my-form/add-task', component: AddTaskComponent,canActivate: [AuthService]},
	{ path: 'login', component: LoginComponent},
	{ path: 'user', component: UserProfileComponent,canActivate: [AuthService]},
	{path: '**', redirectTo: 'login',canActivate: [AuthService]}, 
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }