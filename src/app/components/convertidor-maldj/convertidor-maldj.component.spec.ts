import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorMaldjComponent } from './convertidor-maldj.component';

describe('ConvertidorMaldjComponent', () => {
  let component: ConvertidorMaldjComponent;
  let fixture: ComponentFixture<ConvertidorMaldjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorMaldjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorMaldjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
