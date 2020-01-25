import { handleStatus } from '../handles.js';
import { partialize, compose } from '../operators.js';

const API = "http://localhost:3000/notas";

export const getItemsFromNotas = notas =>
    notas.$flatMap(nota => nota.itens);

export const filterItemsByCode = (code, items) =>
    items.filter(item => item.codigo === code);

export const sumItemsValue = items =>
    items.reduce((total, item) => total + item.valor, 0);

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
        // Using Partial Application (fn partialize) and
        // Composition with Point-free Style.
        return this
            .listAll()
            .then(
                compose(
                    sumItemsValue,
                    partialize(filterItemsByCode, code),
                    getItemsFromNotas
                )
            );
    }
}