/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.10
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IdentityWithCredentialsPasswordConfig } from './IdentityWithCredentialsPasswordConfig';
import {
    IdentityWithCredentialsPasswordConfigFromJSON,
    IdentityWithCredentialsPasswordConfigFromJSONTyped,
    IdentityWithCredentialsPasswordConfigToJSON,
} from './IdentityWithCredentialsPasswordConfig';
import type { IdentityWithCredentialsOidcConfigProvider } from './IdentityWithCredentialsOidcConfigProvider';
import {
    IdentityWithCredentialsOidcConfigProviderFromJSON,
    IdentityWithCredentialsOidcConfigProviderFromJSONTyped,
    IdentityWithCredentialsOidcConfigProviderToJSON,
} from './IdentityWithCredentialsOidcConfigProvider';

/**
 * 
 * @export
 * @interface IdentityWithCredentialsOidcConfig
 */
export interface IdentityWithCredentialsOidcConfig {
    /**
     * 
     * @type {IdentityWithCredentialsPasswordConfig}
     * @memberof IdentityWithCredentialsOidcConfig
     */
    config?: IdentityWithCredentialsPasswordConfig;
    /**
     * A list of OpenID Connect Providers
     * @type {Array<IdentityWithCredentialsOidcConfigProvider>}
     * @memberof IdentityWithCredentialsOidcConfig
     */
    providers?: Array<IdentityWithCredentialsOidcConfigProvider>;
}

/**
 * Check if a given object implements the IdentityWithCredentialsOidcConfig interface.
 */
export function instanceOfIdentityWithCredentialsOidcConfig(value: object): value is IdentityWithCredentialsOidcConfig {
    return true;
}

export function IdentityWithCredentialsOidcConfigFromJSON(json: any): IdentityWithCredentialsOidcConfig {
    return IdentityWithCredentialsOidcConfigFromJSONTyped(json, false);
}

export function IdentityWithCredentialsOidcConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityWithCredentialsOidcConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'] == null ? undefined : IdentityWithCredentialsPasswordConfigFromJSON(json['config']),
        'providers': json['providers'] == null ? undefined : ((json['providers'] as Array<any>).map(IdentityWithCredentialsOidcConfigProviderFromJSON)),
    };
}

export function IdentityWithCredentialsOidcConfigToJSON(value?: IdentityWithCredentialsOidcConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'config': IdentityWithCredentialsPasswordConfigToJSON(value['config']),
        'providers': value['providers'] == null ? undefined : ((value['providers'] as Array<any>).map(IdentityWithCredentialsOidcConfigProviderToJSON)),
    };
}

