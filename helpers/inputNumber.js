const selectorCnt = require ('../data/selectors.json').counter;
const selectorGen = require ('../data/selectors.json').general;

function inputNumber (str, value) {
    if (str === "left") {
        if ($(selectorCnt.lowerLimitField).isDisplayed()) {
            $(selectorCnt.lowerLimitField).click();
        }
        $(selectorCnt.lowerInputField).click();
        browser.keys('Backspace');
        browser.keys(value);
    } else {
        if ($(selectorCnt.upperLimitField).isDisplayed()) {
            $(selectorCnt.upperLimitField).click();
        }
        $(selectorCnt.upperInputField).click();
        browser.keys('Backspace');
        browser.keys(value);
    }
}

function inputValue (name, value){
    if (name === 'title'){
        $(selectorGen.addNameField).setValue(value);
    } else {
        $(selectorGen.defaultValueField).setValue(value);
    }
}

module.exports = { inputNumber, inputValue}