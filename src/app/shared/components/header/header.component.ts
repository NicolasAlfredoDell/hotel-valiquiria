import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header: ElementRef | undefined;

  backgroundImageNumber: number = 1;

  ngOnInit(): void {
    setInterval( () => {
      this.runAnimationFadeOut();

      setTimeout( () => {
        this.backgroundImageNumber == 4 ? this.backgroundImageNumber = 1 : this.backgroundImageNumber++;
        this.runAnimationFadeIn();
      }, 300 );
    }, 10000 );
  }

  private runAnimationFadeOut(): void {
    this.header!.nativeElement.classList.remove('animate__animated');
    this.header!.nativeElement.classList.remove('animate__fadeIn');

    this.header!.nativeElement.classList.add('animate__animated');
    this.header!.nativeElement.classList.add('animate__fadeOut');
  }

  private runAnimationFadeIn(): void {
    this.header!.nativeElement.classList.remove('animate__animated');
    this.header!.nativeElement.classList.remove('animate__fadeOut');

    this.header!.nativeElement.classList.add('animate__animated');
    this.header!.nativeElement.classList.add('animate__fadeIn');
  }

  openUrl( url: string, ): void {
    if ( window.innerWidth > 800 && url.includes('geo') ) url = 'https://www.google.com/maps/place/Valquiria/@-40.8007841,-65.0728465,15z/data=!4m2!3m1!1s0x0:0xab2fc80070e5bf22?sa=X&ved=2ahUKEwjDgb7Lw_WBAxX-LLkGHVr9A2QQ_BJ6BAhQEAA&ved=2ahUKEwjDgb7Lw_WBAxX-LLkGHVr9A2QQ_BJ6BAhcEAg';

    window.open( url, !url.includes('mailto') ? '_blank' : '_self' );
  }

}
