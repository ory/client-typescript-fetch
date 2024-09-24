/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Represents a single datapoint/bucket of a time series
 * @export
 * @interface MetricsDatapoint
 */
export interface MetricsDatapoint {
    /**
     * The count of events that occured in this time
     * @type {number}
     * @memberof MetricsDatapoint
     */
    count: number;
    /**
     * The time of the bucket
     * @type {Date}
     * @memberof MetricsDatapoint
     */
    time: Date;
}

/**
 * Check if a given object implements the MetricsDatapoint interface.
 */
export function instanceOfMetricsDatapoint(value: object): value is MetricsDatapoint {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    return true;
}

export function MetricsDatapointFromJSON(json: any): MetricsDatapoint {
    return MetricsDatapointFromJSONTyped(json, false);
}

export function MetricsDatapointFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsDatapoint {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'time': (new Date(json['time'])),
    };
}

export function MetricsDatapointToJSON(value?: MetricsDatapoint | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'time': ((value['time']).toISOString()),
    };
}

