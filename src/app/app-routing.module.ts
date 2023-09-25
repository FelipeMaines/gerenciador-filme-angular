import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalhesFilmeComponent } from './components/detalhes-filme/detalhes-filme.component';
import { ListarFilmeComponent } from './shared/listar-filme/listar-filme.component';
import { ListarFilmesPesquisadosComponent } from './shared/listar-filmes-pesquisados/listar-filmes-pesquisados.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filme/listar',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'filme/listar',
    component: ListarFilmeComponent
  },
  {
    
    path: 'filme/detalhes/:id',
    component: DetalhesFilmeComponent
  },
  {
    path: 'filme/filmes-pesquisados',
    component: ListarFilmesPesquisadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
