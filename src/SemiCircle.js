import { createLayerComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet-semicircle';

import { createLeafletElement, updateLeafletElement } from './AbstractMethods';

export default createLayerComponent(
    createLeafletElement(L.SemiCircle),
    updateLeafletElement,
);
