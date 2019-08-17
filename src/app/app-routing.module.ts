import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'lesson', loadChildren: './lesson/lesson.module#LessonPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'lesson-start', loadChildren: './lesson-start/lesson-start.module#LessonStartPageModule' },
  { path: 'test-start', loadChildren: './test-start/test-start.module#TestStartPageModule' },
  { path: 'test-end', loadChildren: './test-end/test-end.module#TestEndPageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
