import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {BrowseComponent} from './browse/browse.component';
import {TestComponent} from './test/test.component'

export const router: Routes = [
    {path: '', component: TestComponent},
    {path: 'browse', component: BrowseComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);