import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {AuthnavbarComponent} from './authnavbar.component';
@NgModule({
  imports: [
      RouterModule,
      CommonModule
  ],
  declarations: [AuthnavbarComponent],
  exports: [ AuthnavbarComponent ]
})
export class AuthnavbarModule { }
