import { Component,OnInit,Inject,} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  myForm: FormGroup;
  cancel(){
    let completed=false;
    this.data.done= completed;
    this.matDialogRef.close(this.data);
  }
  onSubmit(): void{
    this.data.name=this.myForm.get('name').value;
    this.data.description= this.myForm.get('description').value;
    this.data.due=this.myForm.get('due').value;
    let done=this.myForm.get('done').value;
    let completed;
    if(done==="finalizado"){
      completed=true;
    }
    else {
      completed=false;
    }
    this.data.done= completed;
    if(this.data.name === ''){
      this.data.okey=false;
      this.matDialogRef.close(this.data);
    }
    else {
      if((this.data.description === '') || (this.data.description.length >= 10)){
        this.data.okey=true;
        this.matDialogRef.close(this.data);
      }     
    }
  }
  constructor(public fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: { name: string
  description: string,
  due: string,
  done: boolean,okey: boolean}, public matDialogRef: MatDialogRef<AddTaskComponent>) { }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm():void {
    this.myForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      done: new FormControl('',[
      ]),
      description: new FormControl('',[
        Validators.minLength(10)
      ]),due: new FormControl('',[
      ]),
    })
  }
  ngOnDestroy(): void {
    this.matDialogRef.close(this.data);
  }
}