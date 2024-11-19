/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.12
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Registration Flow with OpenID Connect Method
 * @export
 * @interface UpdateRegistrationFlowWithOidcMethod
 */
export interface UpdateRegistrationFlowWithOidcMethod {
    /**
     * The CSRF Token
     * @type {string}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    csrf_token?: string;
    /**
     * IDToken is an optional id token provided by an OIDC provider
     * 
     * If submitted, it is verified using the OIDC provider's public key set and the claims are used to populate
     * the OIDC credentials of the identity.
     * If the OIDC provider does not store additional claims (such as name, etc.) in the IDToken itself, you can use
     * the `traits` field to populate the identity's traits. Note, that Apple only includes the users email in the IDToken.
     * 
     * Supported providers are
     * Apple
     * Google
     * @type {string}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    id_token?: string;
    /**
     * IDTokenNonce is the nonce, used when generating the IDToken.
     * If the provider supports nonce validation, the nonce will be validated against this value and is required.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    id_token_nonce?: string;
    /**
     * Method to use
     * 
     * This field must be set to `oidc` when using the oidc method.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    method: string;
    /**
     * The provider to register with
     * @type {string}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    provider: string;
    /**
     * The identity traits
     * @type {object}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    traits?: object;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    transient_payload?: object;
    /**
     * UpstreamParameters are the parameters that are passed to the upstream identity provider.
     * 
     * These parameters are optional and depend on what the upstream identity provider supports.
     * Supported parameters are:
     * `login_hint` (string): The `login_hint` parameter suppresses the account chooser and either pre-fills the email box on the sign-in form, or selects the proper session.
     * `hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.
     * `prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.
     * @type {object}
     * @memberof UpdateRegistrationFlowWithOidcMethod
     */
    upstream_parameters?: object;
}

/**
 * Check if a given object implements the UpdateRegistrationFlowWithOidcMethod interface.
 */
export function instanceOfUpdateRegistrationFlowWithOidcMethod(value: object): value is UpdateRegistrationFlowWithOidcMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('provider' in value) || value['provider'] === undefined) return false;
    return true;
}

export function UpdateRegistrationFlowWithOidcMethodFromJSON(json: any): UpdateRegistrationFlowWithOidcMethod {
    return UpdateRegistrationFlowWithOidcMethodFromJSONTyped(json, false);
}

export function UpdateRegistrationFlowWithOidcMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRegistrationFlowWithOidcMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'id_token': json['id_token'] == null ? undefined : json['id_token'],
        'id_token_nonce': json['id_token_nonce'] == null ? undefined : json['id_token_nonce'],
        'method': json['method'],
        'provider': json['provider'],
        'traits': json['traits'] == null ? undefined : json['traits'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
        'upstream_parameters': json['upstream_parameters'] == null ? undefined : json['upstream_parameters'],
    };
}

export function UpdateRegistrationFlowWithOidcMethodToJSON(value?: UpdateRegistrationFlowWithOidcMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'csrf_token': value['csrf_token'],
        'id_token': value['id_token'],
        'id_token_nonce': value['id_token_nonce'],
        'method': value['method'],
        'provider': value['provider'],
        'traits': value['traits'],
        'transient_payload': value['transient_payload'],
        'upstream_parameters': value['upstream_parameters'],
    };
}

