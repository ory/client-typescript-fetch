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
import type { AuthenticatorAssuranceLevel } from './AuthenticatorAssuranceLevel';
import {
    AuthenticatorAssuranceLevelFromJSON,
    AuthenticatorAssuranceLevelFromJSONTyped,
    AuthenticatorAssuranceLevelToJSON,
    AuthenticatorAssuranceLevelToJSONTyped,
} from './AuthenticatorAssuranceLevel';

/**
 * A singular authenticator used during authentication / login.
 * @export
 * @interface SessionAuthenticationMethod
 */
export interface SessionAuthenticationMethod {
    /**
     * 
     * @type {AuthenticatorAssuranceLevel}
     * @memberof SessionAuthenticationMethod
     */
    aal?: AuthenticatorAssuranceLevel;
    /**
     * When the authentication challenge was completed.
     * @type {Date}
     * @memberof SessionAuthenticationMethod
     */
    completed_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionAuthenticationMethod
     */
    method?: SessionAuthenticationMethodMethodEnum;
    /**
     * The Organization id used for authentication
     * @type {string}
     * @memberof SessionAuthenticationMethod
     */
    organization?: string;
    /**
     * OIDC or SAML provider id used for authentication
     * @type {string}
     * @memberof SessionAuthenticationMethod
     */
    provider?: string;
}


/**
 * @export
 */
export const SessionAuthenticationMethodMethodEnum = {
    LinkRecovery: 'link_recovery',
    CodeRecovery: 'code_recovery',
    Password: 'password',
    Code: 'code',
    Totp: 'totp',
    Oidc: 'oidc',
    Webauthn: 'webauthn',
    LookupSecret: 'lookup_secret',
    V06LegacySession: 'v0.6_legacy_session',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type SessionAuthenticationMethodMethodEnum = typeof SessionAuthenticationMethodMethodEnum[keyof typeof SessionAuthenticationMethodMethodEnum];


/**
 * Check if a given object implements the SessionAuthenticationMethod interface.
 */
export function instanceOfSessionAuthenticationMethod(value: object): value is SessionAuthenticationMethod {
    return true;
}

export function SessionAuthenticationMethodFromJSON(json: any): SessionAuthenticationMethod {
    return SessionAuthenticationMethodFromJSONTyped(json, false);
}

export function SessionAuthenticationMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionAuthenticationMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'aal': json['aal'] == null ? undefined : AuthenticatorAssuranceLevelFromJSON(json['aal']),
        'completed_at': json['completed_at'] == null ? undefined : (new Date(json['completed_at'])),
        'method': json['method'] == null ? undefined : json['method'],
        'organization': json['organization'] == null ? undefined : json['organization'],
        'provider': json['provider'] == null ? undefined : json['provider'],
    };
}

export function SessionAuthenticationMethodToJSON(json: any): SessionAuthenticationMethod {
    return SessionAuthenticationMethodToJSONTyped(json, false);
}

export function SessionAuthenticationMethodToJSONTyped(value?: SessionAuthenticationMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aal': AuthenticatorAssuranceLevelToJSON(value['aal']),
        'completed_at': value['completed_at'] == null ? undefined : ((value['completed_at']).toISOString()),
        'method': value['method'],
        'organization': value['organization'],
        'provider': value['provider'],
    };
}

