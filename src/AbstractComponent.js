import { Path } from 'react-leaflet';
import 'leaflet-semicircle';

export default class AbstractComponent extends Path {
    createLeafletElement(props) {
        const { position, ...options } = props;
        return new this.leafletComponent(position, options);
    }

    updateLeafletElement(fromProps, { startAngle, stopAngle }) {
        this.leafletElement.setStartAngle(startAngle);
        this.leafletElement.setStopAngle(stopAngle);
    }

    setDirection(direction, size) {
        this.leafletElement.setDirection(direction, size);
    }

    setStartAngle(angle) {
        this.leafletElement.setStartAngle(angle);
    }

    setStopAngle(angle) {
        this.leafletElement.setStopAngle(angle);
    }

    get leafletComponent() {
        throw new Error('leafletComponent getter not implemented');
    }
}
