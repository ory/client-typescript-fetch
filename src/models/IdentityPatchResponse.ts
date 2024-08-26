/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Response for a single identity patch
 * @export
 * @interface IdentityPatchResponse
 */
export interface IdentityPatchResponse {
    /**
     * The action for this specific patch
     * create ActionCreate  Create this identity.
     * @type {string}
     * @memberof IdentityPatchResponse
     */
    action?: IdentityPatchResponseActionEnum;
    /**
     * The identity ID payload of this patch
     * @type {string}
     * @memberof IdentityPatchResponse
     */
    identity?: string;
    /**
     * The ID of this patch response, if an ID was specified in the patch.
     * @type {string}
     * @memberof IdentityPatchResponse
     */
    patch_id?: string;
}


/**
 * @export
 */
export const IdentityPatchResponseActionEnum = {
    Create: 'create'
} as const;
export type IdentityPatchResponseActionEnum = typeof IdentityPatchResponseActionEnum[keyof typeof IdentityPatchResponseActionEnum];


/**
 * Check if a given object implements the IdentityPatchResponse interface.
 */
export function instanceOfIdentityPatchResponse(value: object): value is IdentityPatchResponse {
    return true;
}

export function IdentityPatchResponseFromJSON(json: any): IdentityPatchResponse {
    return IdentityPatchResponseFromJSONTyped(json, false);
}

export function IdentityPatchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityPatchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'identity': json['identity'] == null ? undefined : json['identity'],
        'patch_id': json['patch_id'] == null ? undefined : json['patch_id'],
    };
}

export function IdentityPatchResponseToJSON(value?: IdentityPatchResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'identity': value['identity'],
        'patch_id': value['patch_id'],
    };
}

