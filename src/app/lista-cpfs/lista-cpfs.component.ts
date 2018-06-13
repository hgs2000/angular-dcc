import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from './pessoa-fisica.class';
import { BancoDeDados } from "../controle-db";
import { AppComponent } from '../app.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-cpfs',
  templateUrl: './lista-cpfs.component.html',
  styleUrls: ['./lista-cpfs.component.css']
})
export class ListaCPFsComponent implements OnInit {

  private arrayCPFS: Array<PessoaFisica>;
  public constructor(private titleService: Title){
    this.setTitle("Pessoas Físicas | Controle de Clientes Direcon")
  }
  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    //new BancoDeDados();
    //this.arrayCPFS = BancoDeDados.getCPFs();
  }

}
