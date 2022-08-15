import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TableEmployeesComponent } from './pages/table-employees/table-employees.component';
import { AddEmployeComponent } from './pages/add-employe/add-employe.component';
import { EditEmployeComponent } from './pages/edit-employe/edit-employe.component';
import { LoginComponent } from './pages/login/login.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ExitComponent } from './utils/exit/exit.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: TableEmployeesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "new",
    component: AddEmployeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "edit/:id",
    component: EditEmployeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: AddUserComponent
  },
  {
    path: "logout",
    component: ExitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
