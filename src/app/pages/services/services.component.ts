import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: any[] =[
    { img: 'assets/images/services/white-clothes.webp', title: 'Vajilla y ropa blanca completa' },
    { img: 'assets/images/services/wifi.webp', title: 'Wifi' },
    { title: 'Cochera semicubierta (Por orden de llegada)', secondTitle: 'Cocina completa' },
    { img: 'assets/images/services/sum.jpeg', title: 'SUM' },
    { img: 'assets/images/services/swimming-pool.jpeg', title: 'Pileta climatizada (Consultar fecha)' },
    { img: 'assets/images/services/split.jpeg', title: 'Aire acondicionado' },
    { img: 'assets/images/services/parrilla.jpg', title: 'Parrillas compartidas' },
  ];

}
