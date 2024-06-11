import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeQuizCardComponent } from './anime-quiz-card.component';

describe('AnimeQuizCardComponent', () => {
  let component: AnimeQuizCardComponent;
  let fixture: ComponentFixture<AnimeQuizCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeQuizCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeQuizCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
