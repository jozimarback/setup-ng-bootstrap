import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
`]
})
export class AppComponent {
  title = 'app works!';
}
