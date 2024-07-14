import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data.service';
import { debounceTime } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VideomodalComponent } from '../modals/videomodal/videomodal.component';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-anime-quiz-card',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatDialogModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTooltipModule],
  templateUrl: './anime-quiz-card.component.html',
  styleUrl: './anime-quiz-card.component.scss'
})
export class AnimeQuizCardComponent implements OnInit, AfterViewInit {

  @Input() anime: any;
  @Input() index: number = 0;
  @Output() plus: EventEmitter<any> = new EventEmitter<any>();

  errors = [];
  errorIndex = 0;
  nearMisses = [];
  nearMissIndex = 0;
  success = false;
  coincidence = 0;
  audioLoaded: boolean = true;

  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;


  constructor(
    private data: DataService,
    private dialog: MatDialog,
    private audioService: AudioService
  ) { }

  ngAfterViewInit() {
    this.audioPlayer.nativeElement.addEventListener('play', () => {
      this.inputElement.nativeElement.focus();
    });
  }

  ngOnInit(): void {
    this.getData();

    this.success = this.anime.names.some((name: string) => this.anime.form?.value?.trim()?.toLowerCase() === name.toLowerCase());
    this.calculateMatchPercentage(this.anime.form?.value);

    this.anime.form.valueChanges.pipe(
      debounceTime(500) // Espera 5 segundos después del último cambio
    ).subscribe((value: string) => {
      // Estas acciones ahora solo se ejecutarán después de un segundos de inactividad
      this.calculateMatchPercentage(value);
      this.success = this.anime.names.some((name: string) => value.trim()?.toLowerCase() === name.toLowerCase());
      localStorage.setItem(this.anime.audio, value);
      this.plus.emit(); // Emitir el evento
    });
  }

  getData() {
    this.data.getErrors().subscribe(errors => {
      this.errors = errors;
      this.errorIndex = this.getRandomIndex(this.errors.length);
    });

    this.data.getNearMisses().subscribe(nearMisses => {
      this.nearMisses = nearMisses;
      this.nearMissIndex = this.getRandomIndex(this.nearMisses.length);
    });
  }

  getRandomIndex(length = 0): number {
    return Math.floor(Math.random() * length);
  }

  calculateMatchPercentage(str: string) {
    let maxMatchPercentage = 0;

    this.anime.names.forEach((name: string) => {
      const inputStringTrimmed = str.trim().toLowerCase();
      const stringTrimmed = name.trim().toLowerCase();

      if (stringTrimmed.includes(inputStringTrimmed)) {
        const matchPercentage = (inputStringTrimmed.length / stringTrimmed.length) * 100;
        if (matchPercentage > maxMatchPercentage) {
          maxMatchPercentage = matchPercentage;
        }
      }
    });
    this.coincidence = maxMatchPercentage;
  }

  openVideo() {
    this.dialog.open(VideomodalComponent,
      {
        data: { video: this.anime.video, name: this.anime.names[0] },
        panelClass: ['video-modal']
      });
  }

  onPlay(audio: HTMLAudioElement): void {
    this.audioService.play(audio);
  }

  onAudioError() {
    this.audioLoaded = false;
  }

}
