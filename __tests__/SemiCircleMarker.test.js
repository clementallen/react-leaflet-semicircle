import React, { createRef } from 'react';
import { MapContainer } from 'react-leaflet';
import L from 'leaflet';
import { SemiCircleMarker } from '../src';

describe('<SemiCircleMarker />', () => {
    it('should extend L.SemiCircleMarker', () => {
        const testRef = createRef();
        mount(
            <MapContainer>
                <SemiCircleMarker ref={testRef} />
            </MapContainer>,
        );
        expect(testRef.current).toBeInstanceOf(L.SemiCircleMarker);
    });
});
