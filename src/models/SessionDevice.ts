/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Device corresponding to a Session
 * @export
 * @interface SessionDevice
 */
export interface SessionDevice {
    /**
     * Device record ID
     * @type {string}
     * @memberof SessionDevice
     */
    id: string;
    /**
     * IPAddress of the client
     * @type {string}
     * @memberof SessionDevice
     */
    ip_address?: string;
    /**
     * Geo Location corresponding to the IP Address
     * @type {string}
     * @memberof SessionDevice
     */
    location?: string;
    /**
     * UserAgent of the client
     * @type {string}
     * @memberof SessionDevice
     */
    user_agent?: string;
}

/**
 * Check if a given object implements the SessionDevice interface.
 */
export function instanceOfSessionDevice(value: object): value is SessionDevice {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SessionDeviceFromJSON(json: any): SessionDevice {
    return SessionDeviceFromJSONTyped(json, false);
}

export function SessionDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ip_address': json['ip_address'] == null ? undefined : json['ip_address'],
        'location': json['location'] == null ? undefined : json['location'],
        'user_agent': json['user_agent'] == null ? undefined : json['user_agent'],
    };
}

export function SessionDeviceToJSON(json: any): SessionDevice {
    return SessionDeviceToJSONTyped(json, false);
}

export function SessionDeviceToJSONTyped(value?: SessionDevice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'ip_address': value['ip_address'],
        'location': value['location'],
        'user_agent': value['user_agent'],
    };
}

