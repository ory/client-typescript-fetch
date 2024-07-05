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
 * @interface SessionActivityDatapoint
 */
export interface SessionActivityDatapoint {
    /**
     * Country of the events
     * @type {string}
     * @memberof SessionActivityDatapoint
     */
    country: string;
    /**
     * Number of events that failed in the given timeframe
     * @type {number}
     * @memberof SessionActivityDatapoint
     */
    failed: number;
    /**
     * Number of events that succeeded in the given timeframe
     * @type {number}
     * @memberof SessionActivityDatapoint
     */
    succeeded: number;
}

/**
 * Check if a given object implements the SessionActivityDatapoint interface.
 */
export function instanceOfSessionActivityDatapoint(value: object): value is SessionActivityDatapoint {
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('failed' in value) || value['failed'] === undefined) return false;
    if (!('succeeded' in value) || value['succeeded'] === undefined) return false;
    return true;
}

export function SessionActivityDatapointFromJSON(json: any): SessionActivityDatapoint {
    return SessionActivityDatapointFromJSONTyped(json, false);
}

export function SessionActivityDatapointFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionActivityDatapoint {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'],
        'failed': json['failed'],
        'succeeded': json['succeeded'],
    };
}

export function SessionActivityDatapointToJSON(value?: SessionActivityDatapoint | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'country': value['country'],
        'failed': value['failed'],
        'succeeded': value['succeeded'],
    };
}

