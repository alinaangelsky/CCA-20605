const selectorCnt = require ('../data/selectors.json').counter;
const selectorGen = require ('../data/selectors.json').general;
const expectedSCF = require('../data/expected.json').secondCounterFunctionality;
const inputValue = require('../helpers/inputNumber.js').inputValue;

describe('Second Counter functionality', function () {
    before(() => {
        browser.url('');
    });

    describe('Add counter', function () {

        it('TC-036 A new counter can not be added when the name of the counter in "Add Name Field" is "Abcdef" (less than 7 characters)', function () {
            inputValue ('title', expectedSCF.addNameField);
            const error = $(selectorCnt.error);
            const btn = $(selectorGen.addCounterBtn);
            expect(error).toBeDisplayed();
            expect(btn.isEnabled()).toEqual(false);
        });

    });
    
    describe('Count value', function () {

        it('TC-192 Subtract 1 from 1000 gives 999', function () {
            inputValue('count', expectedSCF.countValueTC192);
            $(selectorGen.addCounterBtn).click();
            $$(selectorCnt.blackBtn)[6].click();
            const countValue = $$(selectorCnt.countValue)[1];
            expect(countValue.getText()).toEqual(expectedSCF.countValueTC192res);
        });

        it('TC-193 Subtract 2 from 10000000 gives 9999998', function () {
            inputValue('count', expectedSCF.countValueTC193);
            $(selectorGen.addCounterBtn).click();
            $$(selectorCnt.blackBtn)[7].click();
            const countValue = $$(selectorCnt.countValue)[1];
            expect(countValue.getText()).toEqual(expectedSCF.countValueTC193res);
        });

        it('TC-194 Add 3 to 10000000 gives', function () {
            inputValue('count', expectedSCF.countValueTC193);
            $(selectorGen.addCounterBtn).click();
            $$(selectorCnt.blackBtn)[11].click();
            const countValue = $$(selectorCnt.countValue)[1];
            expect(countValue.getText()).toEqual(expectedSCF.countValueTC194res);
        });

    });
});