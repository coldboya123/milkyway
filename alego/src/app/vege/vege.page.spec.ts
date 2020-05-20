import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VegePage } from './vege.page';

describe('VegePage', () => {
  let component: VegePage;
  let fixture: ComponentFixture<VegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
