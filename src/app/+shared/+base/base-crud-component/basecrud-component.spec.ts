import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecrudComponent } from './basecrud-component';

describe('BasecrudComponent', () => {
  let component: BasecrudComponent;
  let fixture: ComponentFixture<BasecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasecrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasecrudComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
