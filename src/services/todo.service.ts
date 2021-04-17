export  class ServiceTodo {

    // atributos Clase ServiceTodo
    private userId: number;
    private id: number;
    private title: string;
    private completed: boolean;

    // Constructor Clase ServiceTodo
    constructor(){
        this.id = -1
        this.userId = -1
        this.title = ''
        this.completed = false
    }


}