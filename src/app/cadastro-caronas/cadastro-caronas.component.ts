import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-caronas',
  templateUrl: './cadastro-caronas.component.html',
  styleUrls: ['./cadastro-caronas.component.scss'],
})
export class CadastroCaronasComponent {
  form: FormGroup;
  formModal: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nome: new FormControl(),
      cpf: new FormControl(),
      cnh: new FormControl(),
      logradouro: new FormControl(),
      numero: new FormControl(),
      cep: new FormControl(),
      bairro: new FormControl(),
      cidade: new FormControl(),
      uf: new FormControl(),
    });
    this.formModal = new FormGroup({
      nome: new FormControl(),
      idade: new FormControl(),
    });
  }
  addFilho() {}
}
