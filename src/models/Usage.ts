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
import type { GenericUsage } from './GenericUsage';
import {
    GenericUsageFromJSON,
    GenericUsageFromJSONTyped,
    GenericUsageToJSON,
} from './GenericUsage';

/**
 * 
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     * 
     * @type {GenericUsage}
     * @memberof Usage
     */
    GenericUsage?: GenericUsage;
}

/**
 * Check if a given object implements the Usage interface.
 */
export function instanceOfUsage(value: object): value is Usage {
    return true;
}

export function UsageFromJSON(json: any): Usage {
    return UsageFromJSONTyped(json, false);
}

export function UsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Usage {
    if (json == null) {
        return json;
    }
    return {
        
        'GenericUsage': json['GenericUsage'] == null ? undefined : GenericUsageFromJSON(json['GenericUsage']),
    };
}

export function UsageToJSON(value?: Usage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'GenericUsage': GenericUsageToJSON(value['GenericUsage']),
    };
}

