/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.0
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
 * @interface CreateWorkspaceSubscriptionBody
 */
export interface CreateWorkspaceSubscriptionBody {
    /**
     * 
     * usd USD
     * eur Euro
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    currency?: CreateWorkspaceSubscriptionBodyCurrencyEnum;
    /**
     * 
     * monthly Monthly
     * yearly Yearly
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    interval: CreateWorkspaceSubscriptionBodyIntervalEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    plan: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    return_to?: string;
}


/**
 * @export
 */
export const CreateWorkspaceSubscriptionBodyCurrencyEnum = {
    Usd: 'usd',
    Eur: 'eur'
} as const;
export type CreateWorkspaceSubscriptionBodyCurrencyEnum = typeof CreateWorkspaceSubscriptionBodyCurrencyEnum[keyof typeof CreateWorkspaceSubscriptionBodyCurrencyEnum];

/**
 * @export
 */
export const CreateWorkspaceSubscriptionBodyIntervalEnum = {
    Monthly: 'monthly',
    Yearly: 'yearly'
} as const;
export type CreateWorkspaceSubscriptionBodyIntervalEnum = typeof CreateWorkspaceSubscriptionBodyIntervalEnum[keyof typeof CreateWorkspaceSubscriptionBodyIntervalEnum];


/**
 * Check if a given object implements the CreateWorkspaceSubscriptionBody interface.
 */
export function instanceOfCreateWorkspaceSubscriptionBody(value: object): value is CreateWorkspaceSubscriptionBody {
    if (!('interval' in value) || value['interval'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    return true;
}

export function CreateWorkspaceSubscriptionBodyFromJSON(json: any): CreateWorkspaceSubscriptionBody {
    return CreateWorkspaceSubscriptionBodyFromJSONTyped(json, false);
}

export function CreateWorkspaceSubscriptionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWorkspaceSubscriptionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'] == null ? undefined : json['currency'],
        'interval': json['interval'],
        'plan': json['plan'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
    };
}

export function CreateWorkspaceSubscriptionBodyToJSON(value?: CreateWorkspaceSubscriptionBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currency': value['currency'],
        'interval': value['interval'],
        'plan': value['plan'],
        'return_to': value['return_to'],
    };
}

