import { withLeaflet } from 'react-leaflet';
import SS from './SemiCircle';
import SSM from './SemiCircleMarker';

export const SemiCircle = withLeaflet(SS);
export const SemiCircleMarker = withLeaflet(SSM);
