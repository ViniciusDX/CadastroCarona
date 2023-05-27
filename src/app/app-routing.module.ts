import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemCaronasComponent } from './views/carona/listagem-caronas/listagem-caronas.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { CadastroCaronasComponent } from './views/carona/cadastro-caronas/cadastro-caronas.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'listagem',
    component: ListagemCaronasComponent,
  },
  {
    path: 'cadastro',
    component: CadastroCaronasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
