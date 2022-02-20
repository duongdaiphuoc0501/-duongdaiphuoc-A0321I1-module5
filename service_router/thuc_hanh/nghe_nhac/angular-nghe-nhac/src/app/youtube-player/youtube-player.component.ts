import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {YoutubeService} from "../youtube.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy {
  song: any;
  sub: Subscription;

  constructor(
    private youtubeService: YoutubeService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const  id = paramMap.get('id');
      this.song = this.youtubeService.find(id);
    })
  }

  getSrc(){
    const  url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
