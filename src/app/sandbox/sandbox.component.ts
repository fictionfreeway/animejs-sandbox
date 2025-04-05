import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'animejs';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent implements AfterViewInit {

  ngAfterViewInit() {

    animate(
      '#test-header',  
      {
        rotate: {
          from: '0turn',
          to: '.5turn',
          delay: 0 
        },
        loopDelay: 1000,
        loop: true,
        ease: 'outElastic'
      }
    );
  }
}
