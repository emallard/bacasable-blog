import { bind, inject } from '../bacasable/injection';
import { ExecutionRequeteServeur } from '../bacasable/executionRequeteServeur';
import { IAuthentificationEmailMotDePasse } from '../bacasable/authentification';
import { Authentification, AuthentificationIn, AuthentificationOut } from '../api/authentification';

export class AuthentificationImpl extends Authentification
{
    static binding = bind(Authentification).to(AuthentificationImpl).inTypeScope(ExecutionRequeteServeur);

    authentification = inject(IAuthentificationEmailMotDePasse);

    async executer(dto:AuthentificationIn) : Promise<AuthentificationOut>
    {
        var out = new AuthentificationOut();
        this.authentification.sAuthentifier(dto.email, dto.motDePasse);
        return {ok : this.authentification.estAuthentifié()};
    }
}