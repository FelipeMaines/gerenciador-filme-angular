import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { DetalhesFilmeComponent } from './components/detalhes-filme/detalhes-filme.component';
import { HomeComponent } from './components/home/home.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ListarFilmeComponent } from './shared/listar-filme/listar-filme.component';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesFilmeComponent,
    HomeComponent,
    NavBarComponent,
    CardFilmeComponent,
    ListarFilmeComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
