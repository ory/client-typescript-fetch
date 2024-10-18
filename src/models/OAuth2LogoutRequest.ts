/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { OAuth2Client } from './OAuth2Client';
import {
    OAuth2ClientFromJSON,
    OAuth2ClientFromJSONTyped,
    OAuth2ClientToJSON,
} from './OAuth2Client';

/**
 * 
 * @export
 * @interface OAuth2LogoutRequest
 */
export interface OAuth2LogoutRequest {
    /**
     * Challenge is the identifier ("logout challenge") of the logout authentication request. It is used to
     * identify the session.
     * @type {string}
     * @memberof OAuth2LogoutRequest
     */
    challenge?: string;
    /**
     * 
     * @type {OAuth2Client}
     * @memberof OAuth2LogoutRequest
     */
    client?: OAuth2Client;
    /**
     * RequestURL is the original Logout URL requested.
     * @type {string}
     * @memberof OAuth2LogoutRequest
     */
    request_url?: string;
    /**
     * RPInitiated is set to true if the request was initiated by a Relying Party (RP), also known as an OAuth 2.0 Client.
     * @type {boolean}
     * @memberof OAuth2LogoutRequest
     */
    rp_initiated?: boolean;
    /**
     * SessionID is the login session ID that was requested to log out.
     * @type {string}
     * @memberof OAuth2LogoutRequest
     */
    sid?: string;
    /**
     * Subject is the user for whom the logout was request.
     * @type {string}
     * @memberof OAuth2LogoutRequest
     */
    subject?: string;
}

/**
 * Check if a given object implements the OAuth2LogoutRequest interface.
 */
export function instanceOfOAuth2LogoutRequest(value: object): value is OAuth2LogoutRequest {
    return true;
}

export function OAuth2LogoutRequestFromJSON(json: any): OAuth2LogoutRequest {
    return OAuth2LogoutRequestFromJSONTyped(json, false);
}

export function OAuth2LogoutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2LogoutRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'challenge': json['challenge'] == null ? undefined : json['challenge'],
        'client': json['client'] == null ? undefined : OAuth2ClientFromJSON(json['client']),
        'request_url': json['request_url'] == null ? undefined : json['request_url'],
        'rp_initiated': json['rp_initiated'] == null ? undefined : json['rp_initiated'],
        'sid': json['sid'] == null ? undefined : json['sid'],
        'subject': json['subject'] == null ? undefined : json['subject'],
    };
}

export function OAuth2LogoutRequestToJSON(value?: OAuth2LogoutRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'challenge': value['challenge'],
        'client': OAuth2ClientToJSON(value['client']),
        'request_url': value['request_url'],
        'rp_initiated': value['rp_initiated'],
        'sid': value['sid'],
        'subject': value['subject'],
    };
}

