import { Component, OnInit, Input } from '@angular/core';

import { Coracao } from "../shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

   //Property Binding (Afeta atributos dos elementos HTML, definindo-os através de variáveis)
   //public coracaoVazio: string = "../assets/coracao_vazio.png";
   //public coracaoCheio: string = "../assets/coracao_cheio.png";

   @Input() public tentativas: number;

   public coracoes: Coracao[] = [
     //No constructor existem 3 parametros porem dois já estão definidos como default,
     //então, posso passar apenas o que falta, mas poderia também sobrescrever os outros
      new Coracao(true), new Coracao(true), new Coracao(true)
   ];
 
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.tentativas);
  }
}
