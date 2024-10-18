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
/**
 * 
 * @export
 * @interface CreateSubscriptionBody
 */
export interface CreateSubscriptionBody {
    /**
     * 
     * usd USD
     * eur Euro
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    currency?: CreateSubscriptionBodyCurrencyEnum;
    /**
     * 
     * monthly Monthly
     * yearly Yearly
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    interval: CreateSubscriptionBodyIntervalEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    plan: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    provision_first_project: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    return_to?: string;
}


/**
 * @export
 */
export const CreateSubscriptionBodyCurrencyEnum = {
    Usd: 'usd',
    Eur: 'eur'
} as const;
export type CreateSubscriptionBodyCurrencyEnum = typeof CreateSubscriptionBodyCurrencyEnum[keyof typeof CreateSubscriptionBodyCurrencyEnum];

/**
 * @export
 */
export const CreateSubscriptionBodyIntervalEnum = {
    Monthly: 'monthly',
    Yearly: 'yearly'
} as const;
export type CreateSubscriptionBodyIntervalEnum = typeof CreateSubscriptionBodyIntervalEnum[keyof typeof CreateSubscriptionBodyIntervalEnum];


/**
 * Check if a given object implements the CreateSubscriptionBody interface.
 */
export function instanceOfCreateSubscriptionBody(value: object): value is CreateSubscriptionBody {
    if (!('interval' in value) || value['interval'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    if (!('provision_first_project' in value) || value['provision_first_project'] === undefined) return false;
    return true;
}

export function CreateSubscriptionBodyFromJSON(json: any): CreateSubscriptionBody {
    return CreateSubscriptionBodyFromJSONTyped(json, false);
}

export function CreateSubscriptionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubscriptionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'] == null ? undefined : json['currency'],
        'interval': json['interval'],
        'plan': json['plan'],
        'provision_first_project': json['provision_first_project'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
    };
}

export function CreateSubscriptionBodyToJSON(value?: CreateSubscriptionBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currency': value['currency'],
        'interval': value['interval'],
        'plan': value['plan'],
        'provision_first_project': value['provision_first_project'],
        'return_to': value['return_to'],
    };
}

