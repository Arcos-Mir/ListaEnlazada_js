class Nodo  {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null; //Esta es la referencia al siguiente nodo
    }
}

class ListaEnlazada {
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    insertarValor(nuevoValor) {
        //1. Creamos el nuevo nodo
        let nuevoNodo = new Nodo(nuevoValor);
        
        //2.Verificar si la lista enlazada está vacía
        if(this.inicio == null) {
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        }else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }
    }

    mostrar() {
        //1.Verificar si la lista enlazada está vacía
        if(this.inicio == null) {
            console.log('Lista enlazada vacía');
            return;
        }

        //2. Si la lista enlazada no está vacía, empezar a recorrerla
        let aux = this.inicio;
        while(aux != null) {
            console.log(aux.valor);
            aux = aux.siguiente;
        }
    }

    buscar(valorBuscar){
        //1.Verificar si la lista enlazada está vacía
        if(this.inicio == null) {
            return undefined;
        }

        //2.Empezar a recorrer la lista enlazada
        for(let aux = this.inicio; aux != null; aux = aux.siguiente) {
            if (aux.valor == valorBuscar) {
                return aux;
            }
        }
        return undefined;
    }
}

let listaDeComida = new ListaEnlazada();
listaDeComida.mostrar();

listaDeComida.insertarValor({nombre:'Pizza', cantidad: 5}); //imprime objetos
listaDeComida.insertarValor('Pizza');
listaDeComida.insertarValor('Tacos');
listaDeComida.insertarValor('Pastel');
listaDeComida.mostrar();

let valorABuscar;
valorABuscar = 'Pastel';
valorEncontrado = listaDeComida.buscar(valorABuscar);
if(typeof valorEncontrado !== 'undefined') {
    console.log(`El valor ${valorABuscar} SÍ existe en la lista enlazada`);
}else {
    console.log(`El valor ${valorABuscar} NO existe en la lista enlazada`);
}

valorABuscar = 'Hamburguesa';
valorEncontrado = listaDeComida.buscar(valorABuscar);
if(valorEncontrado !== undefined) {
    console.log(`El valor ${valorABuscar} SÍ existe en la lista enlazada`);
}else {
    console.log(`El valor ${valorABuscar} NO existe en la lista enlazada`);
}
