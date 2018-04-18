export class Diary {
    public showEntry: boolean;
    constructor (public id:number, public entryDate:Date, public entry:string[]){
        this.showEntry=false;
    }

}
