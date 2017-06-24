import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { PersonComponent } from './person/person.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonStartComponent } from './person/person-start/person-start.component';
import { PersonTestComponent } from './person/person-test/person-test.component';

import { CityComponent } from './city/city.component';
import { CityStartComponent } from './city/city-start/city-start.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'person', component: PersonComponent, children: [
    { path: '', component: PersonStartComponent },
    { path: 'new', component:  PersonEditComponent},
    { path: 'test', component: PersonTestComponent },
    { path: ':id', component: PersonEditComponent },
  ] },
  { path: 'city', component: CityComponent, children: [
    { path: '', component: CityStartComponent },
    { path: 'new', component:  CityEditComponent},
    { path: ':id', component: CityEditComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
