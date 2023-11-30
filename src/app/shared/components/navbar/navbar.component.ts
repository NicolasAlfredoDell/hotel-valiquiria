import { Component, OnInit } from '@angular/core';

// Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: any[] = [
    { active: true, showAlways: true, target: 'home', title: '¿COMO ENCONTRARNOS?', url: 'inicio' },
    { active: false, target: 'gallery', title: 'FOTOS', url: 'galeria' },
    { active: false, target: 'conditions', title: 'CONDICIONES', url: 'condiciones' },
    { active: false, target: 'services', title: 'SERVICIOS', url: 'servicios' },
    { active: false, target: 'contact', title: 'CONTACTO', url: 'contacto' },
  ];
  isOpenModalLateral: boolean = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.detectLinkActive();
  }

  private detectLinkActive(): void {
    setTimeout(() => {
      const url = this.router.url.substring(1);
      this.links.map( ( link: any ) => link.url.includes(url) ? link.active = true : link.active = false );
    }, 500);
  }

  redirectTo( url: string ): void {
    this.links.map( ( link: any ) => link.url.includes(url) ? link.active = true : link.active = false );
    this.router.navigate([url]);
  }

  openUrl( url: string, ): void {
    window.open( url, !url.includes('mailto') ? '_blank' : '_self' );
  }

  scrollTo( target: any, close?: boolean ): void {
    const el: any = document.getElementById(`${target}`);
    el.scrollIntoView(true);

    if ( close ) this.closeModalLateral();
  }

  closeModalLateral(): void {
    this.isOpenModalLateral = false;
  }

  openModalLateral(): void {
    this.isOpenModalLateral = true;
  }

}
