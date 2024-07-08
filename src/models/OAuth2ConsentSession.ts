/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { OAuth2ConsentRequest } from './OAuth2ConsentRequest';
import {
    OAuth2ConsentRequestFromJSON,
    OAuth2ConsentRequestFromJSONTyped,
    OAuth2ConsentRequestToJSON,
} from './OAuth2ConsentRequest';
import type { AcceptOAuth2ConsentRequestSession } from './AcceptOAuth2ConsentRequestSession';
import {
    AcceptOAuth2ConsentRequestSessionFromJSON,
    AcceptOAuth2ConsentRequestSessionFromJSONTyped,
    AcceptOAuth2ConsentRequestSessionToJSON,
} from './AcceptOAuth2ConsentRequestSession';
import type { OAuth2ConsentSessionExpiresAt } from './OAuth2ConsentSessionExpiresAt';
import {
    OAuth2ConsentSessionExpiresAtFromJSON,
    OAuth2ConsentSessionExpiresAtFromJSONTyped,
    OAuth2ConsentSessionExpiresAtToJSON,
} from './OAuth2ConsentSessionExpiresAt';

/**
 * A completed OAuth 2.0 Consent Session.
 * @export
 * @interface OAuth2ConsentSession
 */
export interface OAuth2ConsentSession {
    /**
     * 
     * @type {OAuth2ConsentRequest}
     * @memberof OAuth2ConsentSession
     */
    consent_request?: OAuth2ConsentRequest;
    /**
     * 
     * @type {object}
     * @memberof OAuth2ConsentSession
     */
    context?: object;
    /**
     * 
     * @type {OAuth2ConsentSessionExpiresAt}
     * @memberof OAuth2ConsentSession
     */
    expires_at?: OAuth2ConsentSessionExpiresAt;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuth2ConsentSession
     */
    grant_access_token_audience?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuth2ConsentSession
     */
    grant_scope?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof OAuth2ConsentSession
     */
    handled_at?: Date;
    /**
     * Remember Consent
     * 
     * Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same
     * client asks the same user for the same, or a subset of, scope.
     * @type {boolean}
     * @memberof OAuth2ConsentSession
     */
    remember?: boolean;
    /**
     * Remember Consent For
     * 
     * RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the
     * authorization will be remembered indefinitely.
     * @type {number}
     * @memberof OAuth2ConsentSession
     */
    remember_for?: number;
    /**
     * 
     * @type {AcceptOAuth2ConsentRequestSession}
     * @memberof OAuth2ConsentSession
     */
    session?: AcceptOAuth2ConsentRequestSession;
}

/**
 * Check if a given object implements the OAuth2ConsentSession interface.
 */
export function instanceOfOAuth2ConsentSession(value: object): value is OAuth2ConsentSession {
    return true;
}

export function OAuth2ConsentSessionFromJSON(json: any): OAuth2ConsentSession {
    return OAuth2ConsentSessionFromJSONTyped(json, false);
}

export function OAuth2ConsentSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2ConsentSession {
    if (json == null) {
        return json;
    }
    return {
        
        'consent_request': json['consent_request'] == null ? undefined : OAuth2ConsentRequestFromJSON(json['consent_request']),
        'context': json['context'] == null ? undefined : json['context'],
        'expires_at': json['expires_at'] == null ? undefined : OAuth2ConsentSessionExpiresAtFromJSON(json['expires_at']),
        'grant_access_token_audience': json['grant_access_token_audience'] == null ? undefined : json['grant_access_token_audience'],
        'grant_scope': json['grant_scope'] == null ? undefined : json['grant_scope'],
        'handled_at': json['handled_at'] == null ? undefined : (new Date(json['handled_at'])),
        'remember': json['remember'] == null ? undefined : json['remember'],
        'remember_for': json['remember_for'] == null ? undefined : json['remember_for'],
        'session': json['session'] == null ? undefined : AcceptOAuth2ConsentRequestSessionFromJSON(json['session']),
    };
}

export function OAuth2ConsentSessionToJSON(value?: OAuth2ConsentSession | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'consent_request': OAuth2ConsentRequestToJSON(value['consent_request']),
        'context': value['context'],
        'expires_at': OAuth2ConsentSessionExpiresAtToJSON(value['expires_at']),
        'grant_access_token_audience': value['grant_access_token_audience'],
        'grant_scope': value['grant_scope'],
        'handled_at': value['handled_at'] == null ? undefined : ((value['handled_at']).toISOString()),
        'remember': value['remember'],
        'remember_for': value['remember_for'],
        'session': AcceptOAuth2ConsentRequestSessionToJSON(value['session']),
    };
}
