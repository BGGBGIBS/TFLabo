import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/warehouse.model';
import { WarehouseService } from 'src/app/services/warehouse/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  warehouses: Warehouse [] = [];

  constructor(private _WarehouseService : WarehouseService, private _router : Router) {}

  ngOnInit() : void{
    this._WarehouseService.getWarehouses().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.warehouses = res;
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
