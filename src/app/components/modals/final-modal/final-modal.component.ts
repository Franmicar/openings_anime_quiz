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

  constructor(public dialogRef: MatDialogRef<FinalModalComponent>) {}

  close(res = false) {
    this.dialogRef.close(res);
  }
}
