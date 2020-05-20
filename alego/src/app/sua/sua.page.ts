import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { element } from 'protractor';
import { getLocaleTimeFormat } from '@angular/common';
@Component({
  selector: 'app-sua',
  templateUrl: './sua.page.html',
  styleUrls: ['./sua.page.scss'],
})
export class SuaPage implements OnInit {

  constructor(private dataservice: DataService) { }



  tang(productId){
    for(let i=0; i<this.dataservice.data.datasua.length;i++)
    {
      if(productId==this.dataservice.data.datasua[i].id)
      {
        const element = this.dataservice.data.datasua[i]
        if(element.soluong>8)
        {
          alert("Vượt quá số lượng cho phép")
          return;
        }
        if(element.id==productId)
        {
          element.soluong++;
        }
      }
    }
  }

  giam(Id){
    for(let i=0; i<this.dataservice.data.datasua.length;i++)
    {
      const element = this.dataservice.data.datasua[i];
      if(element.soluong<1)
      {
        return;
      }
      if(element.id==Id)
      {
        element.soluong--;
      }
    }
  }
  ngOnInit() {
  }

}
