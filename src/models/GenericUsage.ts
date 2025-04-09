/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Money } from './Money';
import {
    MoneyFromJSON,
    MoneyFromJSONTyped,
    MoneyToJSON,
    MoneyToJSONTyped,
} from './Money';

/**
 * 
 * @export
 * @interface GenericUsage
 */
export interface GenericUsage {
    /**
     * 
     * @type {Money}
     * @memberof GenericUsage
     */
    additional_price: Money;
    /**
     * IncludedUsage is the number of included items.
     * @type {number}
     * @memberof GenericUsage
     */
    included_usage: number;
}

/**
 * Check if a given object implements the GenericUsage interface.
 */
export function instanceOfGenericUsage(value: object): value is GenericUsage {
    if (!('additional_price' in value) || value['additional_price'] === undefined) return false;
    if (!('included_usage' in value) || value['included_usage'] === undefined) return false;
    return true;
}

export function GenericUsageFromJSON(json: any): GenericUsage {
    return GenericUsageFromJSONTyped(json, false);
}

export function GenericUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericUsage {
    if (json == null) {
        return json;
    }
    return {
        
        'additional_price': MoneyFromJSON(json['additional_price']),
        'included_usage': json['included_usage'],
    };
}

export function GenericUsageToJSON(json: any): GenericUsage {
    return GenericUsageToJSONTyped(json, false);
}

export function GenericUsageToJSONTyped(value?: GenericUsage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'additional_price': MoneyToJSON(value['additional_price']),
        'included_usage': value['included_usage'],
    };
}

