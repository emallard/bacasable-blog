import {Routeur, Implementations} from '../bacasable';

export class ApplicationServeur
{
    routeurServeur:Routeur;
    injectionServeur:Implementations;

    init(routeurServeur:Routeur, injectionServeur:Implementations)
    {
        this.routeurServeur = routeurServeur;
        this.injectionServeur = injectionServeur;
    }

    recevoir(url:string, parameters:any):any
    {
        // identifier le webservice en fonction de l'url
        var typeService = this.routeurServeur.trouverType(url);
        var instanceConcrete = this.injectionServeur.instancier(typeService);
        return instanceConcrete.executer(parameters);
    }
}