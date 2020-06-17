import React, { cloneElement, createRef } from 'react';
import { Map, withLeaflet } from 'react-leaflet';
import AbstractComponent from '../src/AbstractComponent';
import MockLeafletPlugin, {
    setStartAngleSpy,
    setStopAngleSpy,
    setRadiusSpy,
    setLatLngSpy,
    setDirectionSpy,
} from '../__mocks__/MockLeafletPlugin';

const MockComponent = withLeaflet(
    class MockComponent extends AbstractComponent {
        get leafletComponent() {
            return MockLeafletPlugin;
        }
    }
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
            <Map>
                <MockComponent {...mockOptions} ref={testRef} />
            </Map>
        );
    });
    describe('constructor', () => {
        it('should throw an error when leafletComponent is not implemented', () => {
            expect(() => {
                shallow(<AbstractComponent />);
            }).toThrowError('leafletComponent getter not implemented');
        });
        it('should call the leaflet plugin constructor with the expected arguments', () => {
            const { position, ...options } = mockOptions;
            expect(MockLeafletPlugin).toHaveBeenCalledWith(position, options);
        });
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
            testRef.current.leafletElement.setStartAngle(30);
            expect(setStartAngleSpy).toHaveBeenCalledWith(30);
        });
        it('should expose the setStopAngle ref method', () => {
            testRef.current.leafletElement.setStopAngle(30);
            expect(setStopAngleSpy).toHaveBeenCalledWith(30);
        });
        it('should expose the setDirection ref method', () => {
            testRef.current.leafletElement.setDirection(30, 60);
            expect(setDirectionSpy).toHaveBeenCalledWith(30, 60);
        });
    });
});
