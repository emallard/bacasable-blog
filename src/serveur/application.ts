import * as Api from '../api';
import * as Impl from '../serveur/implementations';
import {ApplicationServeur, Implementations} from '../bacasable'


export class BlogApplicationServeur extends ApplicationServeur
{
    constructor()
    {
        super();
        this.init(new Api.BlogRouteurServeur(), new BlogImplementations());
    }
}

export class BlogImplementations extends Implementations
{
    constructor()
    {
        super();
        this.ajouterImplementation(Api.DerniersArticles, Impl.DerniersArticlesImpl);
        this.ajouterImplementation(Api.AjouterArticle, Impl.AjouterArticleImpl);
        this.ajouterImplementation(Api.ObtenirArticle, Impl.ObtenirArticleImpl);
        this.ajouterImplementation(Api.EnregistrerArticle, Impl.EnregistrerArticleImpl);
    }
}