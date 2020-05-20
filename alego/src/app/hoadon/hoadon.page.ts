import { Component, OnInit } from '@angular/core';
import {DataService}  from './../data.service';

@Component({
  selector: 'app-hoadon',
  templateUrl: './hoadon.page.html',
  styleUrls: ['./hoadon.page.scss'],
})
export class HoadonPage implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

  data=[]=this.dataservice.arraycart;

}
