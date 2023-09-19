// carrinho.service.ts
import { Injectable } from '@angular/core';
import { getDatabase, ref, set } from 'firebase/database';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinhoItens: Produto[] = []; // Array para armazenar itens do carrinho

  adicionarItem(produto: Produto) {
    this.carrinhoItens.push(produto);
  }

  removerItem(produto: Produto) {
    const index = this.carrinhoItens.findIndex(item => item.id === produto.id);
    if (index !== -1) {
      this.carrinhoItens.splice(index, 1);
    }
  }

  getItensDoCarrinho(): Produto[] {
    return this.carrinhoItens;
  }
  calcularTotal(): number {
    return this.carrinhoItens.reduce((total, item) => total + item.preco, 0);
  }

  

//   finalizarCompra() {
//     console.log(this.carrinhoItens)
//     const db = getDatabase();
//     set(ref(db,`mystery-box`),this.carrinhoItens);
//     alert('Produto cadastrado com sucesso!')
  
//       //.then(() => {
//       // Sucesso: Os dados da compra foram enviados para o Firebase
//       //  console.log('Dados da compra enviados com sucesso.');
//      // })
//      // .catch((error: any) => { // Tipagem explícita do parâmetro 'error' como 'any'
//       // Trate os erros, se houver algum
//      //   console.error('Erro ao enviar os dados da compra:', error);
//      // });

// }
}
interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  
}