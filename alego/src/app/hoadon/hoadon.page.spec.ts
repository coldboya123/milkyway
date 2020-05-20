import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoadonPage } from './hoadon.page';

describe('HoadonPage', () => {
  let component: HoadonPage;
  let fixture: ComponentFixture<HoadonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoadonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoadonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
