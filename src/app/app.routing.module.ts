import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './welcome/login/login.component';

const routes: Route[] = [
    {
        path: 'welcome',
        component: WelcomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
    }
];

@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routedComponents = [ WelcomeComponent, AboutComponent, LoginComponent ];
