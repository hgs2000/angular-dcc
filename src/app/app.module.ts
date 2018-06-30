import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListaCPFsComponent } from './lista-cpfs/lista-cpfs.component';
import { CpfComponent } from './lista-cpfs/cpf/cpf.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './404/Error404.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'cpfs', component: ListaCPFsComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListaCPFsComponent,
    CpfComponent,
    NavbarComponent,
    Error404Component,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [Title],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
