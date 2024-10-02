/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.5
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
 * @interface Money
 */
export interface Money {
    /**
     * 
     * @type {number}
     * @memberof Money
     */
    Cents?: number;
    /**
     * 
     * @type {string}
     * @memberof Money
     */
    String?: string;
    /**
     * 
     * @type {string}
     * @memberof Money
     */
    Unit?: string;
}

/**
 * Check if a given object implements the Money interface.
 */
export function instanceOfMoney(value: object): value is Money {
    return true;
}

export function MoneyFromJSON(json: any): Money {
    return MoneyFromJSONTyped(json, false);
}

export function MoneyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Money {
    if (json == null) {
        return json;
    }
    return {
        
        'Cents': json['Cents'] == null ? undefined : json['Cents'],
        'String': json['String'] == null ? undefined : json['String'],
        'Unit': json['Unit'] == null ? undefined : json['Unit'],
    };
}

export function MoneyToJSON(value?: Money | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Cents': value['Cents'],
        'String': value['String'],
        'Unit': value['Unit'],
    };
}

