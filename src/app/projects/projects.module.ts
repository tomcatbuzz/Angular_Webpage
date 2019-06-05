import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '../material.module';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ProjectsComponent }]),
    SwiperModule,
    FlexLayoutModule
  ],
  declarations: [ProjectsComponent],
  providers: [ { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG} ],
})
export class ProjectsModule {}
