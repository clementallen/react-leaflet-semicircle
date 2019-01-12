const setStartAngleSpy = jest.fn();
const setStopAngleSpy = jest.fn();
const setDirectionSpy = jest.fn();

export default jest.fn().mockImplementation(() => {
    return {
        setStartAngle: setStartAngleSpy,
        setStopAngle: setStopAngleSpy,
        setDirection: setDirectionSpy,
        _layerAdd: () => {}
    };
});

export { setStartAngleSpy, setStopAngleSpy, setDirectionSpy };
