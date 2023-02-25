import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public anoAtual: number;

  constructor() { }

  ngOnInit(): void {
    this.anoAtual = this.recuperarAnoAtual();
  }

  private recuperarAnoAtual(): number {
    return new Date().getFullYear();
  }

}
