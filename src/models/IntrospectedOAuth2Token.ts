/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Introspection contains an access token's session data as specified by
 * [IETF RFC 7662](https://tools.ietf.org/html/rfc7662)
 * @export
 * @interface IntrospectedOAuth2Token
 */
export interface IntrospectedOAuth2Token {
    /**
     * Active is a boolean indicator of whether or not the presented token
     * is currently active.  The specifics of a token's "active" state
     * will vary depending on the implementation of the authorization
     * server and the information it keeps about its tokens, but a "true"
     * value return for the "active" property will generally indicate
     * that a given token has been issued by this authorization server,
     * has not been revoked by the resource owner, and is within its
     * given time window of validity (e.g., after its issuance time and
     * before its expiration time).
     * @type {boolean}
     * @memberof IntrospectedOAuth2Token
     */
    active: boolean;
    /**
     * Audience contains a list of the token's intended audiences.
     * @type {Array<string>}
     * @memberof IntrospectedOAuth2Token
     */
    aud?: Array<string>;
    /**
     * ID is aclient identifier for the OAuth 2.0 client that
     * requested this token.
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    client_id?: string;
    /**
     * Expires at is an integer timestamp, measured in the number of seconds
     * since January 1 1970 UTC, indicating when this token will expire.
     * @type {number}
     * @memberof IntrospectedOAuth2Token
     */
    exp?: number;
    /**
     * Extra is arbitrary data set by the session.
     * @type {{ [key: string]: any; }}
     * @memberof IntrospectedOAuth2Token
     */
    ext?: { [key: string]: any; };
    /**
     * Issued at is an integer timestamp, measured in the number of seconds
     * since January 1 1970 UTC, indicating when this token was
     * originally issued.
     * @type {number}
     * @memberof IntrospectedOAuth2Token
     */
    iat?: number;
    /**
     * IssuerURL is a string representing the issuer of this token
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    iss?: string;
    /**
     * NotBefore is an integer timestamp, measured in the number of seconds
     * since January 1 1970 UTC, indicating when this token is not to be
     * used before.
     * @type {number}
     * @memberof IntrospectedOAuth2Token
     */
    nbf?: number;
    /**
     * ObfuscatedSubject is set when the subject identifier algorithm was set to "pairwise" during authorization.
     * It is the `sub` value of the ID Token that was issued.
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    obfuscated_subject?: string;
    /**
     * Scope is a JSON string containing a space-separated list of
     * scopes associated with this token.
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    scope?: string;
    /**
     * Subject of the token, as defined in JWT [RFC7519].
     * Usually a machine-readable identifier of the resource owner who
     * authorized this token.
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    sub?: string;
    /**
     * TokenType is the introspected token's type, typically `Bearer`.
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    token_type?: string;
    /**
     * TokenUse is the introspected token's use, for example `access_token` or `refresh_token`.
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    token_use?: string;
    /**
     * Username is a human-readable identifier for the resource owner who
     * authorized this token.
     * @type {string}
     * @memberof IntrospectedOAuth2Token
     */
    username?: string;
}

/**
 * Check if a given object implements the IntrospectedOAuth2Token interface.
 */
export function instanceOfIntrospectedOAuth2Token(value: object): value is IntrospectedOAuth2Token {
    if (!('active' in value) || value['active'] === undefined) return false;
    return true;
}

export function IntrospectedOAuth2TokenFromJSON(json: any): IntrospectedOAuth2Token {
    return IntrospectedOAuth2TokenFromJSONTyped(json, false);
}

export function IntrospectedOAuth2TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntrospectedOAuth2Token {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'],
        'aud': json['aud'] == null ? undefined : json['aud'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'exp': json['exp'] == null ? undefined : json['exp'],
        'ext': json['ext'] == null ? undefined : json['ext'],
        'iat': json['iat'] == null ? undefined : json['iat'],
        'iss': json['iss'] == null ? undefined : json['iss'],
        'nbf': json['nbf'] == null ? undefined : json['nbf'],
        'obfuscated_subject': json['obfuscated_subject'] == null ? undefined : json['obfuscated_subject'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'sub': json['sub'] == null ? undefined : json['sub'],
        'token_type': json['token_type'] == null ? undefined : json['token_type'],
        'token_use': json['token_use'] == null ? undefined : json['token_use'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function IntrospectedOAuth2TokenToJSON(value?: IntrospectedOAuth2Token | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'active': value['active'],
        'aud': value['aud'],
        'client_id': value['client_id'],
        'exp': value['exp'],
        'ext': value['ext'],
        'iat': value['iat'],
        'iss': value['iss'],
        'nbf': value['nbf'],
        'obfuscated_subject': value['obfuscated_subject'],
        'scope': value['scope'],
        'sub': value['sub'],
        'token_type': value['token_type'],
        'token_use': value['token_use'],
        'username': value['username'],
    };
}

