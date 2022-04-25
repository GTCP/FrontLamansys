import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {
  cancel(){
    this.matDialogRef.close();
  }
  confirm(){
    this.data.delete=true;
    this.matDialogRef.close(this.data);
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: {delete: boolean}, private matDialogRef: MatDialogRef<DeleteTaskComponent>) { }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.matDialogRef.close(this.data);
  }
}