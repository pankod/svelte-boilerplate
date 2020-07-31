//#region Global Imports
require('es6-promise').polyfill();
require('isomorphic-fetch');

import { stringify } from 'query-string';
//#endregion Global Imports

import type { HttpModel } from './Http';

const BaseUrl = `${process.env.API_URL}/api`;

export const Http = {
    Request: async (
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload,
    ) => {
        return new Promise((resolve, reject) => {
            const query = params ? `?${stringify(params)}` : '';

            fetch(`${BaseUrl}${url}${query}`, {
                body: JSON.stringify(payload),
                cache: 'no-cache',
                headers: {
                    'content-type': 'application/json',
                },
                method: `${methodType}`,
            })
                .then(async response => {
                    if (response.status === 200) {
                        return response.json().then(resolve);
                    } else {
                        return reject(response);
                    }
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
};
