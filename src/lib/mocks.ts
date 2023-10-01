import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBasketball, faStar, faTableTennis } from '@fortawesome/free-solid-svg-icons';

export interface Trainer {
    name: string;
    sport: string;
    numOfReviews: number;
    ratePerHour: number;
    rating: number;
    city: string,
    country: string;
    icon: IconProp;
    imgSrc: string;
    color: string;
}

export const Trainers: Trainer[] = [
    {
        name: 'Cameron Williamson',
        city: 'New Delhi',
        country: 'India',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/cameron.png',
        color: '#D3180C'
    },
    {
        name: 'Dylan Bryce',
        city: 'New York',
        country: 'Usa',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/dylan.png',
        color: '#D3180C'
    },
    {
        name: 'Esther Kvyselenky',
        city: 'New York',
        country: 'Usa',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/esther.png',
        color: '#D3180C'
    },
    {
        name: 'Deborah Shaw',
        city: 'New York',
        country: 'Usa',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/deborah.png',
        color: '#D3180C'
    },
    {
        name: 'Brian Mallow',
        city: 'New York',
        country: 'Usa',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/brian.png',
        color: '#D3180C'
    },
    {
        name: 'Kate Henshaw',
        city: 'New York',
        country: 'Usa',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/kate.png',
        color: '#D3180C'
    },
    {
        name: 'Harry Pipe',
        city: 'New York',
        country: 'Usa',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/harry.png',
        color: '#D3180C'
    },
    {
        name: 'Joe Jordan',
        city: 'New York',
        country: 'Usa',
        numOfReviews: 34,
        ratePerHour: 20,
        sport: 'Table Tennis',
        rating: 4.5,
        icon: faTableTennis,
        imgSrc: '/assets/images/joe.png',
        color: '#D3180C'
    },
]