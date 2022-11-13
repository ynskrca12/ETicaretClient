import { Component, OnInit } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_ product';
import { ProductService } from '../../../../services/common/models/product.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent  implements OnInit {

  constructor(private productService: ProductService,private alertify: AlertifyService) {

  }

  ngOnInit(): void {
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement){

    const create_product: Create_Product = new Create_Product()
    create_product.name = name.value
    create_product.stock = parseInt(stock.value)
    create_product.price = parseFloat(price.value)

    if(!name.value ){
      this.alertify.message("lütfen ürün adını giriniz", {
        dismissOthers:true,
        messageType: MessageType.Error,
        position:Position.TopRight
      })
    }

    this.productService.create(create_product, () => {

      this.alertify.message("Ürün başarıyla eklenmiştir.", {
        dismissOthers:true,
        messageType: MessageType.Success,
        position:Position.TopRight
      })
    },errorMessage => {
      this.alertify.message(errorMessage,
        {
          dismissOthers:true,
          messageType:MessageType.Error,
          position:Position.TopRight
        })
    })
  }
}
