import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from 'src/app/models/basket.model';
import { BasketService } from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  baskets: Basket [] = [];

  constructor(private _basketService : BasketService, private _router : Router) {}

  ngOnInit() : void{
    this._basketService.getBaskets().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.baskets = res;
      },
      error : (err) => {
        console.log("ERROR", err);
        
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
    
  }
}
