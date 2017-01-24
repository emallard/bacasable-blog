
import {BacASable, NavigateurBacASable} from '../bacasable';
import {BlogApplicationClient} from '../client/application';
import {BlogApplicationServeur} from '../serveur/application'

import {ajouterTest} from '../testrunner/runner';
export {ajouterTest};

export class TestBase
{
    applicationServeur:BlogApplicationServeur;
    applicationClient:BlogApplicationClient;
    bacasable:BacASable;
    navigateur:NavigateurBacASable;
    
    constructor()
    {
        this.applicationServeur = new BlogApplicationServeur();
        this.applicationClient = new BlogApplicationClient();
        this.bacasable = new BacASable();
        this.bacasable.creer(this.applicationClient, this.applicationServeur);
        this.navigateur = this.bacasable.navigateur;
    }
}
