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
/**
 * Update Settings Flow with OpenID Connect Method
 * @export
 * @interface UpdateSettingsFlowWithOidcMethod
 */
export interface UpdateSettingsFlowWithOidcMethod {
    /**
     * Flow ID is the flow's ID.
     * 
     * in: query
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    flow?: string;
    /**
     * Link this provider
     * 
     * Either this or `unlink` must be set.
     * 
     * type: string
     * in: body
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    link?: string;
    /**
     * Method
     * 
     * Should be set to profile when trying to update a profile.
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    method: string;
    /**
     * The identity's traits
     * 
     * in: body
     * @type {object}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    traits?: object;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    transient_payload?: object;
    /**
     * Unlink this provider
     * 
     * Either this or `link` must be set.
     * 
     * type: string
     * in: body
     * @type {string}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    unlink?: string;
    /**
     * UpstreamParameters are the parameters that are passed to the upstream identity provider.
     * 
     * These parameters are optional and depend on what the upstream identity provider supports.
     * Supported parameters are:
     * `login_hint` (string): The `login_hint` parameter suppresses the account chooser and either pre-fills the email box on the sign-in form, or selects the proper session.
     * `hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.
     * `prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.
     * @type {object}
     * @memberof UpdateSettingsFlowWithOidcMethod
     */
    upstream_parameters?: object;
}

/**
 * Check if a given object implements the UpdateSettingsFlowWithOidcMethod interface.
 */
export function instanceOfUpdateSettingsFlowWithOidcMethod(value: object): value is UpdateSettingsFlowWithOidcMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function UpdateSettingsFlowWithOidcMethodFromJSON(json: any): UpdateSettingsFlowWithOidcMethod {
    return UpdateSettingsFlowWithOidcMethodFromJSONTyped(json, false);
}

export function UpdateSettingsFlowWithOidcMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSettingsFlowWithOidcMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'flow': json['flow'] == null ? undefined : json['flow'],
        'link': json['link'] == null ? undefined : json['link'],
        'method': json['method'],
        'traits': json['traits'] == null ? undefined : json['traits'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
        'unlink': json['unlink'] == null ? undefined : json['unlink'],
        'upstream_parameters': json['upstream_parameters'] == null ? undefined : json['upstream_parameters'],
    };
}

export function UpdateSettingsFlowWithOidcMethodToJSON(json: any): UpdateSettingsFlowWithOidcMethod {
    return UpdateSettingsFlowWithOidcMethodToJSONTyped(json, false);
}

export function UpdateSettingsFlowWithOidcMethodToJSONTyped(value?: UpdateSettingsFlowWithOidcMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'flow': value['flow'],
        'link': value['link'],
        'method': value['method'],
        'traits': value['traits'],
        'transient_payload': value['transient_payload'],
        'unlink': value['unlink'],
        'upstream_parameters': value['upstream_parameters'],
    };
}

