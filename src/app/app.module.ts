import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppHeaderModule, AppFooterModule, AppAsideModule, AppSidebarModule, AppBreadcrumbModule } from '@coreui/angular';
const COREUI = [
  AppHeaderModule,
  AppFooterModule,
  AppAsideModule,
  AppSidebarModule,
  AppBreadcrumbModule
];

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path: '',
      component: DashboardComponent,
      children: [{
        path: '',
        component: AboutComponent
      }]
    }]),
    BrowserModule,
    TabsModule.forRoot(),
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    ChartsModule,
    COREUI
  ],
  providers: [
    TabsetConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
