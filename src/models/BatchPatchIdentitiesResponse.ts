/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IdentityPatchResponse } from './IdentityPatchResponse';
import {
    IdentityPatchResponseFromJSON,
    IdentityPatchResponseFromJSONTyped,
    IdentityPatchResponseToJSON,
} from './IdentityPatchResponse';

/**
 * Patch identities response
 * @export
 * @interface BatchPatchIdentitiesResponse
 */
export interface BatchPatchIdentitiesResponse {
    /**
     * The patch responses for the individual identities.
     * @type {Array<IdentityPatchResponse>}
     * @memberof BatchPatchIdentitiesResponse
     */
    identities?: Array<IdentityPatchResponse>;
}

/**
 * Check if a given object implements the BatchPatchIdentitiesResponse interface.
 */
export function instanceOfBatchPatchIdentitiesResponse(value: object): value is BatchPatchIdentitiesResponse {
    return true;
}

export function BatchPatchIdentitiesResponseFromJSON(json: any): BatchPatchIdentitiesResponse {
    return BatchPatchIdentitiesResponseFromJSONTyped(json, false);
}

export function BatchPatchIdentitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchPatchIdentitiesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'identities': json['identities'] == null ? undefined : ((json['identities'] as Array<any>).map(IdentityPatchResponseFromJSON)),
    };
}

export function BatchPatchIdentitiesResponseToJSON(value?: BatchPatchIdentitiesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'identities': value['identities'] == null ? undefined : ((value['identities'] as Array<any>).map(IdentityPatchResponseToJSON)),
    };
}

