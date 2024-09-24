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
import type { GenericError } from './GenericError';
import {
    GenericErrorFromJSON,
    GenericErrorFromJSONTyped,
    GenericErrorToJSON,
} from './GenericError';

/**
 * 
 * @export
 * @interface NeedsPrivilegedSessionError
 */
export interface NeedsPrivilegedSessionError {
    /**
     * 
     * @type {GenericError}
     * @memberof NeedsPrivilegedSessionError
     */
    error?: GenericError;
    /**
     * Points to where to redirect the user to next.
     * @type {string}
     * @memberof NeedsPrivilegedSessionError
     */
    redirect_browser_to: string;
}

/**
 * Check if a given object implements the NeedsPrivilegedSessionError interface.
 */
export function instanceOfNeedsPrivilegedSessionError(value: object): value is NeedsPrivilegedSessionError {
    if (!('redirect_browser_to' in value) || value['redirect_browser_to'] === undefined) return false;
    return true;
}

export function NeedsPrivilegedSessionErrorFromJSON(json: any): NeedsPrivilegedSessionError {
    return NeedsPrivilegedSessionErrorFromJSONTyped(json, false);
}

export function NeedsPrivilegedSessionErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): NeedsPrivilegedSessionError {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : GenericErrorFromJSON(json['error']),
        'redirect_browser_to': json['redirect_browser_to'],
    };
}

export function NeedsPrivilegedSessionErrorToJSON(value?: NeedsPrivilegedSessionError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': GenericErrorToJSON(value['error']),
        'redirect_browser_to': value['redirect_browser_to'],
    };
}

