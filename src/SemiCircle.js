import L from 'leaflet';
import AbstractComponent from './AbstractComponent';

export default class SemiCircle extends AbstractComponent {
    get leafletComponent() {
        return L.SemiCircle;
    }
}
