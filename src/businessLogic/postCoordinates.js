/**
 * Created by younderboy on 4/6/17.
 */
import axios from 'axios';

const rootUrl = 'http://127.0.0.1:5000';

export function postCoordinates(x, y, z) {
    axios.post(rootUrl+'/coordinates', {
        x: 38,
        y: 424,
        z: 32
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

