import {BODIES, HAIRS} from "../data.js";

export default class Person{
    constructor(hairIndex, bodyIndex){
        this.hairIndex=hairIndex;
        this.bodyIndex=bodyIndex;
    }

    changeHair(index){
        this.hairIndex=index;
    }

    changeBody(index){
        this.bodyIndex=index;
    }

    get hair(){
        return HAIRS[this.hairIndex];
    }

    get body(){
        return BODIES[this.bodyIndex];
    }
}