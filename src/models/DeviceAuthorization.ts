/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.21.1
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * # Ory's OAuth 2.0 Device Authorization API
 * @export
 * @interface DeviceAuthorization
 */
export interface DeviceAuthorization {
    /**
     * The device verification code.
     * @type {string}
     * @memberof DeviceAuthorization
     */
    device_code?: string;
    /**
     * The lifetime in seconds of the "device_code" and "user_code".
     * @type {number}
     * @memberof DeviceAuthorization
     */
    expires_in?: number;
    /**
     * The minimum amount of time in seconds that the client
     * SHOULD wait between polling requests to the token endpoint.  If no
     * value is provided, clients MUST use 5 as the default.
     * @type {number}
     * @memberof DeviceAuthorization
     */
    interval?: number;
    /**
     * The end-user verification code.
     * @type {string}
     * @memberof DeviceAuthorization
     */
    user_code?: string;
    /**
     * The end-user verification URI on the authorization
     * server.  The URI should be short and easy to remember as end users
     * will be asked to manually type it into their user agent.
     * @type {string}
     * @memberof DeviceAuthorization
     */
    verification_uri?: string;
    /**
     * A verification URI that includes the "user_code" (or
     * other information with the same function as the "user_code"),
     * which is designed for non-textual transmission.
     * @type {string}
     * @memberof DeviceAuthorization
     */
    verification_uri_complete?: string;
}

/**
 * Check if a given object implements the DeviceAuthorization interface.
 */
export function instanceOfDeviceAuthorization(value: object): value is DeviceAuthorization {
    return true;
}

export function DeviceAuthorizationFromJSON(json: any): DeviceAuthorization {
    return DeviceAuthorizationFromJSONTyped(json, false);
}

export function DeviceAuthorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceAuthorization {
    if (json == null) {
        return json;
    }
    return {
        
        'device_code': json['device_code'] == null ? undefined : json['device_code'],
        'expires_in': json['expires_in'] == null ? undefined : json['expires_in'],
        'interval': json['interval'] == null ? undefined : json['interval'],
        'user_code': json['user_code'] == null ? undefined : json['user_code'],
        'verification_uri': json['verification_uri'] == null ? undefined : json['verification_uri'],
        'verification_uri_complete': json['verification_uri_complete'] == null ? undefined : json['verification_uri_complete'],
    };
}

export function DeviceAuthorizationToJSON(json: any): DeviceAuthorization {
    return DeviceAuthorizationToJSONTyped(json, false);
}

export function DeviceAuthorizationToJSONTyped(value?: DeviceAuthorization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'device_code': value['device_code'],
        'expires_in': value['expires_in'],
        'interval': value['interval'],
        'user_code': value['user_code'],
        'verification_uri': value['verification_uri'],
        'verification_uri_complete': value['verification_uri_complete'],
    };
}

