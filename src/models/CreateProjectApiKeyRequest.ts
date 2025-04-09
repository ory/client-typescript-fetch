/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.6
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
 * @interface CreateProjectApiKeyRequest
 */
export interface CreateProjectApiKeyRequest {
    /**
     * 
     * @type {Date}
     * @memberof CreateProjectApiKeyRequest
     */
    expires_at?: Date;
    /**
     * The Token Name
     * 
     * A descriptive name for the token.
     * 
     * in: body
     * @type {string}
     * @memberof CreateProjectApiKeyRequest
     */
    name: string;
}

/**
 * Check if a given object implements the CreateProjectApiKeyRequest interface.
 */
export function instanceOfCreateProjectApiKeyRequest(value: object): value is CreateProjectApiKeyRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateProjectApiKeyRequestFromJSON(json: any): CreateProjectApiKeyRequest {
    return CreateProjectApiKeyRequestFromJSONTyped(json, false);
}

export function CreateProjectApiKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectApiKeyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'expires_at': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'name': json['name'],
    };
}

export function CreateProjectApiKeyRequestToJSON(json: any): CreateProjectApiKeyRequest {
    return CreateProjectApiKeyRequestToJSONTyped(json, false);
}

export function CreateProjectApiKeyRequestToJSONTyped(value?: CreateProjectApiKeyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expires_at': value['expires_at'] == null ? undefined : ((value['expires_at']).toISOString()),
        'name': value['name'],
    };
}

