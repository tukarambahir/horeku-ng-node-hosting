import { CartService } from './../../product/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  items = []
  totalAmount = 0
  delivery = 0
  payableAmount = 0
  constructor(private cartService: CartService) { 
  this.loadOrderItems()
  }

  ngOnInit(): void {
  }
  loadOrderItems(){
    this.cartService.getCartItems()
    .subscribe(response => {
      console.log(response)
      if (response['status'] == 'success') {
        this.items = response['data']
        this.totalAmount = 0
        for (let index = 0; index < this.items.length; index++) {
          const item = this.items[index];
          this.totalAmount += parseFloat(item['totalAmount'])
        }
        this.delivery = 18*this.totalAmount/100
        this.payableAmount = this.delivery + this.totalAmount
      }
    })


  }
}
