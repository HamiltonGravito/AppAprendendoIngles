import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from "../shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

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

  //Ciclo de Vida - Metodo executado durante o processo de decoração (input dos dados) de um component pai para filho
  ngOnChanges(){
    //Nesse caso sempre que o valor de tentativas for atualizado essa informação irá aparecer
    console.log(this.tentativas);
  }

  //Esse metodo é executado apenas uma unica vez quando o component é instanciado
  ngOnInit() {
    //Essa instrução é inserida aqui para que o processo de decoração de variavel
    //de tentativas seja executado, o que não acontece dentro do constructor, pois,
    //as propriedades do objeto só são alteradas no metodo ngOnChangs depois do constructor.
    console.log(this.tentativas);
  }
}
