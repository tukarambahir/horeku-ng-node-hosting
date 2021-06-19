import { PreviewComponent } from './../../order/preview/preview.component';
import { OrderService } from './../../order/order.service';
import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = []
  totalAmount = 0

  constructor(
    private toastr: ToastrService,
    private cartService: CartService,
    private orderService: OrderService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadCartItems()
  }

  loadCartItems() {
    this.cartService
      .getCartItems()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.items = response['data']
          this.totalAmount = 0
          for (let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            this.totalAmount += parseFloat(item['totalAmount'])
          }
        }
      })
  }

  updateQuantity(quantity, item) {
    const newQuantity = item['quantity'] + quantity
    if (newQuantity == 0) {
      this.onDelete(item)
    } else {
      this.cartService
        .updateCartItem(item['id'], newQuantity, item['price'])
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.success('updated quantity')
            this.loadCartItems()
          }
        })
    }
  }

  onDelete(item) {
    this.cartService
      .deleteCartItem(item['id'])
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.toastr.success('deleted cart item')
          this.loadCartItems()
        }
      })
  }


  loadOrderPreview() {
    this.modalService.open(PreviewComponent, { size: 'lg'})
  }

}
