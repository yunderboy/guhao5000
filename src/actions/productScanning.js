/**
 * Created by younderboy on 27-02-2017.
 */
export function setScannedProduct(scannedProduct) {
    return {
        type: 'SET_SCANNED_PRODUCT',
        payload: scannedProduct
    }
}

export function setScanStatus(status) {
    return {
        type: 'SET_SCAN_STATUS',
        payload: status
    }
}

export function toggleProductModal(open) {
    return {
        type: 'TOGGLE_PRODUCT_MODAL',
        payload: open
    }
}
