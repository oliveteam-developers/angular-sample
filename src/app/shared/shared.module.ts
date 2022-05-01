import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

const sharedModules = [
  CommonModule,
  FormsModule,
];

@NgModule({
  imports: [
    ...sharedModules
  ],
  declarations: [],
  exports: [
    ...sharedModules,
  ]
})
export class SharedModule { }