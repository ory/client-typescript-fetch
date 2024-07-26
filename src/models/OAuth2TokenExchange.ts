/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * OAuth2 Token Exchange Result
 * @export
 * @interface OAuth2TokenExchange
 */
export interface OAuth2TokenExchange {
    /**
     * The access token issued by the authorization server.
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    access_token?: string;
    /**
     * The lifetime in seconds of the access token. For
     * example, the value "3600" denotes that the access token will
     * expire in one hour from the time the response was generated.
     * @type {number}
     * @memberof OAuth2TokenExchange
     */
    expires_in?: number;
    /**
     * To retrieve a refresh token request the id_token scope.
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    id_token?: string;
    /**
     * The refresh token, which can be used to obtain new
     * access tokens. To retrieve it add the scope "offline" to your access token request.
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    refresh_token?: string;
    /**
     * The scope of the access token
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    scope?: string;
    /**
     * The type of the token issued
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    token_type?: string;
}

/**
 * Check if a given object implements the OAuth2TokenExchange interface.
 */
export function instanceOfOAuth2TokenExchange(value: object): value is OAuth2TokenExchange {
    return true;
}

export function OAuth2TokenExchangeFromJSON(json: any): OAuth2TokenExchange {
    return OAuth2TokenExchangeFromJSONTyped(json, false);
}

export function OAuth2TokenExchangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2TokenExchange {
    if (json == null) {
        return json;
    }
    return {
        
        'access_token': json['access_token'] == null ? undefined : json['access_token'],
        'expires_in': json['expires_in'] == null ? undefined : json['expires_in'],
        'id_token': json['id_token'] == null ? undefined : json['id_token'],
        'refresh_token': json['refresh_token'] == null ? undefined : json['refresh_token'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'token_type': json['token_type'] == null ? undefined : json['token_type'],
    };
}

export function OAuth2TokenExchangeToJSON(value?: OAuth2TokenExchange | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'access_token': value['access_token'],
        'expires_in': value['expires_in'],
        'id_token': value['id_token'],
        'refresh_token': value['refresh_token'],
        'scope': value['scope'],
        'token_type': value['token_type'],
    };
}

