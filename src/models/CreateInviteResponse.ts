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
import type { MemberInvite } from './MemberInvite';
import {
    MemberInviteFromJSON,
    MemberInviteFromJSONTyped,
    MemberInviteToJSON,
} from './MemberInvite';

/**
 * 
 * @export
 * @interface CreateInviteResponse
 */
export interface CreateInviteResponse {
    /**
     * A list of all invites for this resource
     * @type {Array<MemberInvite>}
     * @memberof CreateInviteResponse
     */
    all_invites: Array<MemberInvite>;
    /**
     * 
     * @type {MemberInvite}
     * @memberof CreateInviteResponse
     */
    created_invite: MemberInvite;
}

/**
 * Check if a given object implements the CreateInviteResponse interface.
 */
export function instanceOfCreateInviteResponse(value: object): value is CreateInviteResponse {
    if (!('all_invites' in value) || value['all_invites'] === undefined) return false;
    if (!('created_invite' in value) || value['created_invite'] === undefined) return false;
    return true;
}

export function CreateInviteResponseFromJSON(json: any): CreateInviteResponse {
    return CreateInviteResponseFromJSONTyped(json, false);
}

export function CreateInviteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInviteResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'all_invites': ((json['all_invites'] as Array<any>).map(MemberInviteFromJSON)),
        'created_invite': MemberInviteFromJSON(json['created_invite']),
    };
}

export function CreateInviteResponseToJSON(value?: CreateInviteResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'all_invites': ((value['all_invites'] as Array<any>).map(MemberInviteToJSON)),
        'created_invite': MemberInviteToJSON(value['created_invite']),
    };
}

