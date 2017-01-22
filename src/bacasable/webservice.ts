
export interface IWebService<T, U>
{
    executer(t:T):U;
}

export class WebService<T, U> implements IWebService<T, U>
{
    executer(t:T):U{
        throw '_';
    }
}