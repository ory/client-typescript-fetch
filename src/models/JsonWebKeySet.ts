/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.15
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { JsonWebKey } from './JsonWebKey';
import {
    JsonWebKeyFromJSON,
    JsonWebKeyFromJSONTyped,
    JsonWebKeyToJSON,
} from './JsonWebKey';

/**
 * JSON Web Key Set
 * @export
 * @interface JsonWebKeySet
 */
export interface JsonWebKeySet {
    /**
     * List of JSON Web Keys
     * 
     * The value of the "keys" parameter is an array of JSON Web Key (JWK)
     * values. By default, the order of the JWK values within the array does
     * not imply an order of preference among them, although applications
     * of JWK Sets can choose to assign a meaning to the order for their
     * purposes, if desired.
     * @type {Array<JsonWebKey>}
     * @memberof JsonWebKeySet
     */
    keys?: Array<JsonWebKey>;
}

/**
 * Check if a given object implements the JsonWebKeySet interface.
 */
export function instanceOfJsonWebKeySet(value: object): value is JsonWebKeySet {
    return true;
}

export function JsonWebKeySetFromJSON(json: any): JsonWebKeySet {
    return JsonWebKeySetFromJSONTyped(json, false);
}

export function JsonWebKeySetFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonWebKeySet {
    if (json == null) {
        return json;
    }
    return {
        
        'keys': json['keys'] == null ? undefined : ((json['keys'] as Array<any>).map(JsonWebKeyFromJSON)),
    };
}

export function JsonWebKeySetToJSON(value?: JsonWebKeySet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'keys': value['keys'] == null ? undefined : ((value['keys'] as Array<any>).map(JsonWebKeyToJSON)),
    };
}

