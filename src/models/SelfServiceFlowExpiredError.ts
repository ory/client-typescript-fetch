/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.17.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GenericError } from './GenericError';
import {
    GenericErrorFromJSON,
    GenericErrorFromJSONTyped,
    GenericErrorToJSON,
} from './GenericError';

/**
 * Is sent when a flow is expired
 * @export
 * @interface SelfServiceFlowExpiredError
 */
export interface SelfServiceFlowExpiredError {
    /**
     * 
     * @type {GenericError}
     * @memberof SelfServiceFlowExpiredError
     */
    error?: GenericError;
    /**
     * When the flow has expired
     * @type {Date}
     * @memberof SelfServiceFlowExpiredError
     */
    expired_at?: Date;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof SelfServiceFlowExpiredError
     */
    since?: number;
    /**
     * The flow ID that should be used for the new flow as it contains the correct messages.
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    use_flow_id?: string;
}

/**
 * Check if a given object implements the SelfServiceFlowExpiredError interface.
 */
export function instanceOfSelfServiceFlowExpiredError(value: object): value is SelfServiceFlowExpiredError {
    return true;
}

export function SelfServiceFlowExpiredErrorFromJSON(json: any): SelfServiceFlowExpiredError {
    return SelfServiceFlowExpiredErrorFromJSONTyped(json, false);
}

export function SelfServiceFlowExpiredErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfServiceFlowExpiredError {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : GenericErrorFromJSON(json['error']),
        'expired_at': json['expired_at'] == null ? undefined : (new Date(json['expired_at'])),
        'since': json['since'] == null ? undefined : json['since'],
        'use_flow_id': json['use_flow_id'] == null ? undefined : json['use_flow_id'],
    };
}

export function SelfServiceFlowExpiredErrorToJSON(value?: SelfServiceFlowExpiredError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': GenericErrorToJSON(value['error']),
        'expired_at': value['expired_at'] == null ? undefined : ((value['expired_at']).toISOString()),
        'since': value['since'],
        'use_flow_id': value['use_flow_id'],
    };
}

