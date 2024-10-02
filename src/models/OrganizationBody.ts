/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Create B2B SSO Organization Request Body
 * @export
 * @interface OrganizationBody
 */
export interface OrganizationBody {
    /**
     * Domains contains the list of organization's domains.
     * @type {Array<string>}
     * @memberof OrganizationBody
     */
    domains?: Array<string>;
    /**
     * Label contains the organization's label.
     * @type {string}
     * @memberof OrganizationBody
     */
    label?: string;
}

/**
 * Check if a given object implements the OrganizationBody interface.
 */
export function instanceOfOrganizationBody(value: object): value is OrganizationBody {
    return true;
}

export function OrganizationBodyFromJSON(json: any): OrganizationBody {
    return OrganizationBodyFromJSONTyped(json, false);
}

export function OrganizationBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationBody {
    if (json == null) {
        return json;
    }
    return {
        
        'domains': json['domains'] == null ? undefined : json['domains'],
        'label': json['label'] == null ? undefined : json['label'],
    };
}

export function OrganizationBodyToJSON(value?: OrganizationBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'domains': value['domains'],
        'label': value['label'],
    };
}

