import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from './pessoa-fisica.class';

@Component({
  selector: 'app-lista-cpfs',
  templateUrl: './lista-cpfs.component.html',
  styleUrls: ['./lista-cpfs.component.css']
})
export class ListaCPFsComponent implements OnInit {

  private _arrayCPFS: Array<PessoaFisica>;



  ngOnInit() {

  }

}
