import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoomRoutingModule, routedComponents } from './room.routing.module';

@NgModule({
    imports: [ CommonModule, RoomRoutingModule, FormsModule ],
    declarations: [ routedComponents ],
})

export class RoomModule { }
