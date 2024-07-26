/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.3
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
 * @interface SourcePosition
 */
export interface SourcePosition {
    /**
     * 
     * @type {number}
     * @memberof SourcePosition
     */
    Line?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcePosition
     */
    column?: number;
}

/**
 * Check if a given object implements the SourcePosition interface.
 */
export function instanceOfSourcePosition(value: object): value is SourcePosition {
    return true;
}

export function SourcePositionFromJSON(json: any): SourcePosition {
    return SourcePositionFromJSONTyped(json, false);
}

export function SourcePositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourcePosition {
    if (json == null) {
        return json;
    }
    return {
        
        'Line': json['Line'] == null ? undefined : json['Line'],
        'column': json['column'] == null ? undefined : json['column'],
    };
}

export function SourcePositionToJSON(value?: SourcePosition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Line': value['Line'],
        'column': value['column'],
    };
}

