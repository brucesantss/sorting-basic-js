function quickSort(lista){

    if (lista.length <= 1) return lista;

    const pivo = lista[lista.length - 1];
    const left = [];
    const right = [];

    for(let i = 0; i < lista.length - 1; i++){

        if(lista[i] < pivo){
            left.push(lista[i]);
        }else{
            right.push(lista[i]);
        }

    }

    return [...quickSort(left), pivo, ...quickSort(right)];
}

const lista = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100001));

console.time('quick sort');
console.log(quickSort(lista));
console.timeEnd('quick sort');