import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Trainer } from 'src/lib/mocks';


@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent implements OnInit {
  @Input() trainer!: Trainer;
  faStar = faStar;

  constructor() {}

  ngOnInit(): void {
    
  }

}
