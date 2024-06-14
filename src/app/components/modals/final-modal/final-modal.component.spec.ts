import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalModalComponent } from './final-modal.component';

describe('FinalModalComponent', () => {
  let component: FinalModalComponent;
  let fixture: ComponentFixture<FinalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
