import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TasksComponent } from './tasks/tasks.component';
import { PrivateTasksComponent } from './private-tasks/private-tasks.component';
import { SendEmailComponent } from './send-email/send-email.component';

import { AuthGuard } from './auth.guard';
import { ConfigComponent } from './config/config.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
{path: 'login', component:LoginComponent},
{path:'dashboard', component:DashBoardComponent},
{path:'Registrarse', component:RegistroComponent},
{path: 'tasks', component:TasksComponent},
{path: 'private', component:PrivateTasksComponent,canActivate:[AuthGuard]},
{path:'config',component:ConfigComponent},
{path:'listar-producto',component: ListarProductoComponent},
{path:'editar-producto/:id',component: ListarProductoComponent},
{path:'contact',component: ContactComponent},
{path:'verification', component: SendEmailComponent},
{path: '', pathMatch:'full',redirectTo:'dashboard'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
