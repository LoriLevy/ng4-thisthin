// Imports
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


// Route Configuration
export const routes: Routes = [
{ path: '*',  redirectTo: './' },
{ path: '',  redirectTo: './' }
] 

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);