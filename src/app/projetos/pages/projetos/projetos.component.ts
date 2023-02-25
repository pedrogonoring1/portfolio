import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  public myProjects: Project[];

  constructor() { }

  ngOnInit(): void {
    this.myProjects = [];
    this.instanciarMeusProjetos();
  }

  public instanciarMeusProjetos(): void {
    var project1 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    var project2 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    var project3 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    var project4 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    var project5 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    var project6 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    var project7 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    var project8 = new Project({
      Nome: 'Mestre Cuca',
      UrlImage: 'assets/mestre-cuca.png',
      UrlProject: 'https://github.com/pedrogonoring1/mestre-cuca-site',
      Alt: 'Site de Culinaria Mestre Cuca'
    });

    this.myProjects.push(project1);
    this.myProjects.push(project2);
    this.myProjects.push(project3);
    this.myProjects.push(project4);
    this.myProjects.push(project5);
    this.myProjects.push(project6);
    this.myProjects.push(project7);
    this.myProjects.push(project8);
  }

}
