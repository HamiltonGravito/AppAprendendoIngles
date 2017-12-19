import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from "../shared/frase.model" 
import { FRASES } from "./frases.mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a Frase: ";
  public resposta: string = "";
  
  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progressoPainel: number = 0;

  public tentativasPainel: number = 3;

  //@Output é usado para comunicação do component filho para o pai, precisa ser importado do core do angular
  //O EventEmitter dispara um evento, onde, o tipo a ser trabalhado é uma string
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  //Ciclo de Vida - ngOnChanges() é desparado logo depois do constructor, podendo assim alterar
  //propriedades no momento da instancia do mesmo;
  //ngOnInit() - Neste momento a instancia do component já está completa, então pode-se realizar ações;
  //ngOnDestroy() - Executado quando o component deixa de existir (Ex.: Condições);
  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Painel foi Destruído!");
  }

  public atualizaResposta(resposta: Event): void {
    //Esse é um elemento HTMLInputElement e assin é possivel acessar o value contigo no target do elemento
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta){
       //Trocar pergunta da rodada
      this.rodada++;

      this.progressoPainel = this.progressoPainel + (100 / this.frases.length);

      //Atualiza a frase a ser exibida
      this.atualizaRodada();
    
    } else {
        this.tentativasPainel--;

        if(this.tentativasPainel === -1){
          this.encerrarJogo.emit("derrota");
        }
    }
    
  }

  public atualizaRodada(): void{
    //Inicia o component com uma frase de acordo com a rodada;
    if(this.rodada < this.frases.length){
    this.rodadaFrase = this.frases[this.rodada];
    }else if (this.rodada === this.frases.length) {
      this.encerrarJogo.emit("vitoria")
    }
    //limpar resposta
    this.resposta = "";
  }

}
