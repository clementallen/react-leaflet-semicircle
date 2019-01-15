import { Path } from 'react-leaflet';
import 'leaflet-semicircle';

export default class AbstractComponent extends Path {
    // props.leaflet is not used but destructured out so it's not passed to this.leafletComponent
    // eslint-disable-next-line no-unused-vars
    createLeafletElement({ position, leaflet, ...options }) {
        return new this.leafletComponent(position, options);
    }

    updateLeafletElement(fromProps, { startAngle, stopAngle }) {
        if (fromProps.startAngle !== startAngle) {
            this.leafletElement.setStartAngle(startAngle);
        }
        if (fromProps.stopAngle !== stopAngle) {
            this.leafletElement.setStopAngle(stopAngle);
        }
    }

    get leafletComponent() {
        throw new Error('leafletComponent getter not implemented');
    }
}
