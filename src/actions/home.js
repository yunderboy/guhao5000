/**
 * Created by younderboy on 26-02-2017.
 */
export function setCoordinates(x, y, z, claw) {
    return {
        type: "SET_COORDINATES",
        payload: {
            x: x,
            y: y,
            z: z,
            claw: claw
        }
    }
}