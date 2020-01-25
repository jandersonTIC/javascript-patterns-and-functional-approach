import { handleStatus } from '../handles.js';

const API = "http://localhost:3000/notas";

export const sumItemsFromNotasWhereCodeIsEqualTo = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo === code)
    .reduce((total, item) => total + item.valor, 0);

export const notaService = {
    listAll(){
        return fetch(API)
            .then(handleStatus)
            .catch(error => {
                console.error(error);
                return Promise.reject("Não foi possível obter as Notas!");
            });
    },
    sumItemsFromNotasWhereCodeIsEqualTo(code){
        return this
            .listAll()
            .then(sumItemsFromNotasWhereCodeIsEqualTo(code));
    }
}