/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Organization } from './Organization';
import {
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
    OrganizationToJSONTyped,
} from './Organization';

/**
 * B2B SSO Organization List
 * @export
 * @interface ListOrganizationsResponse
 */
export interface ListOrganizationsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ListOrganizationsResponse
     */
    has_next_page: boolean;
    /**
     * 
     * @type {string}
     * @memberof ListOrganizationsResponse
     */
    next_page_token: string;
    /**
     * The list of organizations
     * @type {Array<Organization>}
     * @memberof ListOrganizationsResponse
     */
    organizations: Array<Organization>;
}

/**
 * Check if a given object implements the ListOrganizationsResponse interface.
 */
export function instanceOfListOrganizationsResponse(value: object): value is ListOrganizationsResponse {
    if (!('has_next_page' in value) || value['has_next_page'] === undefined) return false;
    if (!('next_page_token' in value) || value['next_page_token'] === undefined) return false;
    if (!('organizations' in value) || value['organizations'] === undefined) return false;
    return true;
}

export function ListOrganizationsResponseFromJSON(json: any): ListOrganizationsResponse {
    return ListOrganizationsResponseFromJSONTyped(json, false);
}

export function ListOrganizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOrganizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'has_next_page': json['has_next_page'],
        'next_page_token': json['next_page_token'],
        'organizations': ((json['organizations'] as Array<any>).map(OrganizationFromJSON)),
    };
}

export function ListOrganizationsResponseToJSON(json: any): ListOrganizationsResponse {
    return ListOrganizationsResponseToJSONTyped(json, false);
}

export function ListOrganizationsResponseToJSONTyped(value?: ListOrganizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'has_next_page': value['has_next_page'],
        'next_page_token': value['next_page_token'],
        'organizations': ((value['organizations'] as Array<any>).map(OrganizationToJSON)),
    };
}

