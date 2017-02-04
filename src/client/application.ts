import {RouteurClient, RouteurServeur, Lanceur, Injection} from '../bacasable';
import * as C from '../client';
import * as Api from '../api';


export class BlogRouteurClient extends RouteurClient
{
    constructor()
    {
        super();
        this.ajouterRoute('/', C.PageAccueil);
        this.ajouterRouteParamétrée('/article/:id', C.PageVoirArticle);
        this.ajouterRouteParamétrée('/modifier/:id', C.PageModifierArticle);
        //this.ajouterRouteParamétrée2(C.PageVoirArticle, (id:Api.Id) => ['/ajouter/', ()=>id.id]);
        //this.ajouterRouteParamétrée2(C.PageModifierArticle, (id:Api.Id) => ['/modifier/', id.id]);
    }
}

export class BlogInjectionClient
{
    configurer(injection:Injection)
    {
        injection.bind(C.PageAccueil).toSelf().inSingletonScope();
        injection.bind(C.PageModifierArticle).toSelf().inSingletonScope();
        injection.bind(C.PageVoirArticle).toSelf().inSingletonScope();
        injection.bind(RouteurClient).to(BlogRouteurClient).inSingletonScope();
        injection.bind(RouteurServeur).to(Api.BlogRouteurServeur).inSingletonScope();
    }
}

//export var lanceur = new Lanceur(new BlogInjectionClient());
