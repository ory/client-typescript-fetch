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
 * @interface ProjectServicePermission
 */
export interface ProjectServicePermission {
    /**
     * 
     * @type {object}
     * @memberof ProjectServicePermission
     */
    config: object;
}

/**
 * Check if a given object implements the ProjectServicePermission interface.
 */
export function instanceOfProjectServicePermission(value: object): value is ProjectServicePermission {
    if (!('config' in value) || value['config'] === undefined) return false;
    return true;
}

export function ProjectServicePermissionFromJSON(json: any): ProjectServicePermission {
    return ProjectServicePermissionFromJSONTyped(json, false);
}

export function ProjectServicePermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectServicePermission {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'],
    };
}

export function ProjectServicePermissionToJSON(value?: ProjectServicePermission | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'config': value['config'],
    };
}

