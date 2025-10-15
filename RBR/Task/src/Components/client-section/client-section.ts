import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-client-section',
  imports: [CommonModule],
  templateUrl: './client-section.html',
  styleUrl: './client-section.scss'
})
export class ClientSection {
  

clients: { src: SafeUrl; alt: string }[];

  constructor(private sanitizer: DomSanitizer) {
    this.clients = [
      
      { src: this.sanitize('assets/images/client-1.svg'), alt: 'Client 1' },
      { src: this.sanitize('assets/images/client-2.svg'), alt: 'Client 2' },
      { src: this.sanitize('assets/images/client-3.svg'), alt: 'Client 3' },
      { src: this.sanitize('assets/images/client-4.svg'), alt: 'Client 4' },
      { src: this.sanitize('assets/images/client-5.svg'), alt: 'Client 5' },
      { src: this.sanitize('assets/images/client-6.svg'), alt: 'Client 6' },
      { src: this.sanitize('assets/images/client-7.7.svg'), alt: 'Client 7' }
    ];
  }

  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  

}
