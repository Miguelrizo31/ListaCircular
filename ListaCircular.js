lass ListaCircular {
    constructor(nombre, hora, minuto, segundo) {
        this.nombre = nombre;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
        this.next = null;
        this.previous = null;
    }
    info() {
        return this.nombre + "(" + this.hora + this.minuto + this.segundo + ")";
    }
}
class ListaCircular {
    constructor() {
        this.inicio = null;
    }
    add_valor(nuevo) {
        if (this.inicio == null) {
            this.inicio = nuevo;
            nuevo.next = this.inicio;
            this.inicio.previous = nuevo;
        } else {

            var ultimo = this.inicio.previous;
            ultimo.next = nuevo;
            nuevo.next = this.inicio;
            this.inicio.previous = nuevo;

            var t = this.inicio;
            while (t.next = this.inicio)
                t = t.next;
            this.inicio.previous = nuevo;
            nuevo.next = this.inicio;
        }
    }
    Listar() {
        var aux = "";
        var temp = this.inicio;
        if (this.inicio != null) {
            ret = temp.info();
            while (temp.next != inicio) {
                temp = temp.next;
                aux += temp.info();
            }
        }
        return aux;
    }
    buscar(dato) {
        var temp = this.inicio;
        do {
            if (temp.dato == dato) {
                return temp;
            }
            temp = temp.next;
        } while (temp != this.inicio)
        return null;
    }
    ruta(ListaCircular, h, m, s, h2, m2, s2) {
        var b_inic = buscar(ListaCircular);
        if (b_inic != null) {
            var hoy = now()
        }
    }
    eliminar(dato) {
        var temp = this.inicio;
        do {
            if (temp.dato == dato) {
                return temp;
            }
            temp = temp.next;
        } while (temp != this.inicio)
        return null;
    }
}
