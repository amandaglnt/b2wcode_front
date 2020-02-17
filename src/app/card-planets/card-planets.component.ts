import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';
import { Planeta } from '../models/planeta';

@Component({
  selector: 'app-card-planets',
  templateUrl: './card-planets.component.html',
  styleUrls: ['./card-planets.component.css']
})
export class CardPlanetsComponent implements OnInit {

  planeta = {} as Planeta;
  planetas: Planeta[];

  constructor(private planetaService: SwapiService) {}
  
  ngOnInit() {
    this.getPlanetas();
    this.getPlanetaById();
  }
    // Chama o serviço para obter todos os planetas.
    getPlanetas() {
      this.planetaService.getPlanetas().subscribe((planetas: Planeta[]) => {
        this.planetas = planetas;
      });
    }

    // Chama o serviço para obter planeta por ID.
    getPlanetaById() {
      this.planetaService.getPlanetaById(this.randomInt(1,61)).subscribe((planeta: Planeta) => {
        
        planeta.qtdFilme = planeta.films.length;

        this.planeta = planeta;
      });
    }

    // Aleatoriza os planetas. 
    randomInt(min, max): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

