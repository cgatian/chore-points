import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
    ],
  exports: [
    CommonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
