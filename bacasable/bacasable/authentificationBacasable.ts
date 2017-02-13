import { IAuthentificationEmailMotDePasse } from './authentification';


// A injecter comme singleton
export class AuthentificationEmailMotDePasseBacasable extends IAuthentificationEmailMotDePasse
{

    authentifié = false;
    id:string = null;
    email:string = null;
    motDePasse:string = null;

    sInscrire(email:string, motDePasse:string) 
    {
        this.email = email;
        this.motDePasse = motDePasse;
        this.id = '12345';
    }

    sAuthentifier(email:string, motDePasse:string)
    {
        if (this.email == email && this.motDePasse == motDePasse)
        {
            this.authentifié = true;
        }
    }

    seDeconnecter()
    {
        this.authentifié = false;
        this.id = null;
    }

    estAuthentifié() : boolean
    {
        return this.authentifié;
    }

    idAuthentifié() : string 
    {
        if (!this.authentifié)
            throw "Pas d'authentification";
        return this.id;
    }
}