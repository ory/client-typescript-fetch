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
 * Get Project Branding Request Body
 * @export
 * @interface InternalGetProjectBrandingBody
 */
export interface InternalGetProjectBrandingBody {
    /**
     * 
     * @type {string}
     * @memberof InternalGetProjectBrandingBody
     */
    hostname?: string;
}

/**
 * Check if a given object implements the InternalGetProjectBrandingBody interface.
 */
export function instanceOfInternalGetProjectBrandingBody(value: object): value is InternalGetProjectBrandingBody {
    return true;
}

export function InternalGetProjectBrandingBodyFromJSON(json: any): InternalGetProjectBrandingBody {
    return InternalGetProjectBrandingBodyFromJSONTyped(json, false);
}

export function InternalGetProjectBrandingBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalGetProjectBrandingBody {
    if (json == null) {
        return json;
    }
    return {
        
        'hostname': json['hostname'] == null ? undefined : json['hostname'],
    };
}

export function InternalGetProjectBrandingBodyToJSON(value?: InternalGetProjectBrandingBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'hostname': value['hostname'],
    };
}

