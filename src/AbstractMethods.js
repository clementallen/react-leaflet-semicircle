export function createLeafletElement(LeafletComponent) {
    return ({ position, ...options }, context) => {
        const instance = new LeafletComponent(position, options);
        return {
            instance,
            context: { ...context, overlayContainer: instance },
        };
    };
}

export function updateLeafletElement(
    layer,
    { startAngle, stopAngle, position, radius },
    prevProps,
) {
    if (prevProps.startAngle !== startAngle) {
        layer.setStartAngle(startAngle);
    }
    if (prevProps.stopAngle !== stopAngle) {
        layer.setStopAngle(stopAngle);
    }
    if (prevProps.radius !== radius) {
        layer.setRadius(radius);
    }
    if (
        !prevProps.position.every(
            (v, i) => Math.abs(v - position[i]) < Number.EPSILON,
        )
    ) {
        layer.setLatLng(position);
    }
}
