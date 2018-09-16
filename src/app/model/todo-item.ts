export class TodoItem {
    public done:boolean;
    public text:string;

    constructor(text:string){
        this.text=text;
        this.done=false;
    }
}
