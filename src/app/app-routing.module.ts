import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { animation: 'home'}
  },
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home'}
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    data: { animation: 'profile'}
  },
  { path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule',
    data: { animation: 'projects'}
  },
  { path: 'my-work',
    loadChildren: './my-work/my-work.module#MyWorkModule',
    data: { animation: 'my-work'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  { preloadingStrategy: SelectivePreloadingStrategyService })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
