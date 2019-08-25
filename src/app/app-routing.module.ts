import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }, 
  { path: 'about', loadChildren: './about/about.module#AboutPageModule'},
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule'},
  { path: 'lesson', loadChildren: './lesson/lesson.module#LessonPageModule'},
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'test-start', loadChildren: './test-start/test-start.module#TestStartPageModule'},
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
  { path: 'lesson-start', loadChildren: './lesson-start/lesson-start.module#LessonStartPageModule'},
  
  { path: 'test-end', loadChildren: './test-end/test-end.module#TestEndPageModule'},
  { path: 'score', loadChildren: './score/score.module#ScorePageModule' },
  { path: 'test-score', loadChildren: './test-score/test-score.module#TestScorePageModule'},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
