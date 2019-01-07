import { Path, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-semicircle';

class SemiCircleMarker extends Path {
    createLeafletElement(props) {
        const { position, ...options } = props;
        return new L.SemiCircleMarker(position, options);
    }

    updateLeafletElement(fromProps, toProps) {
        this.props.leaflet.layerContainer.removeLayer(this.leafletElement);
        const { position, ...options } = toProps;
        this.leafletElement = new L.SemiCircleMarker(position, options);
        this.props.leaflet.layerContainer.addLayer(this.leafletElement);
    }
}

export default withLeaflet(SemiCircleMarker);
