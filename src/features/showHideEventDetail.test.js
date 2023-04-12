import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showHideEventDetail.feature');

defineFeature(feature, test => {
    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('user clicks on “Details” button for an event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');
        });

        then('the event element will be expanded to show the event details', () => {
            expect(AppWrapper.find('.event .eventDetail')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper
        given('the list of events has been loaded', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');
        });

        when('user clicks on “Hide details” button for an event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');
        });

        then('the event element will collapse the event details', () => {
            expect(AppWrapper.find('.event .eventDetail')).toHaveLength(0);
        });
    });
})
