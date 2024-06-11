import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-anime-quiz-card',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './anime-quiz-card.component.html',
  styleUrl: './anime-quiz-card.component.scss'
})
export class AnimeQuizCardComponent {

  @Input() anime: any;

}
