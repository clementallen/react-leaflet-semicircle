const setStartAngleSpy = jest.fn();
const setStopAngleSpy = jest.fn();
const setRadiusSpy = jest.fn();
const setLatLngSpy = jest.fn();
const setDirectionSpy = jest.fn();
const setStyleSpy = jest.fn();

export default jest.fn().mockImplementation(() => {
    return {
        setStartAngle: setStartAngleSpy,
        setStopAngle: setStopAngleSpy,
        setRadius: setRadiusSpy,
        setLatLng: setLatLngSpy,
        setDirection: setDirectionSpy,
        setStyle: setStyleSpy,
        _layerAdd: () => {},
    };
});

export {
    setStartAngleSpy,
    setStopAngleSpy,
    setRadiusSpy,
    setLatLngSpy,
    setDirectionSpy,
};
