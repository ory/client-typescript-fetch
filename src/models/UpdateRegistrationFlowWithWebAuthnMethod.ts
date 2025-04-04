/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Registration Flow with WebAuthn Method
 * @export
 * @interface UpdateRegistrationFlowWithWebAuthnMethod
 */
export interface UpdateRegistrationFlowWithWebAuthnMethod {
    /**
     * CSRFToken is the anti-CSRF token
     * @type {string}
     * @memberof UpdateRegistrationFlowWithWebAuthnMethod
     */
    csrf_token?: string;
    /**
     * Method
     * 
     * Should be set to "webauthn" when trying to add, update, or remove a webAuthn pairing.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithWebAuthnMethod
     */
    method: string;
    /**
     * The identity's traits
     * @type {object}
     * @memberof UpdateRegistrationFlowWithWebAuthnMethod
     */
    traits: object;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateRegistrationFlowWithWebAuthnMethod
     */
    transient_payload?: object;
    /**
     * Register a WebAuthn Security Key
     * 
     * It is expected that the JSON returned by the WebAuthn registration process
     * is included here.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithWebAuthnMethod
     */
    webauthn_register?: string;
    /**
     * Name of the WebAuthn Security Key to be Added
     * 
     * A human-readable name for the security key which will be added.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithWebAuthnMethod
     */
    webauthn_register_displayname?: string;
}

/**
 * Check if a given object implements the UpdateRegistrationFlowWithWebAuthnMethod interface.
 */
export function instanceOfUpdateRegistrationFlowWithWebAuthnMethod(value: object): value is UpdateRegistrationFlowWithWebAuthnMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('traits' in value) || value['traits'] === undefined) return false;
    return true;
}

export function UpdateRegistrationFlowWithWebAuthnMethodFromJSON(json: any): UpdateRegistrationFlowWithWebAuthnMethod {
    return UpdateRegistrationFlowWithWebAuthnMethodFromJSONTyped(json, false);
}

export function UpdateRegistrationFlowWithWebAuthnMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRegistrationFlowWithWebAuthnMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'method': json['method'],
        'traits': json['traits'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
        'webauthn_register': json['webauthn_register'] == null ? undefined : json['webauthn_register'],
        'webauthn_register_displayname': json['webauthn_register_displayname'] == null ? undefined : json['webauthn_register_displayname'],
    };
}

export function UpdateRegistrationFlowWithWebAuthnMethodToJSON(json: any): UpdateRegistrationFlowWithWebAuthnMethod {
    return UpdateRegistrationFlowWithWebAuthnMethodToJSONTyped(json, false);
}

export function UpdateRegistrationFlowWithWebAuthnMethodToJSONTyped(value?: UpdateRegistrationFlowWithWebAuthnMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'csrf_token': value['csrf_token'],
        'method': value['method'],
        'traits': value['traits'],
        'transient_payload': value['transient_payload'],
        'webauthn_register': value['webauthn_register'],
        'webauthn_register_displayname': value['webauthn_register_displayname'],
    };
}

