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
import type { OAuth2Client } from './OAuth2Client';
import {
    OAuth2ClientFromJSON,
    OAuth2ClientFromJSONTyped,
    OAuth2ClientToJSON,
    OAuth2ClientToJSONTyped,
} from './OAuth2Client';

/**
 * 
 * @export
 * @interface VerifyUserCodeRequest
 */
export interface VerifyUserCodeRequest {
    /**
     * ID is the identifier ("device challenge") of the device request. It is used to
     * identify the session.
     * @type {string}
     * @memberof VerifyUserCodeRequest
     */
    challenge?: string;
    /**
     * 
     * @type {OAuth2Client}
     * @memberof VerifyUserCodeRequest
     */
    client?: OAuth2Client;
    /**
     * 
     * @type {string}
     * @memberof VerifyUserCodeRequest
     */
    device_code_request_id?: string;
    /**
     * 
     * @type {Date}
     * @memberof VerifyUserCodeRequest
     */
    handled_at?: Date;
    /**
     * RequestURL is the original Device Authorization URL requested.
     * @type {string}
     * @memberof VerifyUserCodeRequest
     */
    request_url?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof VerifyUserCodeRequest
     */
    requested_access_token_audience?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof VerifyUserCodeRequest
     */
    requested_scope?: Array<string>;
}

/**
 * Check if a given object implements the VerifyUserCodeRequest interface.
 */
export function instanceOfVerifyUserCodeRequest(value: object): value is VerifyUserCodeRequest {
    return true;
}

export function VerifyUserCodeRequestFromJSON(json: any): VerifyUserCodeRequest {
    return VerifyUserCodeRequestFromJSONTyped(json, false);
}

export function VerifyUserCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyUserCodeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'challenge': json['challenge'] == null ? undefined : json['challenge'],
        'client': json['client'] == null ? undefined : OAuth2ClientFromJSON(json['client']),
        'device_code_request_id': json['device_code_request_id'] == null ? undefined : json['device_code_request_id'],
        'handled_at': json['handled_at'] == null ? undefined : (new Date(json['handled_at'])),
        'request_url': json['request_url'] == null ? undefined : json['request_url'],
        'requested_access_token_audience': json['requested_access_token_audience'] == null ? undefined : json['requested_access_token_audience'],
        'requested_scope': json['requested_scope'] == null ? undefined : json['requested_scope'],
    };
}

export function VerifyUserCodeRequestToJSON(json: any): VerifyUserCodeRequest {
    return VerifyUserCodeRequestToJSONTyped(json, false);
}

export function VerifyUserCodeRequestToJSONTyped(value?: VerifyUserCodeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'challenge': value['challenge'],
        'client': OAuth2ClientToJSON(value['client']),
        'device_code_request_id': value['device_code_request_id'],
        'handled_at': value['handled_at'] == null ? undefined : ((value['handled_at']).toISOString()),
        'request_url': value['request_url'],
        'requested_access_token_audience': value['requested_access_token_audience'],
        'requested_scope': value['requested_scope'],
    };
}

