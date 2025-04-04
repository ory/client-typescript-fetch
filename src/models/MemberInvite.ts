/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MemberInvite
 */
export interface MemberInvite {
    /**
     * The Project's Revision Creation Date
     * @type {Date}
     * @memberof MemberInvite
     */
    readonly created_at: Date;
    /**
     * The invite's ID.
     * @type {string}
     * @memberof MemberInvite
     */
    readonly id: string;
    /**
     * The invitee's email
     * @type {string}
     * @memberof MemberInvite
     */
    invitee_email: string;
    /**
     * 
     * @type {string}
     * @memberof MemberInvite
     */
    invitee_id?: string | null;
    /**
     * The invite owner's email
     * Usually the project's owner email
     * @type {string}
     * @memberof MemberInvite
     */
    owner_email: string;
    /**
     * The invite owner's ID
     * Usually the project's owner
     * @type {string}
     * @memberof MemberInvite
     */
    owner_id: string;
    /**
     * 
     * @type {string}
     * @memberof MemberInvite
     */
    project_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MemberInvite
     */
    role?: string | null;
    /**
     * The invite's status
     * Keeps track of the invites status such as pending, accepted, declined, expired
     * pending PENDING
     * accepted ACCEPTED
     * declined DECLINED
     * expired EXPIRED
     * cancelled CANCELLED
     * removed REMOVED
     * @type {string}
     * @memberof MemberInvite
     */
    status: MemberInviteStatusEnum;
    /**
     * Last Time Project's Revision was Updated
     * @type {Date}
     * @memberof MemberInvite
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {string}
     * @memberof MemberInvite
     */
    workspace_id?: string | null;
}


/**
 * @export
 */
export const MemberInviteStatusEnum = {
    Pending: 'pending',
    Accepted: 'accepted',
    Declined: 'declined',
    Expired: 'expired',
    Cancelled: 'cancelled',
    Removed: 'removed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MemberInviteStatusEnum = typeof MemberInviteStatusEnum[keyof typeof MemberInviteStatusEnum];


/**
 * Check if a given object implements the MemberInvite interface.
 */
export function instanceOfMemberInvite(value: object): value is MemberInvite {
    if (!('created_at' in value) || value['created_at'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('invitee_email' in value) || value['invitee_email'] === undefined) return false;
    if (!('owner_email' in value) || value['owner_email'] === undefined) return false;
    if (!('owner_id' in value) || value['owner_id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('updated_at' in value) || value['updated_at'] === undefined) return false;
    return true;
}

export function MemberInviteFromJSON(json: any): MemberInvite {
    return MemberInviteFromJSONTyped(json, false);
}

export function MemberInviteFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberInvite {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'invitee_email': json['invitee_email'],
        'invitee_id': json['invitee_id'] == null ? undefined : json['invitee_id'],
        'owner_email': json['owner_email'],
        'owner_id': json['owner_id'],
        'project_id': json['project_id'] == null ? undefined : json['project_id'],
        'role': json['role'] == null ? undefined : json['role'],
        'status': json['status'],
        'updated_at': (new Date(json['updated_at'])),
        'workspace_id': json['workspace_id'] == null ? undefined : json['workspace_id'],
    };
}

export function MemberInviteToJSON(json: any): MemberInvite {
    return MemberInviteToJSONTyped(json, false);
}

export function MemberInviteToJSONTyped(value?: Omit<MemberInvite, 'created_at'|'id'|'updated_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'invitee_email': value['invitee_email'],
        'invitee_id': value['invitee_id'],
        'owner_email': value['owner_email'],
        'owner_id': value['owner_id'],
        'project_id': value['project_id'],
        'role': value['role'],
        'status': value['status'],
        'workspace_id': value['workspace_id'],
    };
}

