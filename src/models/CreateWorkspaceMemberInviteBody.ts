/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Create Workspace Invite Request Body
 * @export
 * @interface CreateWorkspaceMemberInviteBody
 */
export interface CreateWorkspaceMemberInviteBody {
    /**
     * A email to invite
     * @type {string}
     * @memberof CreateWorkspaceMemberInviteBody
     */
    invitee_email?: string;
}

/**
 * Check if a given object implements the CreateWorkspaceMemberInviteBody interface.
 */
export function instanceOfCreateWorkspaceMemberInviteBody(value: object): value is CreateWorkspaceMemberInviteBody {
    return true;
}

export function CreateWorkspaceMemberInviteBodyFromJSON(json: any): CreateWorkspaceMemberInviteBody {
    return CreateWorkspaceMemberInviteBodyFromJSONTyped(json, false);
}

export function CreateWorkspaceMemberInviteBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWorkspaceMemberInviteBody {
    if (json == null) {
        return json;
    }
    return {
        
        'invitee_email': json['invitee_email'] == null ? undefined : json['invitee_email'],
    };
}

export function CreateWorkspaceMemberInviteBodyToJSON(value?: CreateWorkspaceMemberInviteBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'invitee_email': value['invitee_email'],
    };
}

