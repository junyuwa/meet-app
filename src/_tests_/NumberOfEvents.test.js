import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("NumberOfEvents <component />", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    test("textbox is rendered", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
    });

    test('change state when user input changes', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
        NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', {
            target: { value: 12 },
        });
        expect(NumberOfEventsWrapper.state('query')).toBe(12);
    });
})
