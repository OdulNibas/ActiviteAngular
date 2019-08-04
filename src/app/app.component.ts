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
          postContent : 'Écoute-moi bien, mon petit José. Tu baises les ménagères, bien, tu dois avoir le cul qui brille. Mais c’est pas ça qu’on appelle la classe.',
          loveIts : 0
        },
        {
          postTitle : 'Mon deuxième post',
          postContent : 'Tu dépenses tout ton argent dans les habits et accessoires de mode mais tu es ridicule. Enfin si ça te plaît. C’est toi qui les portes. Mais moi, si tu veux mon opinion, ça fait un peu… has been.',
          loveIts : 0
        },
        {
          postTitle : 'Encore un post',
          postContent : 'À l’époque, j’étais moi-même cowboy, je vivais avec Jacques, un bon copain. Il y avait rien de sexuel entre nous. Je dis ça parce que je me suis souvent fait traiter de pédale, de salope. Et c’est facile de traiter les gens de pédés, tout ça parce que deux garçons vivent ensemble dans un ranch et portent des pantalons en cuir.',
          loveIts : 0
        }
    ];


}
