import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule
    ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
