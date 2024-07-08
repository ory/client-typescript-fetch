/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.10
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
 * @interface ErrorAuthenticatorAssuranceLevelNotSatisfied
 */
export interface ErrorAuthenticatorAssuranceLevelNotSatisfied {
    /**
     * 
     * @type {GenericError}
     * @memberof ErrorAuthenticatorAssuranceLevelNotSatisfied
     */
    error?: GenericError;
    /**
     * Points to where to redirect the user to next.
     * @type {string}
     * @memberof ErrorAuthenticatorAssuranceLevelNotSatisfied
     */
    redirect_browser_to?: string;
}

/**
 * Check if a given object implements the ErrorAuthenticatorAssuranceLevelNotSatisfied interface.
 */
export function instanceOfErrorAuthenticatorAssuranceLevelNotSatisfied(value: object): value is ErrorAuthenticatorAssuranceLevelNotSatisfied {
    return true;
}

export function ErrorAuthenticatorAssuranceLevelNotSatisfiedFromJSON(json: any): ErrorAuthenticatorAssuranceLevelNotSatisfied {
    return ErrorAuthenticatorAssuranceLevelNotSatisfiedFromJSONTyped(json, false);
}

export function ErrorAuthenticatorAssuranceLevelNotSatisfiedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorAuthenticatorAssuranceLevelNotSatisfied {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : GenericErrorFromJSON(json['error']),
        'redirect_browser_to': json['redirect_browser_to'] == null ? undefined : json['redirect_browser_to'],
    };
}

export function ErrorAuthenticatorAssuranceLevelNotSatisfiedToJSON(value?: ErrorAuthenticatorAssuranceLevelNotSatisfied | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': GenericErrorToJSON(value['error']),
        'redirect_browser_to': value['redirect_browser_to'],
    };
}

