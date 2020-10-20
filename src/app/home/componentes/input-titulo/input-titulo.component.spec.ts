import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputTituloComponent } from './input-titulo.component';

describe('InputTituloComponent', () => {
  let component: InputTituloComponent;
  let fixture: ComponentFixture<InputTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTituloComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
