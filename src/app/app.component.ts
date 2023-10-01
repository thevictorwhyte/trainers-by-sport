import { Component } from '@angular/core';
import { Trainers, Trainer } from 'src/lib/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trainers: Trainer[] = Trainers;
  title = 'trainers-by-sport';
}
