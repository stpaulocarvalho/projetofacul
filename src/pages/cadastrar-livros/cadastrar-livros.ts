import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { Autor } from '../../model/autor';
import { Editora } from '../../model/editora';


@IonicPage()
@Component({
  selector: 'page-cadastrar-livros',
  templateUrl: 'cadastrar-livros.html',
})
export class CadastrarLivrosPage {

  //O cadastro sera postado na API, pensar em alguma forma de vincular com o Ator, ou adicionar campos no cadastro do Livro
  autor: Autor = {
    nome: '', nascimento: 1850, descricao: 'Teste'
  }
  editora: Editora = {
    nome: '', descricao: 'Teste'
  }

  livro: Livro = {
    titulo: '', subtitulo: '', capa: '', editora: this.editora,
    autor: this.autor, isbn: '', publicacao: '',
    paginas: null, imageUrl: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) { }


  openAlert() {
    let addToAlert = this.alertController.create({
      title: 'Livro Cadastrado!',
      subTitle: 'O Livro '+ this.livro.titulo + ' foi cadastrado.',
      buttons: ['Ok']
    });

    addToAlert.present();
  }

  logForm() {
    console.log(this.livro)
    this.openAlert();
    this.navCtrl.pop();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarLivrosPage');

  }

}
