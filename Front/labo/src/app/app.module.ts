import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgePipe } from './pipes/age.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { HomeModule } from './home/home.module';
import { LibraryModule } from './library/library.module';

@NgModule({
    declarations: [
        AppComponent,
        // AgePipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        HomeModule,
        LibraryModule,
        HttpClientModule,
    ]
})
export class AppModule { }
