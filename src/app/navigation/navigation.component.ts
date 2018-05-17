import { Component, OnInit, OnDestroy } from '@angular/core';
import { INavigationItem } from '../../interfaces/INavigationItem';
import { RoomService } from '../../services/room.service';
import { Observable } from 'rxjs/internal/observable';
import { map, tap, take } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'gw-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})

export class NavigationComponent implements OnInit {
    public navArr: Observable<INavigationItem[]>;
    // private _subscriptions: Subscription[];
    constructor(
        private _loginService: LoginService,
        private _roomService: RoomService
    ) { }

    public userObservable = this._loginService.userObservable;

    ngOnInit() {
        const items: INavigationItem[] = [];
        this.navArr = this._roomService.rooms.pipe(
            map(rooms => rooms.map(room => {
                const navigationRoomItem: INavigationItem = {
                    title: room.title,
                    url: './room/' + room.id
                };

                return navigationRoomItem;
            })),
            tap(results => console.log(results)),
            take(1)
        );
    }
    login() {
        this._loginService.login();
    }
    logout() {
        this._loginService.logout();
    }
}
