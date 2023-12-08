import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/Iproduto.model';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-atualizarproduto',
  templateUrl: './atualizarproduto.component.html',
  styleUrls: ['./atualizarproduto.component.css']
})
export class AtualizarprodutoComponent implements OnInit {

  produto:IProduto = {
    nome: '',
    validade: new Date(),
    preco: 0,
    treino:''
  };

  constructor(
    private ProdutosService: ProdutosService,
    private router: Router,
    private activaRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id= Number(this.activaRouter.snapshot.paramMap.get('id'));
    this.ProdutosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;  });
  }

  salvarProduto(): void {
    this.ProdutosService.atualizar(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.ProdutosService.exibirMensagem(
        'Sistema',
        ` ${this.produto.nome} foi atualizado com sucesso. `,
        'toast-success'
        );
        this.router.navigate(['/produtos']);

    });

  }



  }


