/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Invoice } from './Invoice';
import {
    InvoiceFromJSON,
    InvoiceFromJSONTyped,
    InvoiceToJSON,
} from './Invoice';
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './TimeInterval';

/**
 * 
 * @export
 * @interface BillingPeriodBucket
 */
export interface BillingPeriodBucket {
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof BillingPeriodBucket
     */
    base_invoices?: Array<Invoice>;
    /**
     * 
     * @type {TimeInterval}
     * @memberof BillingPeriodBucket
     */
    billing_period?: TimeInterval;
    /**
     * 
     * @type {Invoice}
     * @memberof BillingPeriodBucket
     */
    usage_invoice?: Invoice;
}

/**
 * Check if a given object implements the BillingPeriodBucket interface.
 */
export function instanceOfBillingPeriodBucket(value: object): value is BillingPeriodBucket {
    return true;
}

export function BillingPeriodBucketFromJSON(json: any): BillingPeriodBucket {
    return BillingPeriodBucketFromJSONTyped(json, false);
}

export function BillingPeriodBucketFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingPeriodBucket {
    if (json == null) {
        return json;
    }
    return {
        
        'base_invoices': json['base_invoices'] == null ? undefined : ((json['base_invoices'] as Array<any>).map(InvoiceFromJSON)),
        'billing_period': json['billing_period'] == null ? undefined : TimeIntervalFromJSON(json['billing_period']),
        'usage_invoice': json['usage_invoice'] == null ? undefined : InvoiceFromJSON(json['usage_invoice']),
    };
}

export function BillingPeriodBucketToJSON(value?: BillingPeriodBucket | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'base_invoices': value['base_invoices'] == null ? undefined : ((value['base_invoices'] as Array<any>).map(InvoiceToJSON)),
        'billing_period': TimeIntervalToJSON(value['billing_period']),
        'usage_invoice': InvoiceToJSON(value['usage_invoice']),
    };
}

