import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ToastrModule } from 'ngx-toastr';
import { BarraPesquisaFilmeComponent } from './shared/barra-pesquisa-filme/barra-pesquisa-filme.component';
import { FormsModule } from '@angular/forms';
import { ListarFilmesPesquisadosComponent } from './shared/listar-filmes-pesquisados/listar-filmes-pesquisados.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesFilmeComponent,
    HomeComponent,
    NavBarComponent,
    CardFilmeComponent,
    ListarFilmeComponent,
    SafeUrlPipe,
    BarraPesquisaFilmeComponent,
    ListarFilmesPesquisadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right'
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
