/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.0
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
 * @interface VerifiableCredentialPrimingResponse
 */
export interface VerifiableCredentialPrimingResponse {
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialPrimingResponse
     */
    c_nonce?: string;
    /**
     * 
     * @type {number}
     * @memberof VerifiableCredentialPrimingResponse
     */
    c_nonce_expires_in?: number;
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialPrimingResponse
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialPrimingResponse
     */
    error_debug?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialPrimingResponse
     */
    error_description?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialPrimingResponse
     */
    error_hint?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialPrimingResponse
     */
    format?: string;
    /**
     * 
     * @type {number}
     * @memberof VerifiableCredentialPrimingResponse
     */
    status_code?: number;
}

/**
 * Check if a given object implements the VerifiableCredentialPrimingResponse interface.
 */
export function instanceOfVerifiableCredentialPrimingResponse(value: object): value is VerifiableCredentialPrimingResponse {
    return true;
}

export function VerifiableCredentialPrimingResponseFromJSON(json: any): VerifiableCredentialPrimingResponse {
    return VerifiableCredentialPrimingResponseFromJSONTyped(json, false);
}

export function VerifiableCredentialPrimingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifiableCredentialPrimingResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'c_nonce': json['c_nonce'] == null ? undefined : json['c_nonce'],
        'c_nonce_expires_in': json['c_nonce_expires_in'] == null ? undefined : json['c_nonce_expires_in'],
        'error': json['error'] == null ? undefined : json['error'],
        'error_debug': json['error_debug'] == null ? undefined : json['error_debug'],
        'error_description': json['error_description'] == null ? undefined : json['error_description'],
        'error_hint': json['error_hint'] == null ? undefined : json['error_hint'],
        'format': json['format'] == null ? undefined : json['format'],
        'status_code': json['status_code'] == null ? undefined : json['status_code'],
    };
}

export function VerifiableCredentialPrimingResponseToJSON(json: any): VerifiableCredentialPrimingResponse {
    return VerifiableCredentialPrimingResponseToJSONTyped(json, false);
}

export function VerifiableCredentialPrimingResponseToJSONTyped(value?: VerifiableCredentialPrimingResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'c_nonce': value['c_nonce'],
        'c_nonce_expires_in': value['c_nonce_expires_in'],
        'error': value['error'],
        'error_debug': value['error_debug'],
        'error_description': value['error_description'],
        'error_hint': value['error_hint'],
        'format': value['format'],
        'status_code': value['status_code'],
    };
}

