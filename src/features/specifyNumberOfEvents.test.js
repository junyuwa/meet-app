import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper
        given('the page is loaded upon search request sent', () => {
            AppWrapper = mount(<App />)
        });

        when('the user did not specify a number for returned events', () => {
            AppWrapper.update()
            const NumberOfEventsWrapper = AppWrapper.find('#noe')
            expect(NumberOfEventsWrapper.state('query')).toBe(32)
        });

        then('the page will load 32 event elements', () => {
            AppWrapper.update()
            expect(AppWrapper.find('.EventList li').hostNodes()).toHaveLength(32);
        });
    });

    let AppWrapper
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('the page is loaded upon search request sent', async () => {
            AppWrapper = await mount(<App />)
        });

        when('the user specifies a number for returned events', () => {
            AppWrapper.update()
            AppWrapper.find('#noe input').simulate('change', { target: { value: '10' } });
        });

        then('the page will load the specified number of event elements', () => {
            AppWrapper.update()
            expect(AppWrapper.find('.EventList li').hostNodes()).toHaveLength(10);
        });
    });
})
