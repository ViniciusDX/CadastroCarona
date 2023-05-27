import { Component } from '@angular/core';
import { CaronaService } from './listagem-caronas.service';

@Component({
  selector: 'app-listagem-caronas',
  templateUrl: './listagem-caronas.component.html',
  styleUrls: ['./listagem-caronas.component.scss'],
})
export class ListagemCaronasComponent {
  listaCaronas: any = [];
  constructor(private service: CaronaService) {
    service.getListaCaronas().subscribe((res) => {
      this.listaCaronas = res;
    });
  }
}
