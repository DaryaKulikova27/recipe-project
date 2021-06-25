import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
imports: [MatButtonModule, MatToolbarModule, MatDialogModule],
exports: [MatButtonModule, MatToolbarModule, MatDialogModule]
})
export class MaterialAppModule { }
