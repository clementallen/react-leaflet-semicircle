import { withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import AbstractComponent from './AbstractComponent';

export default withLeaflet(
    class SemiCircleMarker extends AbstractComponent {
        get leafletComponent() {
            return L.SemiCircleMarker;
        }
    }
);
