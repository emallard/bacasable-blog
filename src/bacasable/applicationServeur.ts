import {RouteurServeur, inject, injectNew, injectFunc, Injection, ExecutionRequeteServeur} from '../bacasable';

export class ApplicationServeur
{
    routeurServeur = inject(RouteurServeur);
    creerExecution = injectFunc(ExecutionRequeteServeur);
    
    recevoir(url:string, parameters:any):any
    {
        var execution = this.creerExecution();
        return execution.executer(url, parameters);
    }
}
