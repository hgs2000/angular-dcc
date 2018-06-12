import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from './pessoa-fisica.class';
import { BancoDeDados } from "../controle-db";

@Component({
  selector: 'app-lista-cpfs',
  templateUrl: './lista-cpfs.component.html',
  styleUrls: ['./lista-cpfs.component.css']
})
export class ListaCPFsComponent implements OnInit {

  private arrayCPFS: Array<PessoaFisica>;

  ngOnInit() {
    //new BancoDeDados();
    //this.arrayCPFS = BancoDeDados.getCPFs();
  }

}
