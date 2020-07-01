const selectorCnt = require ('../data/selectors.json').counter;
const selectorGen = require ('../data/selectors.json').general;
const expectedSCF = require('../data/expected.json').secondCounterFunctionality;

describe('Second Counter functionality', function () {

    it('TC-192 Subtract 1 from 1000 gives 999', function () {
        browser.url('');
        $(selectorGen.defaultValueField).setValue(expectedSCF.countValueTC192);
        $(selectorGen.addCounterBtn).click();
        $$(selectorCnt.blackBtn)[6].click();
        const countValue = $$(selectorCnt.countValue)[1];
        expect(countValue.getText()).toEqual(expectedSCF.countValueTC192res);
    });

    it('TC-193 Subtract 2 from 10000000 gives 9999998', function () {
        browser.refresh();
        $(selectorGen.defaultValueField).setValue(expectedSCF.countValueTC193);
        $(selectorGen.addCounterBtn).click();
        $$(selectorCnt.blackBtn)[7].click();
        const countValue = $$(selectorCnt.countValue)[1];
        expect(countValue.getText()).toEqual(expectedSCF.countValueTC193res);
    });

    it('TC-194 Add 3 to 10000000 gives', function () {
        browser.refresh();
        $(selectorGen.defaultValueField).setValue(expectedSCF.countValueTC193);
        $(selectorGen.addCounterBtn).click();
        $$(selectorCnt.blackBtn)[11].click();
        const countValue = $$(selectorCnt.countValue)[1];
        expect(countValue.getText()).toEqual(expectedSCF.countValueTC194res);
    });

});