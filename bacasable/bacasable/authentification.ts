
export class IAuthentificationEmailMotDePasse
{

    sInscrire(email:string, motDePasse:string) 
    {
        throw "Non implémenté";
    }

    sAuthentifier(email:string, motDePasse:string)
    {
        throw "Non implémenté";
    }

    seDeconnecter()
    {
        throw "Non implémenté";
    }

    estAuthentifié() : boolean
    {
        throw "Non implémenté";
    }

    idAuthentifié() : string 
    {
        throw "Non implémenté";
    }
}

// NodeJs implementation
/*
if (req.user) {
    // logged in
} else {
    // not logged in
}
*/


/*
export class Authentification1
{
    requete = inject(Requete);

    IdAuthentifié() : string {
        return this.requete.cookies['_authent'];
    }
}*/