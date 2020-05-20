import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuaPage } from './sua.page';

describe('SuaPage', () => {
  let component: SuaPage;
  let fixture: ComponentFixture<SuaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
