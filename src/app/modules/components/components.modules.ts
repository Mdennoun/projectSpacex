import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TimerComponent } from 'src/app/components/timer/timer.component';

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    TimerComponent
  ]
})
export class ComponentsModule { }