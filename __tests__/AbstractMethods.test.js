import React, { cloneElement, createRef } from 'react';
import { MapContainer } from 'react-leaflet';
import { createLayerComponent } from '@react-leaflet/core';

import {
    createLeafletElement,
    updateLeafletElement,
} from '../src/AbstractMethods';

import MockLeafletPlugin, {
    setStartAngleSpy,
    setStopAngleSpy,
    setRadiusSpy,
    setLatLngSpy,
    setDirectionSpy,
} from '../__mocks__/MockLeafletPlugin';

const MockComponent = createLayerComponent(
    createLeafletElement(MockLeafletPlugin),
    updateLeafletElement,
);

function updateProps(wrapper, props) {
    wrapper.setProps({
        children: cloneElement(wrapper.props().children, props),
    });
}

const mockOptions = {
    position: [51.505, -0.09],
    radius: 2000,
    startAngle: 90,
    stopAngle: 180,
    color: 'white',
};

let wrapper;
let testRef;

describe('<AbstractComponent />', () => {
    beforeEach(() => {
        MockLeafletPlugin.mockClear();
        setStartAngleSpy.mockClear();
        setStopAngleSpy.mockClear();
        setRadiusSpy.mockClear();
        setDirectionSpy.mockClear();
        setLatLngSpy.mockClear();
        testRef = createRef();
        wrapper = mount(
            <MapContainer>
                <MockComponent {...mockOptions} ref={testRef} />
            </MapContainer>,
        );
    });

    describe('prop changes', () => {
        it('should call the setStartAngle method if props change', () => {
            updateProps(wrapper, { startAngle: 100 });
            expect(setStartAngleSpy).toHaveBeenCalledWith(100);
        });
        it('should call the setStopAngle method if props change', () => {
            updateProps(wrapper, { stopAngle: 200 });
            expect(setStopAngleSpy).toHaveBeenCalledWith(200);
        });
        it('should call the setRadius method if props change', () => {
            updateProps(wrapper, { radius: 1000 });
            expect(setRadiusSpy).toHaveBeenCalledWith(1000);
        });
        it('should call the setLatLng method if props change', () => {
            updateProps(wrapper, { position: [51, 0] });
            expect(setLatLngSpy).toHaveBeenCalledWith([51, 0]);
        });
        it('should not call the setLatLng method if props do not change', () => {
            updateProps(wrapper, { position: [51.505, -0.09] });
            expect(setLatLngSpy).toHaveBeenCalledTimes(0);
        });
        it('should not call the setStartAngle method if props do not change', () => {
            updateProps(wrapper, { startAngle: 90 });
            expect(setStartAngleSpy).toHaveBeenCalledTimes(0);
        });
        it('should not call the setStopAngle method if props do not change', () => {
            updateProps(wrapper, { stopAngle: 180 });
            expect(setStopAngleSpy).toHaveBeenCalledTimes(0);
        });
        it('should not call the setRadius method if props do not change', () => {
            updateProps(wrapper, { radius: 2000 });
            expect(setRadiusSpy).toHaveBeenCalledTimes(0);
        });
    });

    describe('ref methods', () => {
        it('should expose the setStartAngle ref method', () => {
            testRef.current.setStartAngle(30);
            expect(setStartAngleSpy).toHaveBeenCalledWith(30);
        });
        it('should expose the setStopAngle ref method', () => {
            testRef.current.setStopAngle(30);
            expect(setStopAngleSpy).toHaveBeenCalledWith(30);
        });
        it('should expose the setDirection ref method', () => {
            testRef.current.setDirection(30, 60);
            expect(setDirectionSpy).toHaveBeenCalledWith(30, 60);
        });
    });
});
