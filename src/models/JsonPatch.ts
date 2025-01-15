/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.1
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A JSONPatch document as defined by RFC 6902
 * @export
 * @interface JsonPatch
 */
export interface JsonPatch {
    /**
     * This field is used together with operation "move" and uses JSON Pointer notation.
     * 
     * Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).
     * @type {string}
     * @memberof JsonPatch
     */
    from?: string;
    /**
     * The operation to be performed. One of "add", "remove", "replace", "move", "copy", or "test".
     * @type {string}
     * @memberof JsonPatch
     */
    op: JsonPatchOpEnum;
    /**
     * The path to the target path. Uses JSON pointer notation.
     * 
     * Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).
     * @type {string}
     * @memberof JsonPatch
     */
    path: string;
    /**
     * The value to be used within the operations.
     * 
     * Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).
     * @type {any}
     * @memberof JsonPatch
     */
    value?: any | null;
}


/**
 * @export
 */
export const JsonPatchOpEnum = {
    Add: 'add',
    Remove: 'remove',
    Replace: 'replace',
    Move: 'move',
    Copy: 'copy',
    Test: 'test'
} as const;
export type JsonPatchOpEnum = typeof JsonPatchOpEnum[keyof typeof JsonPatchOpEnum];


/**
 * Check if a given object implements the JsonPatch interface.
 */
export function instanceOfJsonPatch(value: object): value is JsonPatch {
    if (!('op' in value) || value['op'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    return true;
}

export function JsonPatchFromJSON(json: any): JsonPatch {
    return JsonPatchFromJSONTyped(json, false);
}

export function JsonPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonPatch {
    if (json == null) {
        return json;
    }
    return {
        
        'from': json['from'] == null ? undefined : json['from'],
        'op': json['op'],
        'path': json['path'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function JsonPatchToJSON(value?: JsonPatch | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'from': value['from'],
        'op': value['op'],
        'path': value['path'],
        'value': value['value'],
    };
}

