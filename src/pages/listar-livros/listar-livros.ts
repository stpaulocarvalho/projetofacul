import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { LivrosPage } from '../livros/livros';
import { Autor } from '../../model/autor';
import { Editora } from '../../model/editora';


@IonicPage()
@Component({
  selector: 'page-listar-livros',
  templateUrl: 'listar-livros.html',
})
export class ListarLivrosPage {
  public livros: Livro[];

  autor: Autor = {
    nome: 'Shelby Foote', nascimento: 1894, descricao: 'Uma narrativa emocionante'
  }
  editora: Editora = {
    nome: 'Lucas Livros', descricao: 'È nois!'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
    var livro01 = {
      titulo: 'The Civil War',
      subtitulo: 'A narrativa',
      capa: 'Padrao',
      editora: this.editora,
      autor: this.autor,
      isbn: 'Teste',
      publicacao: '1958',
      paginas: 1000,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51i1hKxxlYL._SX345_BO1,204,203,200_.jpg'
      
    };

    this.livros = [livro01];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarLivrosPage');
  }

  irParaDestino(livro: Livro) {
    //Passando o Objeto para a proxima pagina
    this.navCtrl.push(LivrosPage, { "livreto": livro })
    console.log("Abrir pagina de especificacao do livro")
  }

}
