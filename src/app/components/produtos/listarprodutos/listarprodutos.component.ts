import { IProduto } from 'src/app/model/Iproduto.model';
import { ProdutosService } from './../../../service/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {
  listaProdutos: IProduto[] = [

    
  ];


  constructor(private ProdutosService: ProdutosService) {
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void {
    this.ProdutosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;

    });
  }

  deletar(produto: IProduto): void{
    this.ProdutosService.excluir(produto.id!).subscribe(() =>{ // subscribe é para enviar o nosso pedido através dos métodos http. Como não teremos nenhum retorno, só iremos tratar a resposta.
      this.ProdutosService.exibirMensagem( // vamos tratar a mensagem de erro
      'SISTEMA',
      `${produto.nome} foi excluido com sucesso!`,
      'toast-error' // aqui vamos passar o tipo de erro
      );
      this.carregarProdutos();
    });

  }
}

