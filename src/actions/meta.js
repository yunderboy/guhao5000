/**
 * Created by younderboy on 27-02-2017.
 */
export function deviceReady(deviceReady) {
    return {
        type: "DEVICE_READY",
        payload: deviceReady
    }
}

export function initialBoot(initialBoot) {
    return {
        type: "INITIAL_BOOT",
        payload: initialBoot
    }
}

export function productsPersisted(productsPersisted) {
    return {
        type: "PRODUCTS_PERSISTED",
        payload: productsPersisted
    }
}