import { Component, HostListener, OnInit } from '@angular/core';
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
import { FinalModalComponent } from './components/modals/final-modal/final-modal.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CookiesComponent } from './components/cookies/cookies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeQuizCardComponent, MatExpansionModule, MatTooltipModule,
    MatListModule, MatChipsModule, MatButtonModule, MatIconModule, MatDialogModule,
    MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule, CookiesComponent],
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
  scrollPosition = 0;
  open = false;

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
    if (this.successes === this.animes.length) {
      this.openFinalModal();
    }
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
      width: '80vw',
      data: {
        title: 'Borrar todas',
        text: '¿Estás seguro de eliminar todas las respuestas? El juego empezará de nuevo'
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.deleteAll();
      }
    });
  }

  sort() {
    const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

    this.animes.sort((a, b) => {
      // Función para obtener el año de la pista
      const getPistaYear = (pista: string) => {
        const yearRegex = /\b\d{4}\b/;
        const match = pista.match(yearRegex);
        return match ? parseInt(match[0]) : Number.MAX_SAFE_INTEGER;
      };

      // Función para obtener la temporada de la pista
      const getPistaSeason = (pista: string) => {
        for (let i = 0; i < seasons.length; i++) {
          if (pista.includes(seasons[i])) {
            return seasons[i];
          }
        }
        return ''; // Si no encuentra temporada, devuelve vacío
      };

      switch (this.sortControl.value) {
        case 'nsnc':
          // Ordena por formulario vacío primero
          return a.form?.value === '' ? -1 : 1;
        case 'fail':
          // Ordena por formControl inválido primero
          return a.form?.invalid ? -1 : 1;
        case 'success':
          // Ordena por formControl válido primero
          return a.form?.valid ? -1 : 1;
        case 'old':
          // Ordena por más antiguos primero, luego por temporada
          const compareByYearOld = getPistaYear(a.pista) - getPistaYear(b.pista);
          if (compareByYearOld !== 0) {
            return compareByYearOld;
          } else {
            const seasonAOld = getPistaSeason(a.pista);
            const seasonBOld = getPistaSeason(b.pista);
            return seasons.indexOf(seasonAOld) - seasons.indexOf(seasonBOld);
          }
        case 'new':
          // Ordena por más nuevos primero, luego por temporada
          const compareByYearNew = getPistaYear(b.pista) - getPistaYear(a.pista);
          if (compareByYearNew !== 0) {
            return compareByYearNew;
          } else {
            const seasonANew = getPistaSeason(a.pista);
            const seasonBNew = getPistaSeason(b.pista);
            return seasons.indexOf(seasonANew) - seasons.indexOf(seasonBNew);
          }
        default:
          // Criterio de ordenación por defecto (si es necesario)
          return 0;
      }
    });
  }



  doARas() {
    this.dialog.open(DeleteConfirmationComponent, {
      width: '80vw',
      data: {
        title: 'Simulación de Ras',
        text: '¿Estás seguro de querer simular a Ras?'
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.animes.forEach(anime => anime.form?.setValue('Marmalade Boy'))
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.scrollPosition = event.target.scrollingElement.scrollTop;
    if (this.open && this.scrollPosition > 250) this.open = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openFinalModal() {
    this.dialog.open(FinalModalComponent, {
      width: '80vw'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.complete = res;
      }
    });
  }

  goPlaylist() {
    const url = 'https://www.youtube.com/watch?v=uaRnwnmqrws&list=PLFHO7FN9V3MODpAPO_IP49H3w8X5noxlY&ab_channel=KADOKAWAanime';
    window.open(url, '_blank');
  }

  onPageChange(event: any) {
    // Lógica para cargar los animes de la página 'event.pageIndex'
    // Puedes ajustar según cómo estés manejando la paginación
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


