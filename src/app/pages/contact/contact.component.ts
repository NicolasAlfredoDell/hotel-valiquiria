import { Component } from '@angular/core';

// Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form = new FormGroup({
    message: new FormControl(
      '', [Validators.required,]
    ),
    cant: new FormControl(
      '', [Validators.required,]
    ),
    name: new FormControl(
      '', [Validators.required,]
    ),
    phone: new FormControl(
      '', [Validators.required,]
    ),
  });
  messagesErrors: any[string] = [];

  sendMail(): void {
    this.messagesErrors = [];

    if ( this.form.invalid ) {
      if ( this.form.get('name')?.invalid ) this.messagesErrors.push('Debe ingresar un nombre.');
      if ( this.form.get('phone')?.invalid ) this.messagesErrors.push('Debe ingresar un telefono.');
      if ( this.form.get('cant')?.invalid ) this.messagesErrors.push('Debe ingresar la cantidad de pasajeros.');
      if ( this.form.get('message')?.invalid ) this.messagesErrors.push('Debe ingresar un mensaje.');
      return;
    };

    const mailText = `mailto:alquileresvalquiria@hotmail.com?subject=De ${this.form.get('name')!.value}. Telefono: ${this.form.get('phone')!.value}. Personas: ${this.form.get('cant')!.value}&body=${this.form.get('message')!.value}`; // add the links to body
    window.location.href = mailText;
  }

}
