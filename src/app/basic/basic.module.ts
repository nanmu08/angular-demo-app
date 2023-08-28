import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    NavigationComponent
  ]
})
export class BasicModule { }
