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
 * @interface ProjectServiceIdentity
 */
export interface ProjectServiceIdentity {
    /**
     * 
     * @type {object}
     * @memberof ProjectServiceIdentity
     */
    config: object;
}

/**
 * Check if a given object implements the ProjectServiceIdentity interface.
 */
export function instanceOfProjectServiceIdentity(value: object): value is ProjectServiceIdentity {
    if (!('config' in value) || value['config'] === undefined) return false;
    return true;
}

export function ProjectServiceIdentityFromJSON(json: any): ProjectServiceIdentity {
    return ProjectServiceIdentityFromJSONTyped(json, false);
}

export function ProjectServiceIdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectServiceIdentity {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'],
    };
}

export function ProjectServiceIdentityToJSON(value?: ProjectServiceIdentity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'config': value['config'],
    };
}

