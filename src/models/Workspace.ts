/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.1
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
 * @interface Workspace
 */
export interface Workspace {
    /**
     * 
     * @type {Date}
     * @memberof Workspace
     */
    created_at: Date;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    subscription_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    subscription_plan?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Workspace
     */
    updated_at: Date;
}

/**
 * Check if a given object implements the Workspace interface.
 */
export function instanceOfWorkspace(value: object): value is Workspace {
    if (!('created_at' in value) || value['created_at'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('updated_at' in value) || value['updated_at'] === undefined) return false;
    return true;
}

export function WorkspaceFromJSON(json: any): Workspace {
    return WorkspaceFromJSONTyped(json, false);
}

export function WorkspaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Workspace {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'subscription_id': json['subscription_id'] == null ? undefined : json['subscription_id'],
        'subscription_plan': json['subscription_plan'] == null ? undefined : json['subscription_plan'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function WorkspaceToJSON(value?: Workspace | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['created_at']).toISOString()),
        'id': value['id'],
        'name': value['name'],
        'subscription_id': value['subscription_id'],
        'subscription_plan': value['subscription_plan'],
        'updated_at': ((value['updated_at']).toISOString()),
    };
}

