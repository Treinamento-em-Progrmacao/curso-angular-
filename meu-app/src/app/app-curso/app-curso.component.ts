import { Component, OnInit } from '@angular/core';

import { AlunosService } from '../service/alunos.service';


@Component({
  selector: 'app-app-curso',
  templateUrl: './app-curso.component.html',
  styleUrls: ['./app-curso.component.css']
})
export class AppCursoComponent implements OnInit {

nome = 'Antonio8';
imagem = "minhaImagem.pg";
alunos: any;
myValue = null;
isVisible = false;

meusAlunos = [
  "Antonio",
  "Maria",
  "João"
]

aluno ={

  dados:{
    nome: 'Maria'
  }
}

  constructor(private alunosService: AlunosService) {
    this.alunos = this.alunosService.getAlunos();
   
   }

  ngOnInit(): void {

    
  }

  meuEvento(){
    alert("OLÁ MUNDO !")
  }



}
