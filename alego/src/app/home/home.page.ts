import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private dataservice: DataService) {}
  gohoadon(){
    this.router.navigate(['hoadon']);
  } 

 
  addtocart(){
    this.dataservice.arraycart=[];
    for(let i=0; i<this.dataservice.data.databo.length; i++)
    {
      if(this.dataservice.data.databo[i].soluong>0)
      {
        this.dataservice.arraycart.push(this.dataservice.data.databo[i])
      }
    }
    for(let i=0; i<this.dataservice.data.datasua.length; i++)
    {
      if(this.dataservice.data.datasua[i].soluong>0)
      {
        this.dataservice.arraycart.push(this.dataservice.data.datasua[i])
      }
    }
    for(let i=0; i<this.dataservice.data.datarau.length; i++)
    {
      if(this.dataservice.data.datarau[i].soluong>0)
      {
        this.dataservice.arraycart.push(this.dataservice.data.datarau[i])
      }
    }
    
  }

}
