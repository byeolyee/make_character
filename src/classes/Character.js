import { ABILITY, JOB, HAIRS, BODIES } from "../data.js";
import Person from "./Person.js";

export default class Character extends Person{
    constructor({job, ability, hair, body,name}){
        const hairIndex=HAIRS.indexOf(hair);
        const bodyIndex=BODIES.indexOf(body);
        super(hairIndex, bodyIndex);
    
        this.job=job;
        this.ability=ability;
        this.name=name;
    }

    changeJob(job){
        this.job=job;
    }

    changeAbility(ability){
        this.ability=ability;
    }

    enterName(name){
        this.name=name;
    }

    get intro(){
        return `hello my name is ${this.name}
                my job is ${JOB[this.job]}.
                ${ABILITY[this.ability]} is speciality.
                Iam ${this.body}.
                and my hair style is ${this.hair}.`;
    }

    showOff(){
        alert(`나는 최고의 ${this.job}이야!`)
    }

    showSkill(){
        alert(`간다! ${this.ability}!!`);
    }
}