import React from 'react';
import { Map } from 'react-leaflet';
import L from 'leaflet';
import { SemiCircle } from '../src/index';
import AbstractComponent from '../src/AbstractComponent';

jest.spyOn(L, 'SemiCircle').mockImplementation(() => {
    return {
        _layerAdd: () => {},
    };
});

describe('<SemiCircle />', () => {
    it('should extend the AbstractComponent', () => {
        const wrapper = mount(
            <Map>
                <SemiCircle />
            </Map>
        );
        expect(wrapper.find(SemiCircle).children().instance()).toBeInstanceOf(
            AbstractComponent
        );
    });
    it('should extend L.SemiCircleMarker', () => {
        const wrapper = mount(
            <Map>
                <SemiCircle />
            </Map>
        );
        expect(
            wrapper.find(SemiCircle).children().instance().leafletComponent
        ).toEqual(L.SemiCircle);
    });
});
