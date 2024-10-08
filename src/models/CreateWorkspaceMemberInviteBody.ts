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
    invitee_email: string;
    /**
     * The role the user will have in the workspace
     * owner WorkspaceMemberRoleOwner
     * developer WorkspaceMemberRoleDeveloper
     * @type {string}
     * @memberof CreateWorkspaceMemberInviteBody
     */
    role: CreateWorkspaceMemberInviteBodyRoleEnum;
}


/**
 * @export
 */
export const CreateWorkspaceMemberInviteBodyRoleEnum = {
    Owner: 'owner',
    Developer: 'developer'
} as const;
export type CreateWorkspaceMemberInviteBodyRoleEnum = typeof CreateWorkspaceMemberInviteBodyRoleEnum[keyof typeof CreateWorkspaceMemberInviteBodyRoleEnum];


/**
 * Check if a given object implements the CreateWorkspaceMemberInviteBody interface.
 */
export function instanceOfCreateWorkspaceMemberInviteBody(value: object): value is CreateWorkspaceMemberInviteBody {
    if (!('invitee_email' in value) || value['invitee_email'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
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
        
        'invitee_email': json['invitee_email'],
        'role': json['role'],
    };
}

export function CreateWorkspaceMemberInviteBodyToJSON(value?: CreateWorkspaceMemberInviteBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'invitee_email': value['invitee_email'],
        'role': value['role'],
    };
}

