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
import type { GenericError } from './GenericError';
import {
    GenericErrorFromJSON,
    GenericErrorFromJSONTyped,
    GenericErrorToJSON,
} from './GenericError';

/**
 * Is sent when a flow is replaced by a different flow of the same class
 * @export
 * @interface ErrorFlowReplaced
 */
export interface ErrorFlowReplaced {
    /**
     * 
     * @type {GenericError}
     * @memberof ErrorFlowReplaced
     */
    error?: GenericError;
    /**
     * The flow ID that should be used for the new flow as it contains the correct messages.
     * @type {string}
     * @memberof ErrorFlowReplaced
     */
    use_flow_id?: string;
}

/**
 * Check if a given object implements the ErrorFlowReplaced interface.
 */
export function instanceOfErrorFlowReplaced(value: object): value is ErrorFlowReplaced {
    return true;
}

export function ErrorFlowReplacedFromJSON(json: any): ErrorFlowReplaced {
    return ErrorFlowReplacedFromJSONTyped(json, false);
}

export function ErrorFlowReplacedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorFlowReplaced {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : GenericErrorFromJSON(json['error']),
        'use_flow_id': json['use_flow_id'] == null ? undefined : json['use_flow_id'],
    };
}

export function ErrorFlowReplacedToJSON(value?: ErrorFlowReplaced | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': GenericErrorToJSON(value['error']),
        'use_flow_id': value['use_flow_id'],
    };
}

