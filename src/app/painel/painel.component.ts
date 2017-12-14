import { Component, OnInit } from '@angular/core';

import { Frase } from "../shared/frase.model" 
import { FRASES } from "./frases.mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a Frase: ";
  public resposta: string = "";
  
  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progressoPainel: number = 0;

  public tentativasPainel: number = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    //Esse é um elemento HTMLInputElement e assin é possivel acessar o value contigo no target do elemento
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert("A tradução esta CORRETA!");
       //Trocar pergunta da rodada
      this.rodada++;

      this.progressoPainel = this.progressoPainel + (100 / this.frases.length);

      //Atualiza a frase a ser exibida
      this.atualizaRodada();
    
    } else {
        alert("A tradução está INCORRETA!");
        this.tentativasPainel--;

        if(this.tentativasPainel === -1){
          alert("GAME OVER!")
        }
    }
    
  }

  public atualizaRodada(): void{
    //Inicia o component com uma frase de acordo com a rodada;
    this.rodadaFrase = this.frases[this.rodada];
    
    //limpar resposta
    this.resposta = "";
  }

}
