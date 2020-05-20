import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-rau',
  templateUrl: './rau.page.html',
  styleUrls: ['./rau.page.scss'],
})
export class RauPage implements OnInit {

  constructor(private dataservice: DataService) { }

  tang(productId){
    for(let i=0; i<this.dataservice.data.datarau.length;i++)
    {
      if(productId==this.dataservice.data.datarau[i].id)
      {
        const element = this.dataservice.data.datarau[i]
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
    for(let i=0; i<this.dataservice.data.datarau.length;i++)
    {
      const element = this.dataservice.data.datarau[i];
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
