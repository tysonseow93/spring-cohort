import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterListComponent} from "./components/character-list/character-list.component";
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'character-list', component: CharacterListComponent },
  { path: 'home', component: HomeComponent },
 // { path: '', redirectTo: 'home', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
