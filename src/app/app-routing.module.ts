import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./pages/employee-list/employee-list.component"
import {ToolbarTitleComponent} from "./../app/shared/components/toolbar-title/toolbar-title.component"

const routes: Routes = [{
  path:"",
  component:EmployeeListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
