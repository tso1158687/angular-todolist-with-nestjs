import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutungModule } from './page-routung.module';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';



@NgModule({
  declarations: [AllTasksComponent],
  imports: [
    CommonModule,
    PageRoutungModule
  ]
})
export class PageModule { }
