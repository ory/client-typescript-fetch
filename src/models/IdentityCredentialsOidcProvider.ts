/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IdentityCredentialsOidcProvider
 */
export interface IdentityCredentialsOidcProvider {
    /**
     * 
     * @type {string}
     * @memberof IdentityCredentialsOidcProvider
     */
    initial_access_token?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityCredentialsOidcProvider
     */
    initial_id_token?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityCredentialsOidcProvider
     */
    initial_refresh_token?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityCredentialsOidcProvider
     */
    organization?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityCredentialsOidcProvider
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityCredentialsOidcProvider
     */
    subject?: string;
}

/**
 * Check if a given object implements the IdentityCredentialsOidcProvider interface.
 */
export function instanceOfIdentityCredentialsOidcProvider(value: object): value is IdentityCredentialsOidcProvider {
    return true;
}

export function IdentityCredentialsOidcProviderFromJSON(json: any): IdentityCredentialsOidcProvider {
    return IdentityCredentialsOidcProviderFromJSONTyped(json, false);
}

export function IdentityCredentialsOidcProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityCredentialsOidcProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'initial_access_token': json['initial_access_token'] == null ? undefined : json['initial_access_token'],
        'initial_id_token': json['initial_id_token'] == null ? undefined : json['initial_id_token'],
        'initial_refresh_token': json['initial_refresh_token'] == null ? undefined : json['initial_refresh_token'],
        'organization': json['organization'] == null ? undefined : json['organization'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'subject': json['subject'] == null ? undefined : json['subject'],
    };
}

export function IdentityCredentialsOidcProviderToJSON(value?: IdentityCredentialsOidcProvider | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'initial_access_token': value['initial_access_token'],
        'initial_id_token': value['initial_id_token'],
        'initial_refresh_token': value['initial_refresh_token'],
        'organization': value['organization'],
        'provider': value['provider'],
        'subject': value['subject'],
    };
}

