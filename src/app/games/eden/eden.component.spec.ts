import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdenComponent } from './eden.component';

describe('EdenComponent', () => {
  let component: EdenComponent;
  let fixture: ComponentFixture<EdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
