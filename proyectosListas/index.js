class nodo{
    constructor(value, nextnodo){
        this.value = value;
        this.nextnodo = nextnodo;
    }
}

class linkendList{
    constructor(){
        this.head = null();

    }

    insertNodo(value){
        const nuevoNodo = new nodo(value, null)
        if(this.head == null){
            this.head = nuevoNodo;
            return
        }
        let currentNode = this.head;
        while(currentNode.nextnodo){
            currentNode =  currentNode.nextnodo
        }
        currentNode.nextnodo = nuevoNodo
    }

    encontrarNodo(){}

    removerNodo(){}

    listarNode(){}
}

const lista = new linkendList()
lista.insertNodo(1)