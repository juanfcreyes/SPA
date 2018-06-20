import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe'
  , templateUrl: './heroe.component.html'
})

export class HeroeComponent implements OnInit {
  heroe: Heroe;
  casas:any = {
      marvel: {
        img: 'assets/img/marvel.png',
        alt: 'Logo de Marvel'
      },
      dc: {
        img: 'assets/img/dc.png',
        alt: 'Logo de DC Comics'
      }
    };
 
  constructor(private activatedRoute: ActivatedRoute, 
              private _heroesService: HeroesService) {
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params.id);
    })
  }
  

}