import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Define your home route
  { path: 'houses', component: HouseListComponent },  // Define your house list route
  { path: 'houses/:id', component: HouseDetailComponent }  // Define your house detail route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure RouterModule.forRoot is used
  exports: [RouterModule] // Export RouterModule
})
export class AppRoutingModule { }
