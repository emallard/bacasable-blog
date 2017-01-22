import * as Def from '../api';
import * as Impl from '../serveur/implementations';
import {ApplicationServeur, Implementations} from '../bacasable'


export class BlogApplicationServeur extends ApplicationServeur
{
    constructor()
    {
        super();
        this.init(new Def.BlogRouteurServeur(), new BlogImplementations());
    }
}

export class BlogImplementations extends Implementations
{
    constructor()
    {
        super();
        this.ajouterImplementation(Def.DerniersArticles, Impl.DerniersArticlesImpl);
        this.ajouterImplementation(Def.AjouterArticle, Impl.AjouterArticleImpl);
        this.ajouterImplementation(Def.ObtenirArticle, Impl.ObtenirArticleImpl);
        this.ajouterImplementation(Def.EnregistrerArticle, Impl.EnregistrerArticleImpl);
    }
}