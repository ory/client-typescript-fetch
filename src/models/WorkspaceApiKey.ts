/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.10
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
 * @interface WorkspaceApiKey
 */
export interface WorkspaceApiKey {
    /**
     * The API key's creation date
     * @type {Date}
     * @memberof WorkspaceApiKey
     */
    readonly created_at?: Date;
    /**
     * The key's ID.
     * @type {string}
     * @memberof WorkspaceApiKey
     */
    readonly id: string;
    /**
     * The API key's Name
     * 
     * Set this to help you remember, for example, where you use the API key.
     * @type {string}
     * @memberof WorkspaceApiKey
     */
    name: string;
    /**
     * The key's owner
     * @type {string}
     * @memberof WorkspaceApiKey
     */
    readonly owner_id: string;
    /**
     * The API key's last update date
     * @type {Date}
     * @memberof WorkspaceApiKey
     */
    readonly updated_at?: Date;
    /**
     * The key's value
     * @type {string}
     * @memberof WorkspaceApiKey
     */
    readonly value?: string;
    /**
     * The API token's workspace ID
     * @type {string}
     * @memberof WorkspaceApiKey
     */
    readonly workspace_id?: string;
}

/**
 * Check if a given object implements the WorkspaceApiKey interface.
 */
export function instanceOfWorkspaceApiKey(value: object): value is WorkspaceApiKey {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('owner_id' in value) || value['owner_id'] === undefined) return false;
    return true;
}

export function WorkspaceApiKeyFromJSON(json: any): WorkspaceApiKey {
    return WorkspaceApiKeyFromJSONTyped(json, false);
}

export function WorkspaceApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceApiKey {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'owner_id': json['owner_id'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'value': json['value'] == null ? undefined : json['value'],
        'workspace_id': json['workspace_id'] == null ? undefined : json['workspace_id'],
    };
}

export function WorkspaceApiKeyToJSON(value?: Omit<WorkspaceApiKey, 'created_at'|'id'|'owner_id'|'updated_at'|'value'|'workspace_id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

