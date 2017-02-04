import {RouteurServeur, inject, injectNew, injectFunc, Injection} from '../bacasable';

export class ExecutionRequeteServeur
{
    routeurServeur = inject(RouteurServeur);
    injection = inject(Injection);

    executer(url:string, parameters:any):any
    {
        var typeService = this.routeurServeur.trouverType(url);
        var instanceConcrete = this.injection.instantiate(typeService, this);
        return instanceConcrete.executer(parameters);
    }
}