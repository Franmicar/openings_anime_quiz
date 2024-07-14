import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private currentAudio: HTMLAudioElement | null = null;

  play(audio: HTMLAudioElement): void {
    if (this.currentAudio && this.currentAudio !== audio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
    this.currentAudio = audio;
    this.currentAudio.play();
  }
}
