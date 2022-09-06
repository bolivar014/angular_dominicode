import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact-reactive', component: ContactReactiveComponent },
    { path: 'contact-template/:id', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    {   // CanActivate - simula que debe estar autenticado
        path: 'users', component: UserComponent, canActivate: [PermissionsGuard],
        children: [
            { path: 'list', component: ListComponent },
            { path: 'details', component: DetailsComponent },
        ] 
    },
    { path: '**', component: PagenotfoundComponent } // Rutas que no existan
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}