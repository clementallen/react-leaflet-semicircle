import { Path, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-semicircle';

class SemiCircle extends Path {
    createLeafletElement(props) {
        const { radius = null, startAngle, stopAngle, position } = props;
        return new L.SemiCircle(
            position,
            {
                radius,
                startAngle,
                stopAngle
            }
        );
    }
}

export default withLeaflet(SemiCircle);
