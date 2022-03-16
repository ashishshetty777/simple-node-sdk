import axios from 'axios';
import { baseUrl } from '../constants';
import {validateApiKeys} from '../util/validators';
import { handleError } from '../util/errorResponse';

export default function consoleAuthorsName(apiKey, secretApiKey) {
    validateApiKeys(apiKey, secretApiKey);

    const endpoint = `${baseUrl}/data/consoleAuthorsName`;

    return new Promise((resolve, reject) => {
        resolve({
            data: "Author's name is Ashish"
        })
    });


    // return new Promise((resolve, reject) => {
    //     axios.get(
    //         endpoint,
    //         {
    //             withCredentials: true,
    //             headers: {
    //                 'api_key': apiKey,
    //                 'secret_api_key': secretApiKey
    //             }
    //         }).then(function (result) {
    //         if (result.status !== 200) {
    //             reject(new Error(`unknown server response while authenticating: ${result}`));
    //         }
    //         resolve({
    //             authenticated: true
    //         });
    //     }).catch(function (error) {
    //         const formattedError = handleError(error);
    //         reject(formattedError);
    //     });
    // });
};
