import React, { createRef } from 'react';
import { MapContainer } from 'react-leaflet';
import L from 'leaflet';
import { SemiCircle } from '../src';

describe('<SemiCircle />', () => {
    it('should extend L.SemiCircle', () => {
        const testRef = createRef();
        mount(
            <MapContainer>
                <SemiCircle ref={testRef} />
            </MapContainer>,
        );
        expect(testRef.current).toBeInstanceOf(L.SemiCircle);
    });
});
