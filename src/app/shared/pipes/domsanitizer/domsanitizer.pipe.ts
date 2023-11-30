import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domsanitizer'
})
export class DomsanitizerPipe implements PipeTransform {

  constructor( private sanitizer: DomSanitizer, ) {}

  transform( value: any, type: string, ): any {
    switch ( type ) {
      case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      default: throw new Error(`El tipo ${type} no es valido.`);
    }
  }

}
