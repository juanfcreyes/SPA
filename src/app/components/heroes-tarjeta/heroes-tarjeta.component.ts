import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styles: []
})
export class HeroesTarjetaComponent implements OnInit {
  
  
  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  
  verHeroe(idx:number){
    this._router.navigate(['/heroe',this.index]);
  }


}
