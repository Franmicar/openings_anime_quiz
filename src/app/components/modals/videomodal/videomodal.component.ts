import { O } from '@angular/cdk/keycodes';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videomodal',
  standalone: true,
  imports: [MatDialogModule, MatStepperModule, MatButtonModule, MatIconModule],
  templateUrl: './videomodal.component.html',
  styleUrl: './videomodal.component.scss'
})
export class VideomodalComponent {

  videoKeys: string[];
  isScreenSmall: boolean = false;
  keyNames: any = {
    ja: 'Japonés',
    es: 'Español',
    gl: 'Gallego',
    cat: 'Catalán',
    en: 'Inglés',
    la: 'Latín',
    ko: 'Coreano',
    o: "Original",
    f: "Full",
    fe: 'Full Español'
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    this.videoKeys = Object.keys(data.video);
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isScreenSmall = result.matches;
    });
  }

  getVideoUrl(url: string): SafeResourceUrl {
    let embedUrl;
    if (url.includes('youtu')) {
      const videoId = this.extractVideoId(url);
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else {
      embedUrl = url;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private extractVideoId(url: string): string {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

}
