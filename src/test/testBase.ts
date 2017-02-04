
import {InternetBacASable, BacASable, NavigateurBacASable, INavigateur, ApplicationClient, ApplicationServeur, ServeurBacASable, ExecutionRequeteServeur, Injection, BindingScope} from '../bacasable';
import {BlogInjectionClient} from '../client/application';
import {BlogInjectionServeur} from '../serveur/application'

import {ajouterTest} from '../testrunner/runner';
export {ajouterTest};

export class TestBase
{
    applicationServeur:ApplicationServeur;
    applicationClient:ApplicationClient;
    navigateur:NavigateurBacASable;
    bacasable:BacASable;
    
    async initialiser()
    {
        var injection = new Injection();

        //injection.bind(ApplicationServeur).toSelf().inSingletonScope();

        //var scope = injection.addScope(new BindingScope(ApplicationServeur));
        injection.bind(ApplicationServeur).toSelf().inSingletonScope();
        injection.bind(ExecutionRequeteServeur).toSelf().inTypeScope(ApplicationServeur);

        injection.bind(ApplicationClient).toSelf().inSingletonScope();
        injection.bind(NavigateurBacASable).toSelf().inSingletonScope();
        injection.bind(INavigateur).to(NavigateurBacASable).inSingletonScope();
        injection.bind(ServeurBacASable).toSelf().inSingletonScope();
        injection.bind(InternetBacASable).toSelf().inSingletonScope();
        injection.bind(BacASable).toSelf().inSingletonScope();

        new BlogInjectionClient().configurer(injection);
        new BlogInjectionServeur().configurer(injection);

        this.bacasable = injection.get(BacASable);
        await this.bacasable.initialiser();

        this.applicationServeur = this.bacasable.applicationServeur;
        this.applicationClient = this.bacasable.applicationClient;
        this.navigateur = this.bacasable.navigateur;      
    }
}

