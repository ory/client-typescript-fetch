/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * An Identity JSON Schema Container
 * @export
 * @interface IdentitySchemaContainer
 */
export interface IdentitySchemaContainer {
    /**
     * The ID of the Identity JSON Schema
     * @type {string}
     * @memberof IdentitySchemaContainer
     */
    id?: string;
    /**
     * The actual Identity JSON Schema
     * @type {object}
     * @memberof IdentitySchemaContainer
     */
    schema?: object;
}

/**
 * Check if a given object implements the IdentitySchemaContainer interface.
 */
export function instanceOfIdentitySchemaContainer(value: object): value is IdentitySchemaContainer {
    return true;
}

export function IdentitySchemaContainerFromJSON(json: any): IdentitySchemaContainer {
    return IdentitySchemaContainerFromJSONTyped(json, false);
}

export function IdentitySchemaContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySchemaContainer {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'schema': json['schema'] == null ? undefined : json['schema'],
    };
}

export function IdentitySchemaContainerToJSON(value?: IdentitySchemaContainer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'schema': value['schema'],
    };
}

