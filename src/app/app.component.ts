import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { Planeta } from './models/planeta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'b2wcode';

  planeta = {} as Planeta;
  planetas: Planeta[];

  constructor(private planetaService: SwapiService) {}
  
  ngOnInit() {
    this.getPlanetas();
  }
    // Chama o serviço para obter todos os planetas
    getPlanetas() {
      this.planetaService.getPlanetas().subscribe((planetas: Planeta[]) => {
        this.planetas = planetas;
      });
    }
}
