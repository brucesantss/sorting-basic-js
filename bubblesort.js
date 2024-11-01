function bubbleSort(lista){

    for(let i = 0; i < lista.length - 1 - i; i++){
        for(let j = 0; j < lista.length - 1; j++){

            if(lista[j] > lista[j + 1]){

                const atual = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = atual;

            }

        }
    }

    return lista;

}

const lista = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100001));

console.time('bubble sort');
console.log(bubbleSort(lista));
console.timeEnd('bubble sort');