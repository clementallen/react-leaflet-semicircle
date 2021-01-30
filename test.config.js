import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

global.mount = mount;

// Fix SVG issues in tests.  Found here: https://stackoverflow.com/questions/54382414/fixing-react-leaflet-testing-error-cannot-read-property-layeradd-of-null/54384719#54384719
const createElementNSOrig = global.document.createElementNS;
global.document.createElementNS = function (namespaceURI, qualifiedName) {
    if (
        namespaceURI === 'http://www.w3.org/2000/svg' &&
        qualifiedName === 'svg'
    ) {
        const element = createElementNSOrig.apply(this, arguments);
        element.createSVGRect = function () {};
        return element;
    }
    return createElementNSOrig.apply(this, arguments);
};
