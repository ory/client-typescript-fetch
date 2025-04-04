/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.3
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
 * @interface LineItemV1
 */
export interface LineItemV1 {
    /**
     * 
     * @type {number}
     * @memberof LineItemV1
     */
    amount_in_cent?: number;
    /**
     * 
     * @type {string}
     * @memberof LineItemV1
     */
    description?: string;
    /**
     * Each line item can have sub-items to create a hierarchy.
     * @type {Array<LineItemV1>}
     * @memberof LineItemV1
     */
    items?: Array<LineItemV1>;
    /**
     * 
     * @type {number}
     * @memberof LineItemV1
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof LineItemV1
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof LineItemV1
     */
    unit_price?: string;
}

/**
 * Check if a given object implements the LineItemV1 interface.
 */
export function instanceOfLineItemV1(value: object): value is LineItemV1 {
    return true;
}

export function LineItemV1FromJSON(json: any): LineItemV1 {
    return LineItemV1FromJSONTyped(json, false);
}

export function LineItemV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'amount_in_cent': json['amount_in_cent'] == null ? undefined : json['amount_in_cent'],
        'description': json['description'] == null ? undefined : json['description'],
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(LineItemV1FromJSON)),
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'title': json['title'] == null ? undefined : json['title'],
        'unit_price': json['unit_price'] == null ? undefined : json['unit_price'],
    };
}

export function LineItemV1ToJSON(json: any): LineItemV1 {
    return LineItemV1ToJSONTyped(json, false);
}

export function LineItemV1ToJSONTyped(value?: LineItemV1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount_in_cent': value['amount_in_cent'],
        'description': value['description'],
        'items': value['items'] == null ? undefined : ((value['items'] as Array<any>).map(LineItemV1ToJSON)),
        'quantity': value['quantity'],
        'title': value['title'],
        'unit_price': value['unit_price'],
    };
}

