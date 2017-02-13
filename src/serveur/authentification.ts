import { bind, inject } from '../../bacasable/bacasable/injection';
import { ExecutionRequeteServeur } from '../../bacasable/bacasable/executionRequeteServeur';
import { IAuthentificationEmailMotDePasse } from '../../bacasable/bacasable/authentification';
import { Authentification, AuthentificationIn, AuthentificationOut, Inscription } from '../api/authentification';

export class AuthentificationImpl extends Authentification
{
    static binding = bind(Authentification).to(AuthentificationImpl).inTypeScope(ExecutionRequeteServeur);

    authentification = inject(IAuthentificationEmailMotDePasse);

    async executer(dto:AuthentificationIn) : Promise<AuthentificationOut>
    {
        var out = new AuthentificationOut();
        await this.authentification.sAuthentifier(dto.email, dto.motDePasse);
        return {ok : await this.authentification.estAuthentifié()};
    }
}

export class InscriptionImpl extends Inscription
{
    static binding = bind(Inscription).to(InscriptionImpl).inTypeScope(ExecutionRequeteServeur);

    authentification = inject(IAuthentificationEmailMotDePasse);

    async executer(dto:AuthentificationIn) : Promise<AuthentificationOut>
    {
        var out = new AuthentificationOut();
        await this.authentification.sInscrire(dto.email, dto.motDePasse);
        return {ok : true};
    }
}