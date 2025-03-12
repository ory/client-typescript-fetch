/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.18.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GenericErrorContent } from './GenericErrorContent';
import {
    GenericErrorContentFromJSON,
    GenericErrorContentFromJSONTyped,
    GenericErrorContentToJSON,
    GenericErrorContentToJSONTyped,
} from './GenericErrorContent';

/**
 * Error responses are sent when an error (e.g. unauthorized, bad request, ...) occurred.
 * @export
 * @interface GenericError
 */
export interface GenericError {
    /**
     * The status code
     * @type {number}
     * @memberof GenericError
     */
    code?: number;
    /**
     * Debug information
     * 
     * This field is often not exposed to protect against leaking
     * sensitive information.
     * @type {string}
     * @memberof GenericError
     */
    debug?: string;
    /**
     * Further error details
     * @type {any}
     * @memberof GenericError
     */
    details?: any | null;
    /**
     * 
     * @type {GenericErrorContent}
     * @memberof GenericError
     */
    error?: GenericErrorContent;
    /**
     * The error ID
     * 
     * Useful when trying to identify various errors in application logic.
     * @type {string}
     * @memberof GenericError
     */
    id?: string;
    /**
     * Error message
     * 
     * The error's message.
     * @type {string}
     * @memberof GenericError
     */
    message: string;
    /**
     * A human-readable reason for the error
     * @type {string}
     * @memberof GenericError
     */
    reason?: string;
    /**
     * The request ID
     * 
     * The request ID is often exposed internally in order to trace
     * errors across service architectures. This is often a UUID.
     * @type {string}
     * @memberof GenericError
     */
    request?: string;
    /**
     * The status description
     * @type {string}
     * @memberof GenericError
     */
    status?: string;
}

/**
 * Check if a given object implements the GenericError interface.
 */
export function instanceOfGenericError(value: object): value is GenericError {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function GenericErrorFromJSON(json: any): GenericError {
    return GenericErrorFromJSONTyped(json, false);
}

export function GenericErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericError {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'debug': json['debug'] == null ? undefined : json['debug'],
        'details': json['details'] == null ? undefined : json['details'],
        'error': json['error'] == null ? undefined : GenericErrorContentFromJSON(json['error']),
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'request': json['request'] == null ? undefined : json['request'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function GenericErrorToJSON(json: any): GenericError {
    return GenericErrorToJSONTyped(json, false);
}

export function GenericErrorToJSONTyped(value?: GenericError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'debug': value['debug'],
        'details': value['details'],
        'error': GenericErrorContentToJSON(value['error']),
        'id': value['id'],
        'message': value['message'],
        'reason': value['reason'],
        'request': value['request'],
        'status': value['status'],
    };
}

