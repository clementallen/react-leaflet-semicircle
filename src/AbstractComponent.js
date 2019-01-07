import { Path } from 'react-leaflet';
import 'leaflet-semicircle';

export default class AbstractComponent extends Path {
    createLeafletElement(props) {
        const { position, ...options } = props;
        return new this.leafletComponent(position, options);
    }

    updateLeafletElement(fromProps, toProps) {
        this.leafletElement.setStartAngle(toProps.startAngle);
        this.leafletElement.setStopAngle(toProps.stopAngle);
    }

    get leafletComponent() {
        throw new Error(
            'leafletComponent getter not implemented'
        );
    }
}
