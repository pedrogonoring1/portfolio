import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css']
})
export class IntroducaoComponent implements OnInit {

  public totalAnoExperiencia: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.recuperarAnosExperiencia();
  }

  public recuperarAnosExperiencia(): void {
    var anoAtual = new Date().getFullYear();
    var anoInicioExperiencia = 2019;
    this.totalAnoExperiencia = anoAtual - anoInicioExperiencia;
  }

}
