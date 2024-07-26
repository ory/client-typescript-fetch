/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { VerifiableCredentialProof } from './VerifiableCredentialProof';
import {
    VerifiableCredentialProofFromJSON,
    VerifiableCredentialProofFromJSONTyped,
    VerifiableCredentialProofToJSON,
} from './VerifiableCredentialProof';

/**
 * 
 * @export
 * @interface CreateVerifiableCredentialRequestBody
 */
export interface CreateVerifiableCredentialRequestBody {
    /**
     * 
     * @type {string}
     * @memberof CreateVerifiableCredentialRequestBody
     */
    format?: string;
    /**
     * 
     * @type {VerifiableCredentialProof}
     * @memberof CreateVerifiableCredentialRequestBody
     */
    proof?: VerifiableCredentialProof;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateVerifiableCredentialRequestBody
     */
    types?: Array<string>;
}

/**
 * Check if a given object implements the CreateVerifiableCredentialRequestBody interface.
 */
export function instanceOfCreateVerifiableCredentialRequestBody(value: object): value is CreateVerifiableCredentialRequestBody {
    return true;
}

export function CreateVerifiableCredentialRequestBodyFromJSON(json: any): CreateVerifiableCredentialRequestBody {
    return CreateVerifiableCredentialRequestBodyFromJSONTyped(json, false);
}

export function CreateVerifiableCredentialRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVerifiableCredentialRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'format': json['format'] == null ? undefined : json['format'],
        'proof': json['proof'] == null ? undefined : VerifiableCredentialProofFromJSON(json['proof']),
        'types': json['types'] == null ? undefined : json['types'],
    };
}

export function CreateVerifiableCredentialRequestBodyToJSON(value?: CreateVerifiableCredentialRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'format': value['format'],
        'proof': VerifiableCredentialProofToJSON(value['proof']),
        'types': value['types'],
    };
}

