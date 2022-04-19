import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { LoadingPageModule } from '../loading/loading.module';
import { AlertPageModule } from '../alert/alert.module';
import { AvatarPageModule } from '../avatar/avatar.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/tabs/account',
        pathMatch: 'full'
    },
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: "account",
                loadChildren: () => import('../loading/loading.module').then(m => LoadingPageModule)
            },
            {
                path: "settings",
                loadChildren: () => import('../alert/alert.module').then(m => AlertPageModule)
            },
            {
                path: "contact",
                loadChildren: () => import('../avatar/avatar.module').then(m => AvatarPageModule)
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
