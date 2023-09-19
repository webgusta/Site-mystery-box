import { Component } from '@angular/core';
import { CarrinhoService} from '../service/carrinho.service';
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent {
  constructor(private carrinhoService: CarrinhoService) {}

  get carrinhoItens() {
    return this.carrinhoService.getItensDoCarrinho();
  }

  removerDoCarrinho(item: Produto) {
    this.carrinhoService.removerItem(item);
  }
  get totalCompra() {
    return this.carrinhoService.calcularTotal();
  }


  finalizarCompra() {
    const produtos = this.carrinhoItens
    console.log("testeeeeeeeeeeeeeeeeeeeee")
    console.log(produtos)
     const db = getDatabase();
     set(ref(db,`mystery-box`),produtos);
    alert('Produto cadastrado com sucesso!')
  
      //.then(() => {
      // Sucesso: Os dados da compra foram enviados para o Firebase
      //  console.log('Dados da compra enviados com sucesso.');
     // })
     // .catch((error: any) => { // Tipagem explícita do parâmetro 'error' como 'any'
      // Trate os erros, se houver algum
     //   console.error('Erro ao enviar os dados da compra:', error);
     // });

}

 
}
interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

function getItensDoCarrinho() {
  throw new Error('Function not implemented.');
}
