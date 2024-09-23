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
import type { GenericErrorContent } from './GenericErrorContent';
import {
    GenericErrorContentFromJSON,
    GenericErrorContentFromJSONTyped,
    GenericErrorContentToJSON,
} from './GenericErrorContent';

/**
 * The standard Ory JSON API error format.
 * @export
 * @interface ErrorGeneric
 */
export interface ErrorGeneric {
    /**
     * 
     * @type {GenericErrorContent}
     * @memberof ErrorGeneric
     */
    error: GenericErrorContent;
}

/**
 * Check if a given object implements the ErrorGeneric interface.
 */
export function instanceOfErrorGeneric(value: object): value is ErrorGeneric {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ErrorGenericFromJSON(json: any): ErrorGeneric {
    return ErrorGenericFromJSONTyped(json, false);
}

export function ErrorGenericFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorGeneric {
    if (json == null) {
        return json;
    }
    return {
        
        'error': GenericErrorContentFromJSON(json['error']),
    };
}

export function ErrorGenericToJSON(value?: ErrorGeneric | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': GenericErrorContentToJSON(value['error']),
    };
}

