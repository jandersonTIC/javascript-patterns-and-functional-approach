import { handleStatus } from '../handles.js';
import { partialize, compose } from '../operators.js';
import { Maybe } from "../monad/maybe.js";

const API = "http://localhost:3000/notas";

export const getItemsFromNotas = notasMonad =>
    notasMonad.map(notas => notas.$flatMap(nota => nota.itens));

export const filterItemsByCode = (code, itemsMonad) =>
    itemsMonad.map(items => items.filter(item => item.codigo === code));

export const sumItemsValue = itemsMonad =>
    itemsMonad.map(items => items.reduce((total, item) => total + item.valor, 0));

export const notaService = {
    listAll(){
        return fetch(API)
            .then(handleStatus)
            .then(notas => Maybe.of(notas))
            .catch(error => {
                console.error(error);
                return Promise.reject("Não foi possível obter as Notas!");
            });
    },
    sumItemsFromNotasWhereCodeIsEqualTo(code){
        // Partial Application (fn partialize)
        const filterItems = partialize(filterItemsByCode, code);
        // Composition with Point-free Style.
        const sumItems = compose(
            sumItemsValue,
            filterItems,
            getItemsFromNotas
        );
        return this
            .listAll()
            .then(sumItems)
            .then(result => result.getOrElse(0));
    }
}