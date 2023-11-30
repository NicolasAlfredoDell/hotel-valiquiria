import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  openUrl( url: string, ): void {
    if ( url.includes('geo') ) url = 'https://www.google.com/maps/place/Valquiria/@-40.8007841,-65.0728465,15z/data=!4m2!3m1!1s0x0:0xab2fc80070e5bf22?sa=X&ved=2ahUKEwjDgb7Lw_WBAxX-LLkGHVr9A2QQ_BJ6BAhQEAA&ved=2ahUKEwjDgb7Lw_WBAxX-LLkGHVr9A2QQ_BJ6BAhcEAg';

    window.open( url, !url.includes('mailto') ? '_blank' : '_self' );
  }

}
