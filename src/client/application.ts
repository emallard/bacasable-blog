import {Routeur, ApplicationClient, Lanceur} from '../bacasable';
import * as C from '../client';
import * as Api from '../api';



export class BlogRouteurClient extends Routeur
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

export class BlogApplicationClient extends ApplicationClient
{
    constructor()
    {
        super();
        this.init(new BlogRouteurClient(), new Api.BlogRouteurServeur());
    }
}

export var lanceur = new Lanceur(BlogApplicationClient);
