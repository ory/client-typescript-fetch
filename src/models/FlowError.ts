/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.1
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
 * @interface FlowError
 */
export interface FlowError {
    /**
     * CreatedAt is a helper struct field for gobuffalo.pop.
     * @type {Date}
     * @memberof FlowError
     */
    created_at?: Date;
    /**
     * 
     * @type {object}
     * @memberof FlowError
     */
    error?: object;
    /**
     * ID of the error container.
     * @type {string}
     * @memberof FlowError
     */
    id: string;
    /**
     * UpdatedAt is a helper struct field for gobuffalo.pop.
     * @type {Date}
     * @memberof FlowError
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the FlowError interface.
 */
export function instanceOfFlowError(value: object): value is FlowError {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function FlowErrorFromJSON(json: any): FlowError {
    return FlowErrorFromJSONTyped(json, false);
}

export function FlowErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowError {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'error': json['error'] == null ? undefined : json['error'],
        'id': json['id'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function FlowErrorToJSON(json: any): FlowError {
    return FlowErrorToJSONTyped(json, false);
}

export function FlowErrorToJSONTyped(value?: FlowError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created_at': value['created_at'] == null ? undefined : ((value['created_at']).toISOString()),
        'error': value['error'],
        'id': value['id'],
        'updated_at': value['updated_at'] == null ? undefined : ((value['updated_at']).toISOString()),
    };
}

