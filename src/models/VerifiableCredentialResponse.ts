/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.4
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
 * @interface VerifiableCredentialResponse
 */
export interface VerifiableCredentialResponse {
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialResponse
     */
    credential_draft_00?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifiableCredentialResponse
     */
    format?: string;
}

/**
 * Check if a given object implements the VerifiableCredentialResponse interface.
 */
export function instanceOfVerifiableCredentialResponse(value: object): value is VerifiableCredentialResponse {
    return true;
}

export function VerifiableCredentialResponseFromJSON(json: any): VerifiableCredentialResponse {
    return VerifiableCredentialResponseFromJSONTyped(json, false);
}

export function VerifiableCredentialResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifiableCredentialResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'credential_draft_00': json['credential_draft_00'] == null ? undefined : json['credential_draft_00'],
        'format': json['format'] == null ? undefined : json['format'],
    };
}

export function VerifiableCredentialResponseToJSON(json: any): VerifiableCredentialResponse {
    return VerifiableCredentialResponseToJSONTyped(json, false);
}

export function VerifiableCredentialResponseToJSONTyped(value?: VerifiableCredentialResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'credential_draft_00': value['credential_draft_00'],
        'format': value['format'],
    };
}

