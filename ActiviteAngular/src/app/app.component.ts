import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    posts = [
        {
          postTitle : 'Mon premier post',
          postContent : 'Ah voilà enfin le roi de la classe l\'homme trop bien sapé, Abitbol ! Alors comme ça t\'as été élu l\'homme le plus classe du monde ! Laisse moi rire ! Style le grand play-boy des fonds marins, genre qui fait rêver les ménagères. Sauf que moi je les baise, moi, les ménagères, non ? C’est pas vrai.',
          loveIts : 0,
          created_at : '11122015'
        },
        {
          postTitle : 'Mon deuxième post',
          postContent : 'Écoute-moi bien, mon petit José. Tu baises les ménagères, bien, tu dois avoir le cul qui brille. Mais c’est pas ça qu’on appelle la classe.',
          loveIts : 0,
          created_at : '31052018'
        },
        {
          postTitle : 'Encore un post',
          postContent : 'À l’époque, j’étais moi-même cowboy, je vivais avec Jacques, un bon copain. Il y avait rien de sexuel entre nous. Je dis ça parce que je me suis souvent fait traiter de pédale, de salope. Et c’est facile de traiter les gens de pédés, tout ça parce que deux garçons vivent ensemble dans un ranch et portent des pantalons en cuir.',
          loveIts : 0,
          created_at : '20022019'
        }
    ];


}
