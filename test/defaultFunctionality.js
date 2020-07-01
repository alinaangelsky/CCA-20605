const selectorCnt = require ('../data/selectors.json').counter;
const selectorGen = require ('../data/selectors.json').general;
const expectedGen = require ('./../data/expected.json').general;
const expectedDCF = require ('../data/expected.json').defaultCounterFunctionality;
const inputNumber = require ('./../helpers/inputNumber');

describe('Default counter functionality', function () {

    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })

    it('TC-042 LLF accept 1', function () {
        inputNumber('left', expectedDCF.inputMin);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-043 ULF accept 9', function () {
        inputNumber('right', expectedDCF.inputMax);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber('left', expectedDCF.inputMin);
        inputNumber('right', expectedDCF.inputMin);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
        expect(actual).toEqual(+expectedDCF.countValueTC041);
    })

    it('TC-120 LLF accept 5 if ULF value is higher than 5', function () {
        browser.refresh();
        inputNumber('right', expectedDCF.inputMax);
        inputNumber('left', expectedDCF.input);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-144 ULF accept 5', function () {
        browser.refresh();
        inputNumber('right', expectedDCF.input);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-183 Count Value did nоt change after reset limit fields to the default value state ', function () {
        browser.refresh();
        $(selectorCnt.lowerLimitField).click();
        $(selectorCnt.upperLimitField).click();
        const resetLF = $$(selectorCnt.resetLimitF)[0];
        const resetUF = $$(selectorCnt.resetLimitF)[1];
        resetLF.click();
        resetUF.click();
        const countValue = $(selectorCnt.countValue);
        expect(countValue.getText()).toEqual(expectedDCF.countValue);
    });

    it('TC-184 Count Value did not change after reset limit fields to the default value state ', function () {
        browser.refresh();
        inputNumber('left', expectedDCF.countValueTC041);
        inputNumber('right', expectedDCF.inputMax);
        const lowerButton = $$(selectorCnt.blackBtn)[3];
        const upperButton = $$(selectorCnt.blackBtn)[15];
        lowerButton.click();
        upperButton.click();
        const resetLF = $$(selectorCnt.resetLimitF)[0];
        const resetUF = $$(selectorCnt.resetLimitF)[1];
        resetLF.click();
        resetUF.click();
        const countValue = $(selectorCnt.countValue);
        expect(countValue.getText()).toEqual(expectedDCF.countValueTC184);
    });

    it('TC-185 Total Result did not change after reset limit fields to the default value state ', function () {
        browser.refresh();
        $(selectorCnt.lowerLimitField).click();
        $(selectorCnt.upperLimitField).click();
        const resetLF = $$(selectorCnt.resetLimitF)[0];
        const resetUF = $$(selectorCnt.resetLimitF)[1];
        resetLF.click();
        resetUF.click();
        const res = $(selectorGen.totalResult);
        expect(res.getText()).toEqual(expectedGen.totalResult);
    });

    it('TC-186 Total Value did not change after reset limit fields to the default value state', function () {
        browser.refresh();
        inputNumber('left', expectedDCF.countValueTC041);
        inputNumber('right', expectedDCF.inputMax);
        const lowerButton = $$(selectorCnt.blackBtn)[3];
        const upperButton = $$(selectorCnt.blackBtn)[15];
        lowerButton.click();
        upperButton.click();
        const resetLF = $$(selectorCnt.resetLimitF)[0];
        const resetUF = $$(selectorCnt.resetLimitF)[1];
        resetLF.click();
        resetUF.click();
        const res = $(selectorGen.totalResult);
        expect(res.getText()).toEqual(expectedGen.totalResultTC186);
    });
});