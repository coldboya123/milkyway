import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-bo',
  templateUrl: './bo.page.html',
  styleUrls: ['./bo.page.scss'],
})
export class BoPage implements OnInit {

  constructor(private dataservice: DataService) { }

  tang(productId){
    for(let i=0; i<this.dataservice.data.databo.length;i++)
    {
      if(productId==this.dataservice.data.databo[i].id)
      {
        const element = this.dataservice.data.databo[i]
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
    for(let i=0; i<this.dataservice.data.databo.length;i++)
    {
      const element = this.dataservice.data.databo[i];
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
