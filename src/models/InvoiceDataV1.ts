/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.10
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TaxLineItem } from './TaxLineItem';
import {
    TaxLineItemFromJSON,
    TaxLineItemFromJSONTyped,
    TaxLineItemToJSON,
} from './TaxLineItem';
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './TimeInterval';
import type { LineItemV1 } from './LineItemV1';
import {
    LineItemV1FromJSON,
    LineItemV1FromJSONTyped,
    LineItemV1ToJSON,
} from './LineItemV1';

/**
 * 
 * @export
 * @interface InvoiceDataV1
 */
export interface InvoiceDataV1 {
    /**
     * 
     * @type {TimeInterval}
     * @memberof InvoiceDataV1
     */
    billing_period: TimeInterval;
    /**
     * The currency of the invoice.
     * @type {string}
     * @memberof InvoiceDataV1
     */
    readonly currency: string;
    /**
     * The items that are part of this invoice.
     * @type {Array<LineItemV1>}
     * @memberof InvoiceDataV1
     */
    readonly items: Array<LineItemV1>;
    /**
     * The plan that this invoice is based on.
     * @type {string}
     * @memberof InvoiceDataV1
     */
    readonly plan?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceDataV1
     */
    stripe_invoice_item?: string;
    /**
     * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
     * @type {string}
     * @memberof InvoiceDataV1
     */
    stripe_invoice_status?: string;
    /**
     * An optional link to the invoice on Stripe.
     * @type {string}
     * @memberof InvoiceDataV1
     */
    readonly stripe_link?: string;
    /**
     * The subtitle of the invoice.
     * @type {string}
     * @memberof InvoiceDataV1
     */
    readonly subtitle?: string;
    /**
     * 
     * @type {TaxLineItem}
     * @memberof InvoiceDataV1
     */
    tax?: TaxLineItem;
    /**
     * The title of the invoice.
     * @type {string}
     * @memberof InvoiceDataV1
     */
    readonly title: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceDataV1
     */
    total_in_cent: number;
}

/**
 * Check if a given object implements the InvoiceDataV1 interface.
 */
export function instanceOfInvoiceDataV1(value: object): value is InvoiceDataV1 {
    if (!('billing_period' in value) || value['billing_period'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('total_in_cent' in value) || value['total_in_cent'] === undefined) return false;
    return true;
}

export function InvoiceDataV1FromJSON(json: any): InvoiceDataV1 {
    return InvoiceDataV1FromJSONTyped(json, false);
}

export function InvoiceDataV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceDataV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'billing_period': TimeIntervalFromJSON(json['billing_period']),
        'currency': json['currency'],
        'items': ((json['items'] as Array<any>).map(LineItemV1FromJSON)),
        'plan': json['plan'] == null ? undefined : json['plan'],
        'stripe_invoice_item': json['stripe_invoice_item'] == null ? undefined : json['stripe_invoice_item'],
        'stripe_invoice_status': json['stripe_invoice_status'] == null ? undefined : json['stripe_invoice_status'],
        'stripe_link': json['stripe_link'] == null ? undefined : json['stripe_link'],
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
        'tax': json['tax'] == null ? undefined : TaxLineItemFromJSON(json['tax']),
        'title': json['title'],
        'total_in_cent': json['total_in_cent'],
    };
}

export function InvoiceDataV1ToJSON(value?: Omit<InvoiceDataV1, 'currency'|'items'|'plan'|'stripe_link'|'subtitle'|'title'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'billing_period': TimeIntervalToJSON(value['billing_period']),
        'stripe_invoice_item': value['stripe_invoice_item'],
        'stripe_invoice_status': value['stripe_invoice_status'],
        'tax': TaxLineItemToJSON(value['tax']),
        'total_in_cent': value['total_in_cent'],
    };
}

