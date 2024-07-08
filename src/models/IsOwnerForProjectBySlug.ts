/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.4
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
 * @interface IsOwnerForProjectBySlug
 */
export interface IsOwnerForProjectBySlug {
    /**
     * ProjectSlug is the project's slug.
     * @type {string}
     * @memberof IsOwnerForProjectBySlug
     */
    ProjectSlug: string;
    /**
     * Subject is the subject from the API Token.
     * @type {string}
     * @memberof IsOwnerForProjectBySlug
     */
    Subject: string;
}

/**
 * Check if a given object implements the IsOwnerForProjectBySlug interface.
 */
export function instanceOfIsOwnerForProjectBySlug(value: object): value is IsOwnerForProjectBySlug {
    if (!('ProjectSlug' in value) || value['ProjectSlug'] === undefined) return false;
    if (!('Subject' in value) || value['Subject'] === undefined) return false;
    return true;
}

export function IsOwnerForProjectBySlugFromJSON(json: any): IsOwnerForProjectBySlug {
    return IsOwnerForProjectBySlugFromJSONTyped(json, false);
}

export function IsOwnerForProjectBySlugFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsOwnerForProjectBySlug {
    if (json == null) {
        return json;
    }
    return {
        
        'ProjectSlug': json['ProjectSlug'],
        'Subject': json['Subject'],
    };
}

export function IsOwnerForProjectBySlugToJSON(value?: IsOwnerForProjectBySlug | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ProjectSlug': value['ProjectSlug'],
        'Subject': value['Subject'],
    };
}

