/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Login Flow with WebAuthn Method
 * @export
 * @interface UpdateLoginFlowWithWebAuthnMethod
 */
export interface UpdateLoginFlowWithWebAuthnMethod {
    /**
     * Sending the anti-csrf token is only required for browser login flows.
     * @type {string}
     * @memberof UpdateLoginFlowWithWebAuthnMethod
     */
    csrf_token?: string;
    /**
     * Identifier is the email or username of the user trying to log in.
     * @type {string}
     * @memberof UpdateLoginFlowWithWebAuthnMethod
     */
    identifier: string;
    /**
     * Method should be set to "webAuthn" when logging in using the WebAuthn strategy.
     * @type {string}
     * @memberof UpdateLoginFlowWithWebAuthnMethod
     */
    method: string;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateLoginFlowWithWebAuthnMethod
     */
    transient_payload?: object;
    /**
     * Login a WebAuthn Security Key
     * 
     * This must contain the ID of the WebAuthN connection.
     * @type {string}
     * @memberof UpdateLoginFlowWithWebAuthnMethod
     */
    webauthn_login?: string;
}

/**
 * Check if a given object implements the UpdateLoginFlowWithWebAuthnMethod interface.
 */
export function instanceOfUpdateLoginFlowWithWebAuthnMethod(value: object): value is UpdateLoginFlowWithWebAuthnMethod {
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function UpdateLoginFlowWithWebAuthnMethodFromJSON(json: any): UpdateLoginFlowWithWebAuthnMethod {
    return UpdateLoginFlowWithWebAuthnMethodFromJSONTyped(json, false);
}

export function UpdateLoginFlowWithWebAuthnMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowWithWebAuthnMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'identifier': json['identifier'],
        'method': json['method'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
        'webauthn_login': json['webauthn_login'] == null ? undefined : json['webauthn_login'],
    };
}

export function UpdateLoginFlowWithWebAuthnMethodToJSON(value?: UpdateLoginFlowWithWebAuthnMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'csrf_token': value['csrf_token'],
        'identifier': value['identifier'],
        'method': value['method'],
        'transient_payload': value['transient_payload'],
        'webauthn_login': value['webauthn_login'],
    };
}

