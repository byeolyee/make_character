import Character from "./classes/Character.js";
import {JOB, ABILITY} from "./data.js";

const $characterImage = document.querySelector('.image');
const $characterIntro = document.querySelector('.intro');
const $characterNameInput = document.querySelector('.name input');
const $hairRangeIndex = document.querySelector('.hair input');
const $bodyRangeIndex = document.querySelector('.body input');
const $jobSelect = document.querySelector('.job select');
const $jobActionBtn = document.querySelector('.job button');
const $abilitySelect = document.querySelector('.ability select');
const $abilityActionBtn = document.querySelector('.ability button');
const $nameActionBtn = document.querySelector('.btn-name')

const character = new Character({
    name : "hannah",
    job : "PROGRAMMER",
    ability : "TAUNT",
    hair : "medium",
    body : "normal",
});

$nameActionBtn.addEventListener("click",()=>{
    // alert($characterNameInput.value);
    character.enterName($characterNameInput.value);
    renderCharacter();
})
//이름 입력받아서 출력해보기.

$hairRangeIndex.addEventListener("change", (e)=>{
    character.changeHair(e.target.valueAsNumber);
    renderCharacter();
})

$bodyRangeIndex.addEventListener("change", (e)=>{
    character.changeBody(e.target.valueAsNumber);
    renderCharacter();
})

$jobSelect.addEventListener("change",(e)=>{
    character.changeJob(e.target.value);
    renderCharacter();
})

$abilitySelect.addEventListener("change",(e)=>{
    character.changeAbility(e.target.value);
    renderCharacter();
})

function renderCharacter(){
    renderCharacterIntro();
    renderCharacterImage();
}

function renderCharacterIntro(){
    $characterIntro.innerText = character.intro;
}

function renderCharacterImage(){
    $characterImage.src=getCharacterImage(character.hair, character.body);
}

function getCharacterImage(hair, body){
    return `images/hair-${hair}_body-${body}.png`;
}

function renderCharacterInterface(){
    const jobOptionTemplate = Object.keys(JOB)
    .map((jobName)=>`<option value=${jobName}>${JOB[jobName]}</option>`)
    .join("");

    const abilityOptionTemplate = Object.keys(ABILITY)
    .map((abilityName)=>`<option value=${abilityName}>${ABILITY[abilityName]}</option>`)
    .join("");

    $jobSelect.innerHTML=jobOptionTemplate;
    $abilitySelect.innerHTML=abilityOptionTemplate;
}

renderCharacter();
renderCharacterInterface();