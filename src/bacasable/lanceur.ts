import { Injection } from './injection';
import {INavigateur, NavigateurReel, ApplicationClient, RouteurClient, RouteurServeur} from '../bacasable'

export class Lanceur 
{

    injection: Injection;
    
    constructor(moduleInjection:any)
    {
        this.injection = new Injection();
        this.injection.bind(INavigateur).to(NavigateurReel).inSingletonScope();

        moduleInjection.configurer(this.injection);
    }

    lancer()
    {
        var applicationClient = this.injection.get(ApplicationClient);
        applicationClient.onload();
    }
}