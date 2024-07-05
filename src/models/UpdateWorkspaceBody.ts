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
 * 
 * @export
 * @interface UpdateWorkspaceBody
 */
export interface UpdateWorkspaceBody {
    /**
     * The name of the workspace.
     * @type {string}
     * @memberof UpdateWorkspaceBody
     */
    name: string;
}

/**
 * Check if a given object implements the UpdateWorkspaceBody interface.
 */
export function instanceOfUpdateWorkspaceBody(value: object): value is UpdateWorkspaceBody {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function UpdateWorkspaceBodyFromJSON(json: any): UpdateWorkspaceBody {
    return UpdateWorkspaceBodyFromJSONTyped(json, false);
}

export function UpdateWorkspaceBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateWorkspaceBody {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function UpdateWorkspaceBodyToJSON(value?: UpdateWorkspaceBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

