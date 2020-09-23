const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = ",.<>/?';:[{}]\|=+-_)(*&^%$#@!`~" + '"'
const miscCharacters = "çÇğĞİƵƶiŽžÑñŞş"

var specialCharactersAllowed = "on"

function compilePassword() {
    var pass = '';
    var textbox = document.querySelector("#placepass");
    var complexity = document.querySelector(".length")

    for (let cur = 0; cur < complexity.value - 1; cur++) {
        if (!specialCharactersAllowed == "on") {
            pass = pass + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
        }
        else if (specialCharactersAllowed == "on") {
            const joinedCharacters = characters + specialCharacters + miscCharacters;
            pass = pass + joinedCharacters.charAt(Math.floor(Math.random() * Math.floor(joinedCharacters.length - 1)));
        }
    }

    textbox.value = pass
}

function copyText() {
    var copyText = document.querySelector("#placepass");
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

function dragging() {
    var range = document.querySelector(".length");
    var text = document.querySelector("#lengthshower");
    var chance = document.querySelector('#chanceofcracking');
    var strength = 98 / range.value;

    text.innerHTML = "Length: " + range.value
    chance.innerHTML = "Chance of being cracked: " +  strength + "/100";
    
    // if (range.value <= 1.8 && range.value != 1.3) {
    //     chance.innerHTML = "Chance of being Cracked: " +  strength + "/100 Strong";
    // }
    // if (range.value <= 1.3 && range.value != 1) {
    //     chance.innerHTML = "Chance of being Cracked: " +  strength + "/100 VERY Strong";
    // }
    // if (range.value <= 1) {
    //     chance.innerHTML = "Chance of being Cracked: " +  strength + "/100 Almost IMPOSSIBLE";
    // }
}

function get() {
    console.log()
}