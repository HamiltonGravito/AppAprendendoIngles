import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //Controla o aspecto visual da barra, onde por String Interpolation um valor da classe do bootstrap é alterada
  //@Input (Property binding) decora (decorator do core @angular) a variavel para que o atributo progresso possa receber um parametro quando este for instanciado
  @Input() public progresso: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
