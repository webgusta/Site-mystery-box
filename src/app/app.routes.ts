import { Routes } from '@angular/router'
import { AcessoComponent } from './acesso/acesso.component'
import { HomeComponent } from './home/home.component'
import { CarrinhoComponent } from './carrinho/carrinho.component'
import { QuemsomosComponent } from './quemsomos/quemsomos.component'
import { FormularioComponent } from './formulario/formulario.component'

export const ROUTES: Routes = [
    { path: '', component: AcessoComponent},
    { path: 'home', component: HomeComponent},
    {path: 'carrinho', component: CarrinhoComponent},
    {path: 'quemsomos', component: QuemsomosComponent},
    {path: 'formulario', component: FormularioComponent}
]