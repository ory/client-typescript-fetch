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
 * Create B2B SSO Organization Request Body
 * @export
 * @interface OrganizationBody
 */
export interface OrganizationBody {
    /**
     * Domains contains the list of organization's domains.
     * @type {Array<string>}
     * @memberof OrganizationBody
     */
    domains?: Array<string>;
    /**
     * Label contains the organization's label.
     * @type {string}
     * @memberof OrganizationBody
     */
    label?: string;
}

/**
 * Check if a given object implements the OrganizationBody interface.
 */
export function instanceOfOrganizationBody(value: object): value is OrganizationBody {
    return true;
}

export function OrganizationBodyFromJSON(json: any): OrganizationBody {
    return OrganizationBodyFromJSONTyped(json, false);
}

export function OrganizationBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationBody {
    if (json == null) {
        return json;
    }
    return {
        
        'domains': json['domains'] == null ? undefined : json['domains'],
        'label': json['label'] == null ? undefined : json['label'],
    };
}

export function OrganizationBodyToJSON(json: any): OrganizationBody {
    return OrganizationBodyToJSONTyped(json, false);
}

export function OrganizationBodyToJSONTyped(value?: OrganizationBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domains': value['domains'],
        'label': value['label'],
    };
}

