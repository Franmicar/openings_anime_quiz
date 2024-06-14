import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AnimeQuizCardComponent } from '../../anime-quiz-card/anime-quiz-card.component';
import { Anime } from '../../../../assets/classes/anime';
import { FormControl, Validators } from '@angular/forms';
import { checkAnimeNameValidator } from '../../../app.component';

@Component({
  selector: 'app-final-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, AnimeQuizCardComponent],
  templateUrl: './final-modal.component.html',
  styleUrl: './final-modal.component.scss'
})
export class FinalModalComponent {

  extraAnimes: Anime[] = [
    { names: ["Heppoko Jikken Animation Excel♥Saga", "Excel Saga"], audio: "au_120" },
    { names: ["Bakuten Shoot Beyblade", "Beyblade"], audio: "au_121" },
    { names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_122" }
  ];
  finished = false;

  constructor(public dialogRef: MatDialogRef<FinalModalComponent>) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    // Verifica si hay respuestas guardadas en localStorage
    this.extraAnimes = this.extraAnimes.map((anime, index) => {
      // Usa la respuesta guardada si está disponible, de lo contrario usa una cadena vacía
      return {
        ...anime,
        form: new FormControl('', [Validators.required, checkAnimeNameValidator(anime.names)])
      };
    });
  }

  check() {
    this.finished = this.extraAnimes.every(anime => anime.form?.valid);
  }

  close(res = false) {
    this.dialogRef.close(res);
  }
}
