import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data: any = {
    databo:[
      {
        id:1,
        name: 'Bò Mỹ',
        image: '../../assets/images/bomy.jpg',
        soluong: 0,
        gia: 8
      },
      {
        id:2,
        name: 'Gân Bò',
        image: '../../assets/images/bogan.jpg',
        soluong: 0,
        gia: 7
      },
      {
        id:3,
        name: 'Bò Xay',
        image: '../../assets/images/boxay.jpg',
        soluong: 0,
        gia:5
      },
      {
        id:4,
        name: 'Sườn Bò',
        image: '../../assets/images/bosuon.jpg',
        soluong: 0,
        gia: 6
      },
      {
        id:5,
        name: 'Bò Miếng',
        image: '../../assets/images/bomieng.jpg',
        soluong: 0,
        gia: 8
      }
    ],
    datasua:[
      {
        id:1,
        name: 'Fami',
        image: '../../assets/images/fami.jpg',
        soluong: 0,
        gia: 4
      },
      {
        id:2,
        name: 'TH',
        image: '../../assets/images/TH.jpg',
        soluong: 0,
        gia: 5
      },
      {
        id:3,
        name: 'Ba Vì',
        image: '../../assets/images/bavi.jpg',
        soluong: 0,
        gia: 5
      },
      {
        id:4,
        name: 'Vinamilk',
        image: '../../assets/images/vinamilk.jpg',
        soluong: 0,
        gia: 6
      },
      {
        id:5,
        name: 'Milo',
        image: '../../assets/images/milo.jpg',
        soluong: 0,
        gia: 5
      }
    ],
    datarau:[
      {
        id:1,
        name: 'Cà Chua',
        image: '../../assets/images/cachua.jpg',
        soluong: 0,
        gia: 7
      },
      {
        id:2,
        name: 'Bắp Cải',
        image: '../../assets/images/bapcai.jpg',
        soluong: 0,
        gia: 6
      },
      {
        id:3,
        name: 'Cải',
        image: '../../assets/images/cai.png',
        soluong: 0,
        gia: 5
      },
      {
        id:4,
        name: 'Cà Rốt',
        image: '../../assets/images/carot.jpg',
        soluong: 0,
        gia: 8
      },
      {
        id:5,
        name: 'Dưa Chuột',
        image: '../../assets/images/duachuot.jpg',
        soluong: 0,
        gia: 7
      }
    ]
  }

  arraycart= [];

}
