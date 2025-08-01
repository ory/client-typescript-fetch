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
 * 
 * @export
 * @interface CreateWorkspaceSubscriptionBody
 */
export interface CreateWorkspaceSubscriptionBody {
    /**
     * 
     * usd USD
     * eur Euro
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    currency?: CreateWorkspaceSubscriptionBodyCurrencyEnum;
    /**
     * 
     * monthly Monthly
     * yearly Yearly
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    interval: CreateWorkspaceSubscriptionBodyIntervalEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    plan: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceSubscriptionBody
     */
    return_to?: string;
}


/**
 * @export
 */
export const CreateWorkspaceSubscriptionBodyCurrencyEnum = {
    Usd: 'usd',
    Eur: 'eur',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CreateWorkspaceSubscriptionBodyCurrencyEnum = typeof CreateWorkspaceSubscriptionBodyCurrencyEnum[keyof typeof CreateWorkspaceSubscriptionBodyCurrencyEnum];

/**
 * @export
 */
export const CreateWorkspaceSubscriptionBodyIntervalEnum = {
    Monthly: 'monthly',
    Yearly: 'yearly',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CreateWorkspaceSubscriptionBodyIntervalEnum = typeof CreateWorkspaceSubscriptionBodyIntervalEnum[keyof typeof CreateWorkspaceSubscriptionBodyIntervalEnum];


/**
 * Check if a given object implements the CreateWorkspaceSubscriptionBody interface.
 */
export function instanceOfCreateWorkspaceSubscriptionBody(value: object): value is CreateWorkspaceSubscriptionBody {
    if (!('interval' in value) || value['interval'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    return true;
}

export function CreateWorkspaceSubscriptionBodyFromJSON(json: any): CreateWorkspaceSubscriptionBody {
    return CreateWorkspaceSubscriptionBodyFromJSONTyped(json, false);
}

export function CreateWorkspaceSubscriptionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWorkspaceSubscriptionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'] == null ? undefined : json['currency'],
        'interval': json['interval'],
        'plan': json['plan'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
    };
}

export function CreateWorkspaceSubscriptionBodyToJSON(json: any): CreateWorkspaceSubscriptionBody {
    return CreateWorkspaceSubscriptionBodyToJSONTyped(json, false);
}

export function CreateWorkspaceSubscriptionBodyToJSONTyped(value?: CreateWorkspaceSubscriptionBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'currency': value['currency'],
        'interval': value['interval'],
        'plan': value['plan'],
        'return_to': value['return_to'],
    };
}

