import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

   //Property Binding (Afeta atributos dos elementos HTML, definindo-os através de variáveis)
   public coracaoVazio: string = "../assets/coracao_vazio.png";
   public coracaoCheio: string = "../assets/coracao_cheio.png";
 
  constructor() { }

  ngOnInit() {
  }
}
