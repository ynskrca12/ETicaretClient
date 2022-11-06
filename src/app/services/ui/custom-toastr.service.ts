import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string,toastrOptinos: Partial<ToastrOptions>){
    this.toastr[toastrOptinos.messageType](message,title,{positionClass:toastrOptinos.position})
  }

}

export class ToastrOptions{
  messageType: ToastrMessageType
  position: ToastrPositon
}

export enum ToastrMessageType{
Success = "success",
Info = "info",
Warning = "warning",
Error = "error",
}

export enum ToastrPositon {
  TopRight="toast-top-right",
  BottomRight="toast-bottom-right",
  BottomLeft="toast-bottom-left",
  TopLeft="toast-top-left",
  TopFullWidth="toast-top-full-width",
  BottomFullWidth="toast-bottom-full-width",
  TopCenter="toast-top-center",
  BottomCenter="toast-bottom-center"
}
