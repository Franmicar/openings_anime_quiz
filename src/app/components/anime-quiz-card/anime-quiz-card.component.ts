import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-anime-quiz-card',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './anime-quiz-card.component.html',
  styleUrl: './anime-quiz-card.component.scss'
})
export class AnimeQuizCardComponent implements OnInit {

  @Input() anime: any;
  @Input() index: number = 0;
  @Output() plus: EventEmitter<any> = new EventEmitter<any>();

  errors = [];
  randomIndex: number = 0;
  success = false;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getErrors().subscribe(errors => {
      this.errors = errors;
      this.getRandomIndex();
    });

    this.success = this.anime.names.some((name: string) => this.anime.form.value.trim()?.toLowerCase() === name.toLowerCase());

    this.anime.form.valueChanges.pipe(
      debounceTime(500) // Espera 5 segundos después del último cambio
    ).subscribe((value: string) => {
      // Estas acciones ahora solo se ejecutarán después de un segundos de inactividad
      this.success = this.anime.names.some((name: string) => value.trim()?.toLowerCase() === name.toLowerCase());
      localStorage.setItem(this.anime.audio, value);
      this.plus.emit(); // Emitir el evento
    });
  }

  getRandomIndex() {
    this.randomIndex = Math.floor(Math.random() * this.errors.length);
  }

}
