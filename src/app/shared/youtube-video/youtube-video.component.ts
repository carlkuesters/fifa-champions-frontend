import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'fc-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent {

  @Input() youtubeVideoId: string;

  constructor(private domSanitizer: DomSanitizer) {
  }

  get src(): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.youtubeVideoId);
  }
}
