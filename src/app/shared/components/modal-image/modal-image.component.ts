import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent {

  @Input() srcImage: string = '';
  @Output() close = new EventEmitter<boolean>();

  closeModal(): void {
    this.close.emit( true );
  }

}
