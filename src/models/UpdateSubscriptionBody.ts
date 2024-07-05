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
 * @interface UpdateSubscriptionBody
 */
export interface UpdateSubscriptionBody {
    /**
     * 
     * monthly Monthly
     * yearly Yearly
     * @type {string}
     * @memberof UpdateSubscriptionBody
     */
    interval: UpdateSubscriptionBodyIntervalEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateSubscriptionBody
     */
    plan: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSubscriptionBody
     */
    return_to?: string;
}


/**
 * @export
 */
export const UpdateSubscriptionBodyIntervalEnum = {
    Monthly: 'monthly',
    Yearly: 'yearly'
} as const;
export type UpdateSubscriptionBodyIntervalEnum = typeof UpdateSubscriptionBodyIntervalEnum[keyof typeof UpdateSubscriptionBodyIntervalEnum];


/**
 * Check if a given object implements the UpdateSubscriptionBody interface.
 */
export function instanceOfUpdateSubscriptionBody(value: object): value is UpdateSubscriptionBody {
    if (!('interval' in value) || value['interval'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    return true;
}

export function UpdateSubscriptionBodyFromJSON(json: any): UpdateSubscriptionBody {
    return UpdateSubscriptionBodyFromJSONTyped(json, false);
}

export function UpdateSubscriptionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSubscriptionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'interval': json['interval'],
        'plan': json['plan'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
    };
}

export function UpdateSubscriptionBodyToJSON(value?: UpdateSubscriptionBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'interval': value['interval'],
        'plan': value['plan'],
        'return_to': value['return_to'],
    };
}

