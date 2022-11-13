import { Component, OnInit } from '@angular/core';
import { BaseComponent,SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService}  from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';

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

}
