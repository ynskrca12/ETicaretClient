import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent,SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService}  from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { Create_Product } from 'src/app/contracts/create_ product';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {

  }

  @ViewChild(ListComponent) listComponets : ListComponent
  createdProduct(createdProduct:Create_Product){
this.listComponets.getProducts()
  }

}
