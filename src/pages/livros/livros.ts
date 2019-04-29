import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { AlterarLivroPage } from '../alterar-livro/alterar-livro';

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {

  public livreto:Livro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Capturando parametro passado pela outra pagina.
    this.livreto = this.navParams.get("livreto");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosPage');
  }

  alterarLivro(livro:Livro) {
    this.navCtrl.push(AlterarLivroPage,{"livro": livro})
  }
}
