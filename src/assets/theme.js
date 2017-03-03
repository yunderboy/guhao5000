/**
 * Created by younderboy on 01-03-2017.
 */
//TODO: Customize to fit the DTU design guidelines
const primary = {
    paperWhite: '#fcfcfc',
    cardboardGrey: '#eff0f1',
    iconGrey: '#4d4d4d',
    charcoalGrey: '#31363b',
    shareBlack: '#232629',
    plasmaBlue: '#3daee9'
};

const secondary = {
    iconRed: '#da4453',
    dangerRed: '#ed1515',
    iconOrange: '#f47750',
    bewareOrange: '#f67400',
    iconYellow: '#fdbc4b',
    sunbeamYellow: '#c9ce3b',
    mellowTurquoise: '#1cdc9a',
    iconGreen: '#2ecc71',
    verdantGreen: '#11d116',
    iconBlue: '#1d99f3'
};

const palette = {
    primary,
    secondary
};

export {
    palette
}

export default {
    fontFamily: 'Oxygen, sans-serif',
    palette: {
        textColor: primary.charcoalGrey,
    },

    appBar: {
        backgroundColor: primary.plasmaBlue,
    },
    bottomNavigation: {
        selectedColor: primary.plasmaBlue,
    }
};
