/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.14
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Login flow using the code method
 * @export
 * @interface UpdateLoginFlowWithCodeMethod
 */
export interface UpdateLoginFlowWithCodeMethod {
    /**
     * Address is the address to send the code to, in case that there are multiple addresses. This field
     * is only used in two-factor flows and is ineffective for passwordless flows.
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    address?: string;
    /**
     * Code is the 6 digits code sent to the user
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    code?: string;
    /**
     * CSRFToken is the anti-CSRF token
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    csrf_token: string;
    /**
     * Identifier is the code identifier
     * The identifier requires that the user has already completed the registration or settings with code flow.
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    identifier?: string;
    /**
     * Method should be set to "code" when logging in using the code strategy.
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    method: string;
    /**
     * Resend is set when the user wants to resend the code
     * @type {string}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    resend?: string;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateLoginFlowWithCodeMethod
     */
    transient_payload?: object;
}

/**
 * Check if a given object implements the UpdateLoginFlowWithCodeMethod interface.
 */
export function instanceOfUpdateLoginFlowWithCodeMethod(value: object): value is UpdateLoginFlowWithCodeMethod {
    if (!('csrf_token' in value) || value['csrf_token'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function UpdateLoginFlowWithCodeMethodFromJSON(json: any): UpdateLoginFlowWithCodeMethod {
    return UpdateLoginFlowWithCodeMethodFromJSONTyped(json, false);
}

export function UpdateLoginFlowWithCodeMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowWithCodeMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : json['address'],
        'code': json['code'] == null ? undefined : json['code'],
        'csrf_token': json['csrf_token'],
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'method': json['method'],
        'resend': json['resend'] == null ? undefined : json['resend'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
    };
}

export function UpdateLoginFlowWithCodeMethodToJSON(value?: UpdateLoginFlowWithCodeMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': value['address'],
        'code': value['code'],
        'csrf_token': value['csrf_token'],
        'identifier': value['identifier'],
        'method': value['method'],
        'resend': value['resend'],
        'transient_payload': value['transient_payload'],
    };
}

