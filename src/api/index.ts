
import {Routeur, WebService} from '../bacasable';

export class BlogRouteurServeur extends Routeur
{
    constructor()
    {
        super();
        this.ajouterRoute('/api/derniers', DerniersArticles);
        this.ajouterRoute('/api/article/ajouter', AjouterArticle);
        this.ajouterRoute('/api/article/obtenir', ObtenirArticle);
        this.ajouterRoute('/api/article/enregistrer', EnregistrerArticle);
    }
}


export class Article
{
    id:string;
    auteur:string;
    contenu:string;
}

export class DerniersArticlesIn
{
    contenu:string;
}

export class DerniersArticlesOut
{
    articles:Article[];
}

export class Id
{
    id:string;
}

export class DerniersArticles extends WebService<DerniersArticlesIn, DerniersArticlesOut>
{
}

export class AjouterArticle extends WebService<Article, Id>
{
}

export class ObtenirArticle extends WebService<Id, Article>
{
}

export class EnregistrerArticle extends WebService<Article, void>
{
}
