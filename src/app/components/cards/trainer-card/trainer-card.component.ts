import { Component } from '@angular/core';
import { faBasketball, faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent {
  faBasketball = faBasketball;
  faStar = faStar;
}
