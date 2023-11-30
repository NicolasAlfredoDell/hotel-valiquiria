import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  othersImages: any[] = [
    { src: 'assets/images/galery/1.jpeg', style: 'cover' },
    { src: 'assets/images/galery/2.jpeg', style: 'cover' },
    { src: 'assets/images/galery/3.jpeg', style: 'cover' },
  ];
  twoRooms: any[] = [
    { src: 'assets/images/galery/smalls/1.jpeg', style: 'cover' },
    { src: 'assets/images/galery/smalls/2.jpeg', style: 'cover' },
    { src: 'assets/images/galery/smalls/3.jpeg', style: 'cover' },
    { src: 'assets/images/galery/smalls/4.jpeg', style: 'cover' },
    { src: 'assets/images/galery/smalls/5.jpeg', style: 'cover' },
    { src: 'assets/images/galery/smalls/6.jpeg', style: 'cover' },
    { src: 'assets/images/galery/smalls/7.jpeg', style: 'cover' },
  ];
  threeRooms: any[] = [
    { src: 'assets/images/galery/bigs/1.jpeg', style: 'cover' },
    { src: 'assets/images/galery/bigs/2.jpeg', style: 'cover' },
    { src: 'assets/images/galery/bigs/3.jpeg', style: 'cover' },
    { src: 'assets/images/galery/bigs/4.jpeg', style: 'cover' },
    { src: 'assets/images/galery/bigs/5.jpeg', style: 'cover' },
  ];

  isOpenModalImage: boolean = false;
  srcImageSelected: any = null;

  ngOnInit(): void { }

  closeModalImage(): void {
    this.isOpenModalImage = false;
  }

  openModalImage( src: string ): void {
    this.srcImageSelected = src;
    this.isOpenModalImage = true;
  }

}
