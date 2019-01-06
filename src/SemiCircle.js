import { Path, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-semicircle';

class SemiCircle extends Path {
    createLeafletElement(props) {
        const { radius, startAngle, stopAngle } = props;
        return new L.SemiCircle(
            props.position,
            {
                radius,
                startAngle,
                stopAngle
            }
        );
    }
}

export default withLeaflet(SemiCircle);
