import { assert } from 'chai';
const general = require('./../data/selectors.json').general;
const values = require('./../data/expected.json');
    describe('Complex Counter App', function () { //define suite title by passing a string

        describe('Getting to the page', function () { //define sub-suite title by passing a string

            it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
                browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
                const title = browser.getTitle(); //get page title and assign it to the "title" variable
                browser.pause(2000); //just pause to visually see that something is happening on the page
                expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
            })

        });

        describe('Elements exist', function () {

            it('TC-002 Header', function () {
                const header = $(general.header);
                const actual = header.isDisplayed();
                expect(actual).toEqual(true);
            })

            it('TC-003 Total Result', function () {
                const header = $(general.totalResult).isDisplayed();
                expect(header).toEqual(true);
            })

            it('TC-004 Add Name Field', function () {
                const header = $(general.addNameField).isDisplayed();
                expect(header).toEqual(true);
            })

            it('TC-005 Label for Add Name Field', function () {
                const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length - 2].isDisplayed();
                expect(actual).toEqual(true);
            })

            it('TC-006 Default Value Field', function () {
                const actual = $(general.defaultValueField).isDisplayed();
                expect(actual).toEqual(true);
            })

            it('TC-007 Label for Default Value Field', function () {
                const actual = $$(general.defaultValueFieldLabel)[$$(general.defaultValueFieldLabel).length - 1].isDisplayed();
                expect(actual).toEqual(true);
            })

            it('TC-008 Add Counter', function () {
                const actual = $(general.addCounterBtn).isDisplayed();
                expect(actual).toEqual(true);
            })

        });

        describe('Elements value', function () {

            it('TC-009 Header = Counter', function () {
                const actual = $(general.header).getText();
                expect(actual).toEqual(values.general.header);

            });

            it('TC-010 Total Result = Total: 0', function () {
                const actual = $(general.totalResult).getText();
                expect(actual).toEqual(values.general.totalResult);

            });

            it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
                const actual = $(general.addNameField).getValue();
                expect(actual).toEqual(values.general.addNameField);

            });

            it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
                const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length - 2].getText();
                expect(actual).toEqual(values.general.addNameFieldLabel);
            })

            it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
                const actual = $(general.defaultValueField).getValue();
                expect(actual).toEqual(values.general.defaultValueField);
            })

            it('TC-014 Placeholder for Default Calue Field = 50 ', function () {
                const actual = $$(general.defaultValueFieldLabel)[$$(general.defaultValueFieldLabel).length - 1].getText();
                expect(actual).toEqual(values.general.defaultValueFieldLabel);
            })

            it('TC-015 Add Counter = ADD COUNTER', function () {
                const actual = $(general.addCounterBtn).getText();
                expect(actual).toEqual(values.general.addCounterBtn);
            })
        });
    })
