import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkComponent } from './my-work.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: MyWorkComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: MyWorkComponent }])
  ],
  declarations: [MyWorkComponent]
})
export class MyWorkModule {}
