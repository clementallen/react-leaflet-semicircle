import L from 'leaflet';
import AbstractComponent from './AbstractComponent';

export default class SemiCircleMarker extends AbstractComponent {
    get leafletComponent() {
        return L.SemiCircleMarker;
    }
}
