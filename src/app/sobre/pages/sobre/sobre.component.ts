import { Component, OnInit } from '@angular/core';
import { Skil } from '../../models/skils';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  public minhasSkills: Skil[];

  constructor() { }

  ngOnInit(): void {
    this.minhasSkills = [];
    this.instanciarSkils();
  }

  private instanciarSkils(): void {
    var skil1 = new Skil({
      Nome: "Angular+",
      NivelHabilidade: '93%'
    });
    var skil2 = new Skil({
      Nome: "React",
      NivelHabilidade: '80%'
    });
    var skil3 = new Skil({
      Nome: "CSS",
      NivelHabilidade: '85%'
    });
    var skil4 = new Skil({
      Nome: "Typescript",
      NivelHabilidade: '93%'
    });
    var skil5 = new Skil({
      Nome: ".Net",
      NivelHabilidade: '90%'
    });
    var skil6 = new Skil({
      Nome: "C#",
      NivelHabilidade: '90%'
    });
    var skil7 = new Skil({
      Nome: "Node.js",
      NivelHabilidade: '90%'
    });
    var skil8 = new Skil({
      Nome: "SQL",
      NivelHabilidade: '80%'
    });

    this.minhasSkills.push(skil1);
    this.minhasSkills.push(skil2);
    this.minhasSkills.push(skil3);
    this.minhasSkills.push(skil4);
    this.minhasSkills.push(skil5);
    this.minhasSkills.push(skil6);
    this.minhasSkills.push(skil7);
    this.minhasSkills.push(skil8);
  }

}
