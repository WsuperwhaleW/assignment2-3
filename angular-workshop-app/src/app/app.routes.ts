import { Routes } from '@angular/router';
import { Assignment2Component } from './assignment-2/assignment-2.component';
import { CatComponent } from './cat/cat.component';

export const routes: Routes = [
    { path: 'assignment-2', component: Assignment2Component },
    { path: 'cat', component: CatComponent }
];
