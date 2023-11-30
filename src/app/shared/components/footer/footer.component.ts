import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  links: any[] = [
    { active: true, showAlways: true, target: 'home', title: '¿Como encontrarnos?', url: 'inicio' },
    { active: false, target: 'gallery', title: 'Galeria/Departamentos', url: 'galeria' },
    { active: false, target: 'services', title: 'Servicios', url: 'servicios' },
    { active: false, target: 'conditions', title: 'Condiciones', url: 'condiciones' },
    { active: false, target: 'contact', title: 'Contacto', url: 'contacto' },
  ];

  openUrl( url: string, ): void {
    window.open( url, !url.includes('mailto') ? '_blank' : '_self' );
  }

  scrollTo( target: any ): void {
    const el: any = document.getElementById(`${target}`);
    el.scrollIntoView(true);
  }

}
