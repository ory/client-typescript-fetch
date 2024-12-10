/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.15
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { InvoiceDataV1 } from './InvoiceDataV1';
import {
    InvoiceDataV1FromJSON,
    InvoiceDataV1FromJSONTyped,
    InvoiceDataV1ToJSON,
} from './InvoiceDataV1';

/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * The ID of the invoice.
     * @type {string}
     * @memberof Invoice
     */
    readonly id: string;
    /**
     * 
     * @type {Date}
     * @memberof Invoice
     */
    invoiced_at: Date;
    /**
     * Type is the type of the invoice.
     * usage InvoiceTypeUsage
     * base InvoiceTypeBase
     * @type {string}
     * @memberof Invoice
     */
    readonly type: InvoiceTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof Invoice
     */
    updated_at?: Date;
    /**
     * 
     * @type {InvoiceDataV1}
     * @memberof Invoice
     */
    v1?: InvoiceDataV1;
}


/**
 * @export
 */
export const InvoiceTypeEnum = {
    Usage: 'usage',
    Base: 'base'
} as const;
export type InvoiceTypeEnum = typeof InvoiceTypeEnum[keyof typeof InvoiceTypeEnum];


/**
 * Check if a given object implements the Invoice interface.
 */
export function instanceOfInvoice(value: object): value is Invoice {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('invoiced_at' in value) || value['invoiced_at'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function InvoiceFromJSON(json: any): Invoice {
    return InvoiceFromJSONTyped(json, false);
}

export function InvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoice {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'invoiced_at': (new Date(json['invoiced_at'])),
        'type': json['type'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'v1': json['v1'] == null ? undefined : InvoiceDataV1FromJSON(json['v1']),
    };
}

export function InvoiceToJSON(value?: Omit<Invoice, 'id'|'type'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'invoiced_at': ((value['invoiced_at']).toISOString()),
        'updated_at': value['updated_at'] == null ? undefined : ((value['updated_at']).toISOString()),
        'v1': InvoiceDataV1ToJSON(value['v1']),
    };
}

