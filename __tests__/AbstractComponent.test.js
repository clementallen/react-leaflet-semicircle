import React from 'react';
import AbstractComponent from '../src/AbstractComponent';

describe('<AbstractComponent />', () => {
    it('should throw an error when leafletComponent is not implemented', () => {
        expect(() => {
            shallow(<AbstractComponent />);
        }).toThrowError('leafletComponent getter not implemented');
    });
});
