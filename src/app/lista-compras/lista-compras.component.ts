import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Item {
  id: number;
  description: string;
  quantidade: number | undefined;
  itemComprado: boolean;
}

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent implements OnInit {
  items: Item[] = [
    {
      id: 1,
      description: 'Arroz',
      quantidade: 3,
      itemComprado: false
    },
    {
      id: 2,
      description: 'Café',
      quantidade: 1,
      itemComprado: false
    }
  ];

  itemDescription: string = '';
  quantidadeDesc!: number | undefined;
  isItemComprado: boolean = false;
  newId!: number;

  ngOnInit(): void {
  }

  setId() {
    if ( this.items.length === 0)
      this.newId = 1

    this.items.forEach(x => {
        this.newId = x.id + 1
    });
  }

  setNewItem() {
    this.setId();
    if (this.newId !== 0){
      let newItem: Item = {
        id: this.newId,
        description: this.itemDescription,
        quantidade: this.quantidadeDesc,
        itemComprado: false
      };

      if (newItem !== undefined)
          this.items.push(newItem);

      this.itemDescription = '';
      this.quantidadeDesc = undefined;
    }
  }

  riscarItem(itemLista: Item) {
    itemLista.itemComprado = !itemLista.itemComprado;
  }

  excluirItem(id: number) {
    let item: any = this.items.filter(x => x.id == id);

    this.items.splice(item, 1);

  }

}
