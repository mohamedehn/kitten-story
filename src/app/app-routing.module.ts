import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const routes: Routes = [
  {path: "", component: ListKittenComponent},
  {path: "list-kitten", component: ListKittenComponent},
  {path: "add-kitten", component: CreateKittenComponent},
  {path: "my-kitten", component: UserKittenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
