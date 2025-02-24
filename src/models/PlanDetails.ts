/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.10
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GenericUsage } from './GenericUsage';
import {
    GenericUsageFromJSON,
    GenericUsageFromJSONTyped,
    GenericUsageToJSON,
} from './GenericUsage';

/**
 * 
 * @export
 * @interface PlanDetails
 */
export interface PlanDetails {
    /**
     * BaseFeeMonthly is the monthly base fee for the plan.
     * @type {number}
     * @memberof PlanDetails
     */
    base_fee_monthly: number;
    /**
     * BaseFeeYearly is the yearly base fee for the plan.
     * @type {number}
     * @memberof PlanDetails
     */
    base_fee_yearly: number;
    /**
     * Custom is true if the plan is custom. This means it will be hidden from the pricing page.
     * @type {boolean}
     * @memberof PlanDetails
     */
    custom: boolean;
    /**
     * Description is the description of the plan.
     * @type {string}
     * @memberof PlanDetails
     */
    description: string;
    /**
     * 
     * @type {{ [key: string]: GenericUsage; }}
     * @memberof PlanDetails
     */
    features: { [key: string]: GenericUsage; };
    /**
     * Latest is true if the plan is the latest version of a plan and should be available for self-service usage.
     * @type {boolean}
     * @memberof PlanDetails
     */
    latest?: boolean;
    /**
     * Name is the name of the plan.
     * @type {string}
     * @memberof PlanDetails
     */
    name: string;
    /**
     * Version is the version of the plan. The combination of `name@version` must be unique.
     * @type {number}
     * @memberof PlanDetails
     */
    version: number;
}

/**
 * Check if a given object implements the PlanDetails interface.
 */
export function instanceOfPlanDetails(value: object): value is PlanDetails {
    if (!('base_fee_monthly' in value) || value['base_fee_monthly'] === undefined) return false;
    if (!('base_fee_yearly' in value) || value['base_fee_yearly'] === undefined) return false;
    if (!('custom' in value) || value['custom'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('features' in value) || value['features'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function PlanDetailsFromJSON(json: any): PlanDetails {
    return PlanDetailsFromJSONTyped(json, false);
}

export function PlanDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'base_fee_monthly': json['base_fee_monthly'],
        'base_fee_yearly': json['base_fee_yearly'],
        'custom': json['custom'],
        'description': json['description'],
        'features': (mapValues(json['features'], GenericUsageFromJSON)),
        'latest': json['latest'] == null ? undefined : json['latest'],
        'name': json['name'],
        'version': json['version'],
    };
}

export function PlanDetailsToJSON(value?: PlanDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'base_fee_monthly': value['base_fee_monthly'],
        'base_fee_yearly': value['base_fee_yearly'],
        'custom': value['custom'],
        'description': value['description'],
        'features': (mapValues(value['features'], GenericUsageToJSON)),
        'latest': value['latest'],
        'name': value['name'],
        'version': value['version'],
    };
}

