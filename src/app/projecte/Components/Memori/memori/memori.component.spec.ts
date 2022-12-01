import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriComponent } from './memori.component';

describe('MemoriComponent', () => {
  let component: MemoriComponent;
  let fixture: ComponentFixture<MemoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
