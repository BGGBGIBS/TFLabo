import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/models/inventory.model';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  inventories: Inventory [] = [];

  constructor(private _inventoryService : InventoryService, private _router : Router) {}

  ngOnInit() : void{
    this._inventoryService.getInventories().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.inventories = res;
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
