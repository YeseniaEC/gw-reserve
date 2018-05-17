import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { IRoom } from '../../interfaces/IRoom';
import { RoomService } from '../../services/room.service';

@Component({
    selector: 'gw-room',
    templateUrl: './room.component.html',
    styleUrls: [
        './room.component.scss'
    ]
})

export class RoomComponent implements OnInit {
    public id: string;
    constructor(
        private _route: ActivatedRoute
    ) { }

    public ngOnInit() {
        // console.log('Room Component Init');

        this._route.paramMap
            .pipe(
                map(paramMapResponse => {
                    return paramMapResponse.get('id') + ' was done mapped';
                }),
                tap(mappedResponse => {
                    // console.log(' tapped');
                })
            )
            .subscribe(mappedResponse => {
                this.id = mappedResponse;
                this._someOtherWorkHere();
            });
    }
    private _someOtherWorkHere() {
        console.log(this.id);
    }
}
