/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.18.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Custom Hostname Body
 * @export
 * @interface SetCustomDomainBody
 */
export interface SetCustomDomainBody {
    /**
     * The domain where cookies will be set. Has to be a parent domain of the custom hostname to work.
     * @type {string}
     * @memberof SetCustomDomainBody
     */
    cookie_domain?: string;
    /**
     * CORS Allowed origins for the custom hostname.
     * @type {Array<string>}
     * @memberof SetCustomDomainBody
     */
    cors_allowed_origins?: Array<string>;
    /**
     * CORS Enabled for the custom hostname.
     * @type {boolean}
     * @memberof SetCustomDomainBody
     */
    cors_enabled?: boolean;
    /**
     * The custom UI base URL where the UI will be exposed.
     * @type {string}
     * @memberof SetCustomDomainBody
     */
    custom_ui_base_url?: string;
    /**
     * The custom hostname where the API will be exposed.
     * @type {string}
     * @memberof SetCustomDomainBody
     */
    hostname?: string;
}

/**
 * Check if a given object implements the SetCustomDomainBody interface.
 */
export function instanceOfSetCustomDomainBody(value: object): value is SetCustomDomainBody {
    return true;
}

export function SetCustomDomainBodyFromJSON(json: any): SetCustomDomainBody {
    return SetCustomDomainBodyFromJSONTyped(json, false);
}

export function SetCustomDomainBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetCustomDomainBody {
    if (json == null) {
        return json;
    }
    return {
        
        'cookie_domain': json['cookie_domain'] == null ? undefined : json['cookie_domain'],
        'cors_allowed_origins': json['cors_allowed_origins'] == null ? undefined : json['cors_allowed_origins'],
        'cors_enabled': json['cors_enabled'] == null ? undefined : json['cors_enabled'],
        'custom_ui_base_url': json['custom_ui_base_url'] == null ? undefined : json['custom_ui_base_url'],
        'hostname': json['hostname'] == null ? undefined : json['hostname'],
    };
}

export function SetCustomDomainBodyToJSON(json: any): SetCustomDomainBody {
    return SetCustomDomainBodyToJSONTyped(json, false);
}

export function SetCustomDomainBodyToJSONTyped(value?: SetCustomDomainBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cookie_domain': value['cookie_domain'],
        'cors_allowed_origins': value['cors_allowed_origins'],
        'cors_enabled': value['cors_enabled'],
        'custom_ui_base_url': value['custom_ui_base_url'],
        'hostname': value['hostname'],
    };
}

