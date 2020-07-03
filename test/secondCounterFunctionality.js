const selectorCnt = require ('../data/selectors.json').counter;
const selectorGen = require ('../data/selectors.json').general;
const expectedSCF = require('../data/expected.json').secondCounterFunctionality;
const inputValue = require('../helpers/inputNumber.js').inputValue;
const expectedCnt = require ('./../data/expected.json').counter;

describe('Second Counter functionality', function () {
    before(() => {
        browser.url('');
    });

    describe('Add counter', function () {

        it('TC-36 A new counter can not be added when the name of the counter in "Add Name Field" is "Abcdef" (less than 7 characters)', function () {
            inputValue ('title', expectedSCF.addNameField);
            const error = $(selectorCnt.error);
            const btn = $(selectorGen.addCounterBtn);
            expect(error).toBeDisplayed();
            expect(btn.isEnabled()).toEqual(false);
        });

        it('TC-37 A a new counter can not be added when "Add Name Field" is empty.', function () {
            inputValue ('title', expectedSCF.addNameFieldTC37);
            const error = $(selectorCnt.error);
            const btn = $(selectorGen.addCounterBtn);
            expect(error).toBeDisplayed();
            expect(btn.isEnabled()).toEqual(false);
        });

        it('TC-43  "A" (upper case letter) can not  be added into "Default value field"', function () {
            inputValue('count', expectedSCF.addValueField);
            const error = $(selectorCnt.error);
            const btn = $(selectorGen.addCounterBtn);
            expect(error).toBeDisplayed();
            expect(btn.isEnabled()).toEqual(false);

        });

        it('TC-56 Counter is added with a correct name "Abcdefg"', function () {
            inputValue('title', expectedSCF.addNameFieldTC56);
            $(selectorGen.addCounterBtn).click();
            const actual = $$(selectorCnt.counterName)[2];
            expect(actual.getText()).toEqual(expectedSCF.secondCounterName);
        });


        it('TC-61 Counter is added with a correct Value "0"', function () {
            inputValue('count', expectedCnt.countValue);
            $(selectorGen.addCounterBtn).click();
            const actual = $$(selectorCnt.countValue)[1];
            expect(actual.getText()).toEqual(expectedCnt.countValue);
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