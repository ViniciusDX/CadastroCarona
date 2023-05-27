import { CepService } from './cep.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CaronaService } from '../listagem-caronas/listagem-caronas.service';
import { Router } from '@angular/router';
class Filho {
  nome!: string;
  idade!: number;
}

@Component({
  selector: 'app-cadastro-caronas',
  templateUrl: './cadastro-caronas.component.html',
  styleUrls: ['./cadastro-caronas.component.scss'],
})
export class CadastroCaronasComponent {
  form: FormGroup;
  formModal: FormGroup;
  listFilhos: Filho[] = [];

  constructor(
    private cepService: CepService,
    private server: CaronaService,
    private router: Router
  ) {
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
      nome: new FormControl(null, [Validators.required]),
      idade: new FormControl(null, [Validators.required]),
    });
  }

  addFilho() {
    if (this.formModal.invalid) {
      this.formModal.markAllAsTouched();
      return;
    }
    this.listFilhos.push(this.formModal.value);
    this.formModal.reset();
  }

  buscarEndereco() {
    if (String(this.form.controls['cep'].value).length == 8) {
      this.cepService
        .getByCep(this.form.controls['cep'].value)
        .subscribe((resp: any) => {
          this.form.controls['cidade'].setValue(resp.localidade);
          this.form.controls['bairro'].setValue(resp.bairro);
          this.form.controls['logradouro'].setValue(resp.logradouro);
          this.form.controls['uf'].setValue(resp.uf);
        });
    }
  }

  validarCampo(campo: string) {
    const control = this.formModal.controls[campo];

    //prettier-ignore
    if (control) {
      return (control.errors ? control.errors['required'] : false) &&
      (control.dirty || control.touched);
    }
    return false;
  }

  excluirFilho(index: number) {
    this.listFilhos.splice(index, 1);
  }
  salvar() {
    this.server.salvarCarona(this.form.value).subscribe((resp) => {
      this.router.navigateByUrl('/listagem');
    });
  }
}
