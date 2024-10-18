/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Create Recovery Link for Identity Request Body
 * @export
 * @interface CreateRecoveryLinkForIdentityBody
 */
export interface CreateRecoveryLinkForIdentityBody {
    /**
     * Link Expires In
     * 
     * The recovery link will expire after that amount of time has passed. Defaults to the configuration value of
     * `selfservice.methods.code.config.lifespan`.
     * @type {string}
     * @memberof CreateRecoveryLinkForIdentityBody
     */
    expires_in?: string;
    /**
     * Identity to Recover
     * 
     * The identity's ID you wish to recover.
     * @type {string}
     * @memberof CreateRecoveryLinkForIdentityBody
     */
    identity_id: string;
}

/**
 * Check if a given object implements the CreateRecoveryLinkForIdentityBody interface.
 */
export function instanceOfCreateRecoveryLinkForIdentityBody(value: object): value is CreateRecoveryLinkForIdentityBody {
    if (!('identity_id' in value) || value['identity_id'] === undefined) return false;
    return true;
}

export function CreateRecoveryLinkForIdentityBodyFromJSON(json: any): CreateRecoveryLinkForIdentityBody {
    return CreateRecoveryLinkForIdentityBodyFromJSONTyped(json, false);
}

export function CreateRecoveryLinkForIdentityBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRecoveryLinkForIdentityBody {
    if (json == null) {
        return json;
    }
    return {
        
        'expires_in': json['expires_in'] == null ? undefined : json['expires_in'],
        'identity_id': json['identity_id'],
    };
}

export function CreateRecoveryLinkForIdentityBodyToJSON(value?: CreateRecoveryLinkForIdentityBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expires_in': value['expires_in'],
        'identity_id': value['identity_id'],
    };
}

