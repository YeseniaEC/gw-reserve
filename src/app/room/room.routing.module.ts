import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RoomComponent } from './room.component';

import { ListComponent } from './reservation/list/list.component';
import { FormComponent } from './reservation/form/form.component';

const routes: Route[] = [
    {
        path: 'room/:id',
        component: RoomComponent,

        children: [
            {
                path: 'form',
                component: FormComponent,
            },
            {
                path: 'list',
                component: ListComponent,
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class RoomRoutingModule { }
export const routedComponents = [ RoomComponent, ListComponent, FormComponent ];
