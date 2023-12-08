import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input()
  nome: string= '';
  @Input()
  idProduto: number = 0;
  @Input()
  dataValidade: string = '';
  @Input()
  precoProduto: number = 0;
  @Input()
  treino: string= '';
  constructor() { }

  ngOnInit(): void {
  }

}
