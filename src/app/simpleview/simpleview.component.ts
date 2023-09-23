import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simpleview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      simpleview works!
    </p>
  `,
  styleUrls: ['./simpleview.component.scss']
})
export class SimpleviewComponent {

}
