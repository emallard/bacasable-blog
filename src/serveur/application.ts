import * as Api from '../api';
import * as Impl from '../serveur/implementations';
import {RouteurServeur, Injection, ApplicationServeur, ExecutionRequeteServeur} from '../bacasable'

/*
export class BlogApplicationServeur extends ApplicationServeur
{
    constructor()
    {
        super();
        this.init(new Api.BlogRouteurServeur(), new BlogImplementations());
    }
}
*/
/*
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
}*/

export class BlogInjectionServeur
{
    configurer(injection:Injection)
    {
        injection.bind(RouteurServeur).to(Api.BlogRouteurServeur).inSingletonScope();

        injection.bind(Api.DerniersArticles).to(Impl.DerniersArticlesImpl).inTypeScope(ExecutionRequeteServeur);
        injection.bind(Api.AjouterArticle).to(Impl.AjouterArticleImpl).inTypeScope(ExecutionRequeteServeur);
        injection.bind(Api.ObtenirArticle).to(Impl.ObtenirArticleImpl).inTypeScope(ExecutionRequeteServeur);
        injection.bind(Api.EnregistrerArticle).to(Impl.EnregistrerArticleImpl).inTypeScope(ExecutionRequeteServeur);
    }
}