import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: CalculadoraComponent },
  { path: 'shooping-list', component: ListaComprasComponent}
];
