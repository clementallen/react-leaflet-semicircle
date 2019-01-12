import { Path } from 'react-leaflet';
import 'leaflet-semicircle';

export default class AbstractComponent extends Path {
    createLeafletElement(props) {
        // props.leaflet is not used but destructured out so it's not passed to this.leafletComponent
        const { position, leaflet, ...options } = props; // eslint-disable-line no-unused-vars
        return new this.leafletComponent(position, options);
    }

    updateLeafletElement(fromProps, { startAngle, stopAngle }) {
        this.setStartAngle(startAngle);
        this.setStopAngle(stopAngle);
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
