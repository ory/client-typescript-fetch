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
 * Control API consistency guarantees
 * @export
 * @interface ConsistencyRequestParameters
 */
export interface ConsistencyRequestParameters {
    /**
     * Read Consistency Level (preview)
     * 
     * The read consistency level determines the consistency guarantee for reads:
     * 
     * strong (slow): The read is guaranteed to return the most recent data committed at the start of the read.
     * eventual (very fast): The result will return data that is about 4.8 seconds old.
     * 
     * The default consistency guarantee can be changed in the Ory Network Console or using the Ory CLI with
     * `ory patch project --replace '/previews/default_read_consistency_level="strong"'`.
     * 
     * Setting the default consistency level to `eventual` may cause regressions in the future as we add consistency
     * controls to more APIs. Currently, the following APIs will be affected by this setting:
     * 
     * `GET /admin/identities`
     * 
     * This feature is in preview and only available in Ory Network.
     *  ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level.
     * strong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level.
     * eventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.
     * @type {string}
     * @memberof ConsistencyRequestParameters
     */
    consistency?: ConsistencyRequestParametersConsistencyEnum;
}


/**
 * @export
 */
export const ConsistencyRequestParametersConsistencyEnum = {
    Empty: '',
    Strong: 'strong',
    Eventual: 'eventual'
} as const;
export type ConsistencyRequestParametersConsistencyEnum = typeof ConsistencyRequestParametersConsistencyEnum[keyof typeof ConsistencyRequestParametersConsistencyEnum];


/**
 * Check if a given object implements the ConsistencyRequestParameters interface.
 */
export function instanceOfConsistencyRequestParameters(value: object): value is ConsistencyRequestParameters {
    return true;
}

export function ConsistencyRequestParametersFromJSON(json: any): ConsistencyRequestParameters {
    return ConsistencyRequestParametersFromJSONTyped(json, false);
}

export function ConsistencyRequestParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsistencyRequestParameters {
    if (json == null) {
        return json;
    }
    return {
        
        'consistency': json['consistency'] == null ? undefined : json['consistency'],
    };
}

export function ConsistencyRequestParametersToJSON(value?: ConsistencyRequestParameters | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'consistency': value['consistency'],
    };
}

