import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: []
})
export class ResultadoComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string; 
  constructor(private activatedRoute: ActivatedRoute, 
              private _heroesService: HeroesService) { 
  
  }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
   
  }

}
