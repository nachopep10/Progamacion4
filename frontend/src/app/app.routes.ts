import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./pages/bienvenida/bienvenida').then(m => m.Bienvenida)
    },
    {
        path : 'sobremi',
        loadComponent: () => import('./pages/sobremi/sobremi').then(m => m.Sobremi)},
    {
        path : 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)

    },
    {
        path : 'registro',
        loadComponent: () => import('./pages/registro/registro').then(m => m.Registro)

    },
    {
        path : '**',
        loadComponent: () => import('./pages/error/error').then(m => m.Error)
    }




];
