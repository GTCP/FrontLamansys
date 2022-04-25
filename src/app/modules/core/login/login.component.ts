import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from '../../api-rest/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  onSubmit(): void{
    this.authService.authentication(this.myForm.get('username').value,this.myForm.get('password').value)
    .subscribe(data => {
      if(data.success){
        this.localStorage.updateItem("user", data.user.name.first);
        this.localStorage.updateItem("token", data.token);
        location.href = "http://localhost:4200/home";
      }
      else {
        this.showSnackbar();
      }
    });
  }
  constructor(private fb: FormBuilder,private authService: AuthService,private localStorage:LocalStorageService,private http: HttpClient,private snackBar: MatSnackBar){}
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm():void {
    this.myForm = this.fb.group({
      username: new FormControl('',[
        Validators.minLength(4),
        Validators.required,
      ]),
      password: new FormControl('',[
        Validators.minLength(4),
        Validators.required,
      ]),
    })
  }
  showSnackbar() {
    this.snackBar.open("¡Porfavor ingresa datos válidos para ingresar!",'', {
      duration: 2000,
      verticalPosition: 'bottom', 
      horizontalPosition: 'center',
    });
  }
}