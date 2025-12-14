import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTmeplate } from './private-tmeplate';

describe('PrivateTmeplate', () => {
  let component: PrivateTmeplate;
  let fixture: ComponentFixture<PrivateTmeplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateTmeplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateTmeplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
