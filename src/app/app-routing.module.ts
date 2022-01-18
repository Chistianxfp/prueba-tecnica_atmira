import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayPostComponent } from './views/day-post/day-post.component';
import { DaysPreviewComponent } from './views/days-preview/days-preview.component';

const routes: Routes = [
  {
    path: '', component: DaysPreviewComponent
  },
  {
    path: 'daypost/:date', component: DayPostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }