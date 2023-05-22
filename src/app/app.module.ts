import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroCaronasComponent } from './cadastro-caronas/cadastro-caronas.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CepService } from './cadastro-caronas/cep.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, InicioComponent, CadastroCaronasComponent],
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
