import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./pages/employee-list/employee-list.component"
import { ToolbarTitleComponent } from "./../app/shared/components/toolbar-title/toolbar-title.component"
import {EmployeeDetailsComponent} from "./pages/employee-details/employee-details.component"

const routes: Routes = [{
  path: "",
  component: EmployeeListComponent
},
{
  path: "employee/:id",
  component: EmployeeDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
