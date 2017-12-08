import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //One-Way-Binding (Comunicação da classe para o template) / String Interpolation {{}} (Permite a inclusão de atribtos em qualquer lugar do template e também realiza expressões)
  public titulo: string = "Aprendendo Inglês";
}
