import React, { cloneElement, createRef } from 'react';
import { Map, withLeaflet } from 'react-leaflet';
import AbstractComponent from '../src/AbstractComponent';
import MockLeafletPlugin, {
    setStartAngleSpy,
    setStopAngleSpy,
    setDirectionSpy
} from '../__mocks__/MockLeafletPlugin';

const MockComponent = withLeaflet(
    class MockComponent extends AbstractComponent {
        get leafletComponent() {
            return MockLeafletPlugin;
        }
    }
);

const mockOptions = {
    position: [51.505, -0.09],
    radius: 2000,
    startAngle: 90,
    stopAngle: 180,
    color: 'white'
};

describe('<AbstractComponent />', () => {
    beforeEach(() => {
        MockLeafletPlugin.mockClear();
        setStartAngleSpy.mockClear();
        setStopAngleSpy.mockClear();
        setDirectionSpy.mockClear();
    });
    describe('constructor', () => {
        it('should throw an error when leafletComponent is not implemented', () => {
            expect(() => {
                shallow(<AbstractComponent />);
            }).toThrowError('leafletComponent getter not implemented');
        });
        it('should call the leaflet plugin constructor with the expected arguments', () => {
            const { position, ...options } = mockOptions;
            mount(
                <Map>
                    <MockComponent {...mockOptions} />
                </Map>
            );
            expect(MockLeafletPlugin).toHaveBeenCalledWith(position, options);
        });
    });

    describe('prop changes', () => {
        it('should call the setStartAngle method if props change', () => {
            const component = mount(
                <Map>
                    <MockComponent {...mockOptions} />
                </Map>
            );
            component.setProps({
                children: cloneElement(component.props().children, {
                    startAngle: 100
                })
            });
            expect(setStartAngleSpy).toHaveBeenCalledWith(100);
        });
        it('should call the setStopAngle method if props change', () => {
            const component = mount(
                <Map>
                    <MockComponent {...mockOptions} />
                </Map>
            );
            component.setProps({
                children: cloneElement(component.props().children, {
                    stopAngle: 200
                })
            });
            expect(setStopAngleSpy).toHaveBeenCalledWith(200);
        });
    });

    describe('ref methods', () => {
        it('should expose the setStartAngle ref method', () => {
            const testRef = createRef();
            mount(
                <Map>
                    <MockComponent {...mockOptions} ref={testRef} />
                </Map>
            );
            testRef.current.setStartAngle(30);
            expect(setStartAngleSpy).toHaveBeenCalledWith(30);
        });
        it('should expose the setStopAngle ref method', () => {
            const testRef = createRef();
            mount(
                <Map>
                    <MockComponent {...mockOptions} ref={testRef} />
                </Map>
            );
            testRef.current.setStopAngle(30);
            expect(setStopAngleSpy).toHaveBeenCalledWith(30);
        });
        it('should expose the setDirection ref method', () => {
            const testRef = createRef();
            mount(
                <Map>
                    <MockComponent {...mockOptions} ref={testRef} />
                </Map>
            );
            testRef.current.setDirection(30, 60);
            expect(setDirectionSpy).toHaveBeenCalledWith(30, 60);
        });
    });
});
