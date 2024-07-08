/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Set active project in the Ory Network Console Request Body
 * @export
 * @interface SetActiveProjectInConsoleBody
 */
export interface SetActiveProjectInConsoleBody {
    /**
     * Project ID
     * 
     * The Project ID you want to set active.
     * 
     * format: uuid
     * @type {string}
     * @memberof SetActiveProjectInConsoleBody
     */
    project_id: string;
}

/**
 * Check if a given object implements the SetActiveProjectInConsoleBody interface.
 */
export function instanceOfSetActiveProjectInConsoleBody(value: object): value is SetActiveProjectInConsoleBody {
    if (!('project_id' in value) || value['project_id'] === undefined) return false;
    return true;
}

export function SetActiveProjectInConsoleBodyFromJSON(json: any): SetActiveProjectInConsoleBody {
    return SetActiveProjectInConsoleBodyFromJSONTyped(json, false);
}

export function SetActiveProjectInConsoleBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetActiveProjectInConsoleBody {
    if (json == null) {
        return json;
    }
    return {
        
        'project_id': json['project_id'],
    };
}

export function SetActiveProjectInConsoleBodyToJSON(value?: SetActiveProjectInConsoleBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'project_id': value['project_id'],
    };
}

