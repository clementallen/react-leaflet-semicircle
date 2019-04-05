import React from 'react';
import { Map } from 'react-leaflet';
import L from 'leaflet';
import { SemiCircleMarker } from '../src/index';
import AbstractComponent from '../src/AbstractComponent';

jest.spyOn(L, 'SemiCircleMarker').mockImplementation(() => {
    return {
        _layerAdd: () => {}
    };
});

describe('<SemiCircleMarker />', () => {
    it('should extend the AbstractComponent', () => {
        const wrapper = mount(
            <Map>
                <SemiCircleMarker />
            </Map>
        );
        expect(
            wrapper
                .find(SemiCircleMarker)
                .children()
                .instance()
        ).toBeInstanceOf(AbstractComponent);
    });
    it('should extend L.SemiCircleMarker', () => {
        const wrapper = mount(
            <Map>
                <SemiCircleMarker />
            </Map>
        );
        expect(
            wrapper
                .find(SemiCircleMarker)
                .children()
                .instance().leafletComponent
        ).toEqual(L.SemiCircleMarker);
    });
});
