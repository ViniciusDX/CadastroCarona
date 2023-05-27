import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ListagemCaronasComponent } from './views/carona/listagem-caronas/listagem-caronas.component';
import { CadastroCaronasComponent } from './views/carona/cadastro-caronas/cadastro-caronas.component';
import { CepService } from './views/carona/cadastro-caronas/cep.service';
import { InicioComponent } from './views/inicio/inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastroCaronasComponent,
    ListagemCaronasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskPipe,
    NgxMaskDirective,
    HttpClientModule,
  ],
  providers: [provideNgxMask(), CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
