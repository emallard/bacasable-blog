import {NavigateurReel, ApplicationClient, Kernel} from '../bacasable'

export class Lanceur 
{
    private classe:{new() : ApplicationClient}
    applicationClient : ApplicationClient;
    navigateur: NavigateurReel;
    constructor(classe:{new() : ApplicationClient})
    {
        this.classe = classe;
    }

    lancer()
    {
        this.navigateur = new NavigateurReel();
        this.applicationClient = new this.classe();

        Kernel.navigateur = this.navigateur;
        Kernel.applicationClient = this.applicationClient;

        this.applicationClient.onload(this.navigateur);
    }
}