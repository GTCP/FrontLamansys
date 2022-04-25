import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
	declarations: [],
	imports: [
        FormsModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatSelectModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatDividerModule,
        MatExpansionModule,
		MatListModule,
		CommonModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatCardModule,
        MatSidenavModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
	],
	exports: [
        FormsModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatSelectModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatDividerModule,
        MatExpansionModule,
		MatListModule,
		CommonModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatCardModule,
        MatSidenavModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,   
	]
})
export class MaterialModule {
}
