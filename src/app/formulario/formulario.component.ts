import { Component } from '@angular/core';
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formData = {
    nome: '',
    email: '',
    endereco: '',
    telefone: ''
  };

  onSubmit() {
    console.log('Dados enviados:', this.formData);
    // Adicione aqui a lógica para enviar os dados, como salvá-los em um banco de dados ou enviá-los para um servidor.
    const formData= this.formData
     const db = getDatabase();
     set(ref(db,`Dados do cliente`),formData);
    alert('Suas Informações foram salvas com sucesso!')
  }
}