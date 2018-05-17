import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// const observe = new Observable<string>(); // importing an observable creation method.
import { of } from 'rxjs/internal/observable/of'; // can make observables from scratch to learn more
import { map, tap, mergeMap, take, retry } from 'rxjs/operators';

import { IRoom } from '../interfaces/IRoom';

@Injectable()
export class RoomService {
    public rooms: Observable<IRoom[]>;

    constructor() {
        this.rooms = of([{
            id: '1',
            title: 'Star Fox' ,
            picture: '.jpg'
        },
        {
            id: '2',
            title: 'Zelda',
            picture: '.jpg'
        },
        {
            id: '3',
            title: 'Donkey Kong',
            picture: '.jpg'
        },
        {
            id: '4',
            title: 'Sim City',
            picture: '.jpg',
        },
        {
            id: '5',
            title: 'Halo',
            picture: '.jpg',
        }]);
    }
    writeRoomReservation( roomId, reservationValues ) {
        console.log('Reserve');
    }
    deleteRoomReservation( roomId, reservationValues) {
        console.log('Delete!');
    }
}

