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
 * @interface CreateSubscriptionBody
 */
export interface CreateSubscriptionBody {
    /**
     * 
     * usd USD
     * eur Euro
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    currency?: CreateSubscriptionBodyCurrencyEnum;
    /**
     * 
     * monthly Monthly
     * yearly Yearly
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    interval: CreateSubscriptionBodyIntervalEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    plan: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    provision_first_project: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionBody
     */
    return_to?: string;
}


/**
 * @export
 */
export const CreateSubscriptionBodyCurrencyEnum = {
    Usd: 'usd',
    Eur: 'eur',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CreateSubscriptionBodyCurrencyEnum = typeof CreateSubscriptionBodyCurrencyEnum[keyof typeof CreateSubscriptionBodyCurrencyEnum];

/**
 * @export
 */
export const CreateSubscriptionBodyIntervalEnum = {
    Monthly: 'monthly',
    Yearly: 'yearly',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CreateSubscriptionBodyIntervalEnum = typeof CreateSubscriptionBodyIntervalEnum[keyof typeof CreateSubscriptionBodyIntervalEnum];


/**
 * Check if a given object implements the CreateSubscriptionBody interface.
 */
export function instanceOfCreateSubscriptionBody(value: object): value is CreateSubscriptionBody {
    if (!('interval' in value) || value['interval'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    if (!('provision_first_project' in value) || value['provision_first_project'] === undefined) return false;
    return true;
}

export function CreateSubscriptionBodyFromJSON(json: any): CreateSubscriptionBody {
    return CreateSubscriptionBodyFromJSONTyped(json, false);
}

export function CreateSubscriptionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubscriptionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'] == null ? undefined : json['currency'],
        'interval': json['interval'],
        'plan': json['plan'],
        'provision_first_project': json['provision_first_project'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
    };
}

export function CreateSubscriptionBodyToJSON(json: any): CreateSubscriptionBody {
    return CreateSubscriptionBodyToJSONTyped(json, false);
}

export function CreateSubscriptionBodyToJSONTyped(value?: CreateSubscriptionBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'currency': value['currency'],
        'interval': value['interval'],
        'plan': value['plan'],
        'provision_first_project': value['provision_first_project'],
        'return_to': value['return_to'],
    };
}

