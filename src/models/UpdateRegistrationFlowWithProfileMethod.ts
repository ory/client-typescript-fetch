/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Registration Flow with Profile Method
 * @export
 * @interface UpdateRegistrationFlowWithProfileMethod
 */
export interface UpdateRegistrationFlowWithProfileMethod {
    /**
     * The Anti-CSRF Token
     * 
     * This token is only required when performing browser flows.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithProfileMethod
     */
    csrf_token?: string;
    /**
     * Method
     * 
     * Should be set to profile when trying to update a profile.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithProfileMethod
     */
    method: string;
    /**
     * Screen requests navigation to a previous screen.
     * 
     * This must be set to credential-selection to go back to the credential
     * selection screen.
     * credential-selection RegistrationScreenCredentialSelection nolint:gosec // not a credential
     * previous RegistrationScreenPrevious
     * @type {string}
     * @memberof UpdateRegistrationFlowWithProfileMethod
     */
    screen?: UpdateRegistrationFlowWithProfileMethodScreenEnum;
    /**
     * Traits
     * 
     * The identity's traits.
     * @type {object}
     * @memberof UpdateRegistrationFlowWithProfileMethod
     */
    traits: object;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateRegistrationFlowWithProfileMethod
     */
    transient_payload?: object;
}


/**
 * @export
 */
export const UpdateRegistrationFlowWithProfileMethodScreenEnum = {
    CredentialSelection: 'credential-selection',
    Previous: 'previous'
} as const;
export type UpdateRegistrationFlowWithProfileMethodScreenEnum = typeof UpdateRegistrationFlowWithProfileMethodScreenEnum[keyof typeof UpdateRegistrationFlowWithProfileMethodScreenEnum];


/**
 * Check if a given object implements the UpdateRegistrationFlowWithProfileMethod interface.
 */
export function instanceOfUpdateRegistrationFlowWithProfileMethod(value: object): value is UpdateRegistrationFlowWithProfileMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('traits' in value) || value['traits'] === undefined) return false;
    return true;
}

export function UpdateRegistrationFlowWithProfileMethodFromJSON(json: any): UpdateRegistrationFlowWithProfileMethod {
    return UpdateRegistrationFlowWithProfileMethodFromJSONTyped(json, false);
}

export function UpdateRegistrationFlowWithProfileMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRegistrationFlowWithProfileMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'method': json['method'],
        'screen': json['screen'] == null ? undefined : json['screen'],
        'traits': json['traits'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
    };
}

export function UpdateRegistrationFlowWithProfileMethodToJSON(value?: UpdateRegistrationFlowWithProfileMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'csrf_token': value['csrf_token'],
        'method': value['method'],
        'screen': value['screen'],
        'traits': value['traits'],
        'transient_payload': value['transient_payload'],
    };
}

