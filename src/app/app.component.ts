import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeQuizCardComponent } from './components/anime-quiz-card/anime-quiz-card.component';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeQuizCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'openings-anime-quiz';
  animes = [
    { name: 'Yamada-kun to Lv999 no Koi wo Suru', audio: 'au_0.mp3' },
    { name: 'Hunter x Hunter', audio: 'au_1.mp3' },
    { name: 'Jujutsu Kaisen', audio: 'au_2.mp3' },
    { name: 'Shinseiki Evangelion', audio: 'au_3.mp3' },
    { name: 'Bishoujo Senshi Sailor Moon', audio: 'au_4.mp3' },
    { name: 'Spy x Family', audio: 'au_5.mp3' },
    { name: 'Tokyo Revengers', audio: 'au_6.mp3' },
    { name: 'Cardcaptor Sakura', audio: 'au_7.mp3' }
  ];

  constructor() {
    // Actualiza cada objeto de anime para incluir un FormControl con el validador personalizado.
    this.animes = this.animes.map(anime => ({
      ...anime,
      form: new FormControl('', [Validators.required, checkAnimeNameValidator(anime.name)])
    }));
  }
}

export function checkAnimeNameValidator(animeName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // Si no hay valor, no retorna error.
    }

    // Comprueba si el valor ingresado es igual al nombre del anime.
    return value.trim().toLowerCase() === animeName.toLowerCase() ? null : { 'animeNameIncorrect': true };
  };
}

