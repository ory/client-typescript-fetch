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
 * @interface UpdateSubscriptionBody
 */
export interface UpdateSubscriptionBody {
    /**
     * 
     * monthly Monthly
     * yearly Yearly
     * @type {string}
     * @memberof UpdateSubscriptionBody
     */
    interval: UpdateSubscriptionBodyIntervalEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateSubscriptionBody
     */
    plan: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSubscriptionBody
     */
    return_to?: string;
}


/**
 * @export
 */
export const UpdateSubscriptionBodyIntervalEnum = {
    Monthly: 'monthly',
    Yearly: 'yearly',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type UpdateSubscriptionBodyIntervalEnum = typeof UpdateSubscriptionBodyIntervalEnum[keyof typeof UpdateSubscriptionBodyIntervalEnum];


/**
 * Check if a given object implements the UpdateSubscriptionBody interface.
 */
export function instanceOfUpdateSubscriptionBody(value: object): value is UpdateSubscriptionBody {
    if (!('interval' in value) || value['interval'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    return true;
}

export function UpdateSubscriptionBodyFromJSON(json: any): UpdateSubscriptionBody {
    return UpdateSubscriptionBodyFromJSONTyped(json, false);
}

export function UpdateSubscriptionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSubscriptionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'interval': json['interval'],
        'plan': json['plan'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
    };
}

export function UpdateSubscriptionBodyToJSON(json: any): UpdateSubscriptionBody {
    return UpdateSubscriptionBodyToJSONTyped(json, false);
}

export function UpdateSubscriptionBodyToJSONTyped(value?: UpdateSubscriptionBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'interval': value['interval'],
        'plan': value['plan'],
        'return_to': value['return_to'],
    };
}

