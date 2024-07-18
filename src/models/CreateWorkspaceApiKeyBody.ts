/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.2
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
 * @interface CreateWorkspaceApiKeyBody
 */
export interface CreateWorkspaceApiKeyBody {
    /**
     * The API Key Name
     * 
     * A descriptive name for the API key.
     * @type {string}
     * @memberof CreateWorkspaceApiKeyBody
     */
    name: string;
}

/**
 * Check if a given object implements the CreateWorkspaceApiKeyBody interface.
 */
export function instanceOfCreateWorkspaceApiKeyBody(value: object): value is CreateWorkspaceApiKeyBody {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateWorkspaceApiKeyBodyFromJSON(json: any): CreateWorkspaceApiKeyBody {
    return CreateWorkspaceApiKeyBodyFromJSONTyped(json, false);
}

export function CreateWorkspaceApiKeyBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWorkspaceApiKeyBody {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function CreateWorkspaceApiKeyBodyToJSON(value?: CreateWorkspaceApiKeyBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

