import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ListaCPFsComponent } from './lista-cpfs/lista-cpfs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CpfComponent } from './lista-cpfs/cpf/cpf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [{ path: 'cpfs', component: ListaCPFsComponent }]

@NgModule({
  declarations: [
    AppComponent,
    ListaCPFsComponent,
    CpfComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
