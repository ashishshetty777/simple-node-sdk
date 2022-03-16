import axios from 'axios';
import { baseUrl } from '../constants';
import {validateApiKeys} from '../util/validators';
import { handleError } from '../util/errorResponse';

export default function consoleMyName(apiKey, secretApiKey) {
    validateApiKeys(apiKey, secretApiKey);
    const endpoint = `${baseUrl}/data/consoleMyName`;

    return new Promise((resolve, reject) => {
        resolve({
            data: "I don't know what your name is :P"
        })
    });

};
