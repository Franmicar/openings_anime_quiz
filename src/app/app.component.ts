import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeQuizCardComponent } from './components/anime-quiz-card/anime-quiz-card.component';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { DataService } from './services/data.service';
import { Anime, animes } from '../assets/classes/anime';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from './components/modals/delete-confirmation/delete-confirmation.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeQuizCardComponent, MatExpansionModule,
    MatListModule, MatChipsModule, MatButtonModule, MatIconModule, MatDialogModule,
    MatSelectModule, FormsModule, ReactiveFormsModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'openings-anime-quiz';
  rules = [];
  animes: Anime[] = shuffleArray([...animes]);
  successes = 0;
  complete = false;
  sortControl = new FormControl<string | null>('');

  constructor(private data: DataService,
    public dialog: MatDialog
  ) { }

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
      return {
        ...anime,
        form: new FormControl(this.getResponses(anime), [Validators.required, checkAnimeNameValidator(anime.names)])
      };
    });
  }

  plusSuccesses() {
    this.successes++
  }

  countSuccesses() {
    this.successes = 0;
    this.animes.forEach((anime, index) => {
      this.getResponses(anime);
    });
  }

  getResponses(anime: Anime): string {
    const key = localStorage.getItem(anime.audio);
    const respuesta = key ? key : '';
    if (respuesta && anime.names.some((name: string) => respuesta.trim()?.toLowerCase() === name.toLowerCase())) {
      this.plusSuccesses();
    }
    if (this.successes === this.animes.length) this.complete = true;
    return respuesta;
  }

  deleteAll() {
    this.animes.forEach((anime, index) => {
      localStorage.removeItem(anime.audio);
      anime.form?.setValue('');
    });
  }

  openConfirmationModal() {
    this.dialog.open(DeleteConfirmationComponent, {
      width: '80vw'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.deleteAll();
      }
    });
  }

  sort() {
    this.animes.sort((a, b) => {
      switch (this.sortControl.value) {
        case 'nsnc':
          // Coloca primero los animes con valor de formulario vacío
          return a.form?.value === '' ? -1 : 1;
        case 'fail':
          // Coloca primero los animes cuyo formControl tiene errores
          return a.form?.invalid ? -1 : 1;
        case 'success':
          // Coloca primero los animes con un string y sin errores
          return a.form?.valid ? -1 : 1;
        default:
          // Criterio de ordenación por defecto (si es necesario)
          return 0;
      }
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

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generar un índice aleatorio
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambiar elementos
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


