import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycarComponent } from './mycar.component';

describe('MycarComponent', () => {
  let component: MycarComponent;
  let fixture: ComponentFixture<MycarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
