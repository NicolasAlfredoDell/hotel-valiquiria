import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParallaxComponent } from './components/parallax/parallax.component';

// Pipes
import { DomsanitizerPipe } from './pipes/domsanitizer/domsanitizer.pipe';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@NgModule({
  declarations: [
    DomsanitizerPipe,
    FooterComponent,
    HeaderComponent,
    ModalImageComponent,
    NavbarComponent,
    ParallaxComponent,
  ],
  exports: [
    DomsanitizerPipe,
    FooterComponent,
    HeaderComponent,
    ModalImageComponent,
    NavbarComponent,
    ParallaxComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
