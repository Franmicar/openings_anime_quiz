import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeQuizCardComponent } from './components/anime-quiz-card/anime-quiz-card.component';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { DataService } from './services/data.service';
import { Anime, animes } from '../assets/classes/anime';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeQuizCardComponent, MatExpansionModule, MatListModule, MatChipsModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'openings-anime-quiz';
  rules = [];
  animes: Anime[] = animes;
  successes = 0;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getData();
    this.createForm();
  }

  getData() {
    this.data.getRules().subscribe(rules => {
      this.rules = rules;
    });
  }

  createForm() {
    // Verifica si hay respuestas guardadas en localStorage
    this.animes = this.animes.map((anime, index) => {
      // Usa la respuesta guardada si está disponible, de lo contrario usa una cadena vacía
      const respuestaInicial = localStorage.getItem('R'+ index.toString()) ? localStorage.getItem('R'+ index.toString()) : '';
      if (respuestaInicial && anime.names.some((name:string) => respuestaInicial.trim()?.toLowerCase() === name.toLowerCase())) this.successes++
      return {
        ...anime,
        form: new FormControl(respuestaInicial, [Validators.required, checkAnimeNameValidator(anime.names)])
      };
    });
  }

}

export function checkAnimeNameValidator(animeNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // Si no hay valor, no retorna error.
    }

    // Comprueba si el valor ingresado coincide con alguno de los nombres del anime en el arreglo.
    const nameMatch = animeNames.some(animeName => value.trim().toLowerCase() === animeName.toLowerCase());
    return nameMatch ? null : { 'animeNameIncorrect': true };
  };
}


