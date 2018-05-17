import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule, routedComponents } from './app.routing.module';
import { RoomModule } from './room/room.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { environment } from './../environments/environment';
import { RoomService } from './../services/room.service';
import { LoginService } from '../services/login.service';

@NgModule({

    imports: [
        BrowserModule,
        AppRoutingModule,
        RoomModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ], // Routing tree root

    declarations: [
        AppComponent, NavigationComponent, routedComponents ],
    bootstrap: [ AppComponent ], // choosng the component that boots
    providers: [ AngularFireAuthModule, AngularFireAuth, RoomService, LoginService]
})

export class AppModule { }

