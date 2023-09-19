import { Component } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  produtos = [
    {id: 1, nome: 'Box Clássica ', preco: 159.99, imagem: 'produto1.png', descricao: 'Caixa Misteriosa de times contendo 1 camisa (League One,Premier League, Bundesliga, LaLiga)' }, 
    {id: 2, nome: 'Box Dupla ', preco: 299.99, imagem: 'produto2.png', descricao: 'Caixa Misteriosa de times contendo 2 camisa. (League One,Premier League, Bundesliga, LaLiga)' },
    
  ];

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarItem(produto);
    this.router.navigate(['/carrinho']); // Redirecione para a página do carrinho
  }

}
interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
 // total: string;
}