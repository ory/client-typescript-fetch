/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.16
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Logout Flow
 * @export
 * @interface LogoutFlow
 */
export interface LogoutFlow {
    /**
     * LogoutToken can be used to perform logout using AJAX.
     * @type {string}
     * @memberof LogoutFlow
     */
    logout_token: string;
    /**
     * LogoutURL can be opened in a browser to sign the user out.
     * 
     * format: uri
     * @type {string}
     * @memberof LogoutFlow
     */
    logout_url: string;
}

/**
 * Check if a given object implements the LogoutFlow interface.
 */
export function instanceOfLogoutFlow(value: object): value is LogoutFlow {
    if (!('logout_token' in value) || value['logout_token'] === undefined) return false;
    if (!('logout_url' in value) || value['logout_url'] === undefined) return false;
    return true;
}

export function LogoutFlowFromJSON(json: any): LogoutFlow {
    return LogoutFlowFromJSONTyped(json, false);
}

export function LogoutFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogoutFlow {
    if (json == null) {
        return json;
    }
    return {
        
        'logout_token': json['logout_token'],
        'logout_url': json['logout_url'],
    };
}

export function LogoutFlowToJSON(value?: LogoutFlow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'logout_token': value['logout_token'],
        'logout_url': value['logout_url'],
    };
}

