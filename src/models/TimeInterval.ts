/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.3
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
 * @interface TimeInterval
 */
export interface TimeInterval {
    /**
     * The end of the time period.
     * @type {Date}
     * @memberof TimeInterval
     */
    end: Date;
    /**
     * The start of the time period.
     * @type {Date}
     * @memberof TimeInterval
     */
    start: Date;
}

/**
 * Check if a given object implements the TimeInterval interface.
 */
export function instanceOfTimeInterval(value: object): value is TimeInterval {
    if (!('end' in value) || value['end'] === undefined) return false;
    if (!('start' in value) || value['start'] === undefined) return false;
    return true;
}

export function TimeIntervalFromJSON(json: any): TimeInterval {
    return TimeIntervalFromJSONTyped(json, false);
}

export function TimeIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'end': (new Date(json['end'])),
        'start': (new Date(json['start'])),
    };
}

export function TimeIntervalToJSON(value?: TimeInterval | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'end': ((value['end']).toISOString()),
        'start': ((value['start']).toISOString()),
    };
}

