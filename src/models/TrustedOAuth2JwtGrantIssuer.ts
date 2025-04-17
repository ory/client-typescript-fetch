/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TrustedOAuth2JwtGrantJsonWebKey } from './TrustedOAuth2JwtGrantJsonWebKey';
import {
    TrustedOAuth2JwtGrantJsonWebKeyFromJSON,
    TrustedOAuth2JwtGrantJsonWebKeyFromJSONTyped,
    TrustedOAuth2JwtGrantJsonWebKeyToJSON,
    TrustedOAuth2JwtGrantJsonWebKeyToJSONTyped,
} from './TrustedOAuth2JwtGrantJsonWebKey';

/**
 * OAuth2 JWT Bearer Grant Type Issuer Trust Relationship
 * @export
 * @interface TrustedOAuth2JwtGrantIssuer
 */
export interface TrustedOAuth2JwtGrantIssuer {
    /**
     * The "allow_any_subject" indicates that the issuer is allowed to have any principal as the subject of the JWT.
     * @type {boolean}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    allow_any_subject?: boolean;
    /**
     * The "created_at" indicates, when grant was created.
     * @type {Date}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    created_at?: Date;
    /**
     * The "expires_at" indicates, when grant will expire, so we will reject assertion from "issuer" targeting "subject".
     * @type {Date}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    expires_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    id?: string;
    /**
     * The "issuer" identifies the principal that issued the JWT assertion (same as "iss" claim in JWT).
     * @type {string}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    issuer?: string;
    /**
     * 
     * @type {TrustedOAuth2JwtGrantJsonWebKey}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    public_key?: TrustedOAuth2JwtGrantJsonWebKey;
    /**
     * The "scope" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])
     * @type {Array<string>}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    scope?: Array<string>;
    /**
     * The "subject" identifies the principal that is the subject of the JWT.
     * @type {string}
     * @memberof TrustedOAuth2JwtGrantIssuer
     */
    subject?: string;
}

/**
 * Check if a given object implements the TrustedOAuth2JwtGrantIssuer interface.
 */
export function instanceOfTrustedOAuth2JwtGrantIssuer(value: object): value is TrustedOAuth2JwtGrantIssuer {
    return true;
}

export function TrustedOAuth2JwtGrantIssuerFromJSON(json: any): TrustedOAuth2JwtGrantIssuer {
    return TrustedOAuth2JwtGrantIssuerFromJSONTyped(json, false);
}

export function TrustedOAuth2JwtGrantIssuerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrustedOAuth2JwtGrantIssuer {
    if (json == null) {
        return json;
    }
    return {
        
        'allow_any_subject': json['allow_any_subject'] == null ? undefined : json['allow_any_subject'],
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'expires_at': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'id': json['id'] == null ? undefined : json['id'],
        'issuer': json['issuer'] == null ? undefined : json['issuer'],
        'public_key': json['public_key'] == null ? undefined : TrustedOAuth2JwtGrantJsonWebKeyFromJSON(json['public_key']),
        'scope': json['scope'] == null ? undefined : json['scope'],
        'subject': json['subject'] == null ? undefined : json['subject'],
    };
}

export function TrustedOAuth2JwtGrantIssuerToJSON(json: any): TrustedOAuth2JwtGrantIssuer {
    return TrustedOAuth2JwtGrantIssuerToJSONTyped(json, false);
}

export function TrustedOAuth2JwtGrantIssuerToJSONTyped(value?: TrustedOAuth2JwtGrantIssuer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'allow_any_subject': value['allow_any_subject'],
        'created_at': value['created_at'] == null ? undefined : ((value['created_at']).toISOString()),
        'expires_at': value['expires_at'] == null ? undefined : ((value['expires_at']).toISOString()),
        'id': value['id'],
        'issuer': value['issuer'],
        'public_key': TrustedOAuth2JwtGrantJsonWebKeyToJSON(value['public_key']),
        'scope': value['scope'],
        'subject': value['subject'],
    };
}

