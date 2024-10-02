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
import type { IdentityPatch } from './IdentityPatch';
import {
    IdentityPatchFromJSON,
    IdentityPatchFromJSONTyped,
    IdentityPatchToJSON,
} from './IdentityPatch';

/**
 * Patch Identities Body
 * @export
 * @interface PatchIdentitiesBody
 */
export interface PatchIdentitiesBody {
    /**
     * Identities holds the list of patches to apply
     * 
     * required
     * @type {Array<IdentityPatch>}
     * @memberof PatchIdentitiesBody
     */
    identities?: Array<IdentityPatch>;
}

/**
 * Check if a given object implements the PatchIdentitiesBody interface.
 */
export function instanceOfPatchIdentitiesBody(value: object): value is PatchIdentitiesBody {
    return true;
}

export function PatchIdentitiesBodyFromJSON(json: any): PatchIdentitiesBody {
    return PatchIdentitiesBodyFromJSONTyped(json, false);
}

export function PatchIdentitiesBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchIdentitiesBody {
    if (json == null) {
        return json;
    }
    return {
        
        'identities': json['identities'] == null ? undefined : ((json['identities'] as Array<any>).map(IdentityPatchFromJSON)),
    };
}

export function PatchIdentitiesBodyToJSON(value?: PatchIdentitiesBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'identities': value['identities'] == null ? undefined : ((value['identities'] as Array<any>).map(IdentityPatchToJSON)),
    };
}

