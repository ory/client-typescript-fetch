/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Response of the getMetricsEventTypes endpoint
 * @export
 * @interface GetMetricsEventTypesResponse
 */
export interface GetMetricsEventTypesResponse {
    /**
     * The list of data points.
     * @type {Array<string>}
     * @memberof GetMetricsEventTypesResponse
     */
    readonly events: Array<string>;
}

/**
 * Check if a given object implements the GetMetricsEventTypesResponse interface.
 */
export function instanceOfGetMetricsEventTypesResponse(value: object): value is GetMetricsEventTypesResponse {
    if (!('events' in value) || value['events'] === undefined) return false;
    return true;
}

export function GetMetricsEventTypesResponseFromJSON(json: any): GetMetricsEventTypesResponse {
    return GetMetricsEventTypesResponseFromJSONTyped(json, false);
}

export function GetMetricsEventTypesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMetricsEventTypesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'events': json['events'],
    };
}

export function GetMetricsEventTypesResponseToJSON(value?: Omit<GetMetricsEventTypesResponse, 'events'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

