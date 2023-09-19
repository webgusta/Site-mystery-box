import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

import { Usuario } from '../usuario.module';

import { Autenticacao } from '../../autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(
    private autenticacao: Autenticacao
  ) {}

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)

  })

  public exibirPainelLogin(): void{
    this.exibirPainel.emit('login')
  }

  public cadastrarUsuario(): void{
    // console.log(this.formulario)

    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    this.autenticacao.cadastrarUsuario(usuario)
    .then(() =>{
      alert('Usuario cadastrado com sucesso!')
      this.exibirPainelLogin()
    })
  }

}
