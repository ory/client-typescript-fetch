/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update registration flow using SAML
 * @export
 * @interface UpdateRegistrationFlowWithSamlMethod
 */
export interface UpdateRegistrationFlowWithSamlMethod {
    /**
     * The CSRF Token
     * @type {string}
     * @memberof UpdateRegistrationFlowWithSamlMethod
     */
    csrf_token?: string;
    /**
     * Method to use
     * 
     * This field must be set to `saml` when using the saml method.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithSamlMethod
     */
    method: string;
    /**
     * The provider to register with
     * @type {string}
     * @memberof UpdateRegistrationFlowWithSamlMethod
     */
    provider: string;
    /**
     * The identity traits
     * @type {object}
     * @memberof UpdateRegistrationFlowWithSamlMethod
     */
    traits?: object;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateRegistrationFlowWithSamlMethod
     */
    transient_payload?: object;
}

/**
 * Check if a given object implements the UpdateRegistrationFlowWithSamlMethod interface.
 */
export function instanceOfUpdateRegistrationFlowWithSamlMethod(value: object): value is UpdateRegistrationFlowWithSamlMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('provider' in value) || value['provider'] === undefined) return false;
    return true;
}

export function UpdateRegistrationFlowWithSamlMethodFromJSON(json: any): UpdateRegistrationFlowWithSamlMethod {
    return UpdateRegistrationFlowWithSamlMethodFromJSONTyped(json, false);
}

export function UpdateRegistrationFlowWithSamlMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRegistrationFlowWithSamlMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'method': json['method'],
        'provider': json['provider'],
        'traits': json['traits'] == null ? undefined : json['traits'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
    };
}

export function UpdateRegistrationFlowWithSamlMethodToJSON(json: any): UpdateRegistrationFlowWithSamlMethod {
    return UpdateRegistrationFlowWithSamlMethodToJSONTyped(json, false);
}

export function UpdateRegistrationFlowWithSamlMethodToJSONTyped(value?: UpdateRegistrationFlowWithSamlMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'csrf_token': value['csrf_token'],
        'method': value['method'],
        'provider': value['provider'],
        'traits': value['traits'],
        'transient_payload': value['transient_payload'],
    };
}

