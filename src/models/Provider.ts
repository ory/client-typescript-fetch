/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.7
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
 * @interface Provider
 */
export interface Provider {
    /**
     * The RP's client identifier, issued by the IdP.
     * @type {string}
     * @memberof Provider
     */
    client_id?: string;
    /**
     * A full path of the IdP config file.
     * @type {string}
     * @memberof Provider
     */
    config_url?: string;
    /**
     * By specifying one of domain_hints values provided by the accounts endpoints,
     * the FedCM dialog selectively shows the specified account.
     * @type {string}
     * @memberof Provider
     */
    domain_hint?: string;
    /**
     * Array of strings that specifies the user information ("name", " email",
     * "picture") that RP needs IdP to share with them.
     * 
     * Note: Field API is supported by Chrome 132 and later.
     * @type {Array<string>}
     * @memberof Provider
     */
    fields?: Array<string>;
    /**
     * By specifying one of login_hints values provided by the accounts endpoints,
     * the FedCM dialog selectively shows the specified account.
     * @type {string}
     * @memberof Provider
     */
    login_hint?: string;
    /**
     * A random string to ensure the response is issued for this specific request.
     * Prevents replay attacks.
     * @type {string}
     * @memberof Provider
     */
    nonce?: string;
    /**
     * Custom object that allows to specify additional key-value parameters:
     * scope: A string value containing additional permissions that RP needs to
     * request, for example " drive.readonly calendar.readonly"
     * nonce: A random string to ensure the response is issued for this specific
     * request. Prevents replay attacks.
     * 
     * Other custom key-value parameters.
     * 
     * Note: parameters is supported from Chrome 132.
     * @type {{ [key: string]: string; }}
     * @memberof Provider
     */
    parameters?: { [key: string]: string; };
}

/**
 * Check if a given object implements the Provider interface.
 */
export function instanceOfProvider(value: object): value is Provider {
    return true;
}

export function ProviderFromJSON(json: any): Provider {
    return ProviderFromJSONTyped(json, false);
}

export function ProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Provider {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'config_url': json['config_url'] == null ? undefined : json['config_url'],
        'domain_hint': json['domain_hint'] == null ? undefined : json['domain_hint'],
        'fields': json['fields'] == null ? undefined : json['fields'],
        'login_hint': json['login_hint'] == null ? undefined : json['login_hint'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'parameters': json['parameters'] == null ? undefined : json['parameters'],
    };
}

export function ProviderToJSON(json: any): Provider {
    return ProviderToJSONTyped(json, false);
}

export function ProviderToJSONTyped(value?: Provider | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'client_id': value['client_id'],
        'config_url': value['config_url'],
        'domain_hint': value['domain_hint'],
        'fields': value['fields'],
        'login_hint': value['login_hint'],
        'nonce': value['nonce'],
        'parameters': value['parameters'],
    };
}

