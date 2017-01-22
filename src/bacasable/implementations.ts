export class Implementations
{
    items:ItemImplementations[] = [];

    ajouterImplementation<U, T extends U>(u : {new():U}, t : {new():T})
    {
        this.items.push({
            typeBase : u,
            typeConcret: t
        });
    }

    instancier(typeBase:any) : any
    {
        var found = this.items.find((i) => i.typeBase == typeBase);
        if (found == null)
            throw "L'implémentation concrète pour le type " + typeBase + " n'a pas été trouvée";
        
        return new found.typeConcret();
    }

    instancier2<U>(type : {new():U}) : U
    {
        var found = this.items.find((i) => i.typeBase == type);
        if (found == null)
            throw "L'implémentation concrète pour le type " + type + " n'a pas été trouvée";
       
        return <U> (new found.typeConcret());
    }
}

export class ItemImplementations
{
    typeBase : { new() : any };
    typeConcret : {new() : any};
}