import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
    let EventWrapper, event;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={event} />);
    });

    test("render correct details of events", () => {
        const summary = EventWrapper.find(".eventSummary");
        const time = EventWrapper.find(".eventTime");
        const location = EventWrapper.find(".eventLocation")
        expect(summary.text()).toBe(`${event.summary}`);
        expect(time.text()).toBe(
            `${new Date(event.start.dateTime).toISOString()}`
        );
        expect(location.text()).toBe(`${event.location}`);
    });

    test("render correct details of events when button clicked", () => {
        const button = EventWrapper.find(".detailsButton");
        button.simulate("click");
        const details = EventWrapper.find(".eventDetail p");
        expect(details.text()).toBe(`Description: ${event.description}`);
    });


    test("show or hide details", () => {
        const button = EventWrapper.find(".detailsButton");
        button.simulate("click");
        expect(EventWrapper.state("hide")).toBe(true);
    });
});
