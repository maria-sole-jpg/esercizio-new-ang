import { Routes } from '@angular/router';
// import { Pagina1Component } from './pages/pagina1/pagina1.component';
// import { Pagina2Component } from './pages/pagina2/pagina2.component';
// import { Pagina3Component } from './pages/pagina3/pagina3.component';

export const routes: Routes = [
  {path: 'pagina1', loadComponent: () => import('./pages/pagina1/pagina1.component').then(component => component.Pagina1Component )},
  {path: 'pagina2', loadComponent: () => import('./pages/pagina2/pagina2.component').then(component => component.Pagina2Component )},
  {path: 'pagina3', loadComponent: () => import('./pages/pagina3/pagina3.component').then(component => component.Pagina3Component )},
  {path: '', redirectTo: 'pagina1', pathMatch: 'full'}
];
