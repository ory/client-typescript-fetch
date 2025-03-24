/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.19.0
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * OAuth2 Token Exchange Result
 * @export
 * @interface OAuth2TokenExchange
 */
export interface OAuth2TokenExchange {
    /**
     * The access token issued by the authorization server.
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    access_token?: string;
    /**
     * The lifetime in seconds of the access token. For
     * example, the value "3600" denotes that the access token will
     * expire in one hour from the time the response was generated.
     * @type {number}
     * @memberof OAuth2TokenExchange
     */
    expires_in?: number;
    /**
     * To retrieve a refresh token request the id_token scope.
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    id_token?: string;
    /**
     * The refresh token, which can be used to obtain new
     * access tokens. To retrieve it add the scope "offline" to your access token request.
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    refresh_token?: string;
    /**
     * The scope of the access token
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    scope?: string;
    /**
     * The type of the token issued
     * @type {string}
     * @memberof OAuth2TokenExchange
     */
    token_type?: string;
}

/**
 * Check if a given object implements the OAuth2TokenExchange interface.
 */
export function instanceOfOAuth2TokenExchange(value: object): value is OAuth2TokenExchange {
    return true;
}

export function OAuth2TokenExchangeFromJSON(json: any): OAuth2TokenExchange {
    return OAuth2TokenExchangeFromJSONTyped(json, false);
}

export function OAuth2TokenExchangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2TokenExchange {
    if (json == null) {
        return json;
    }
    return {
        
        'access_token': json['access_token'] == null ? undefined : json['access_token'],
        'expires_in': json['expires_in'] == null ? undefined : json['expires_in'],
        'id_token': json['id_token'] == null ? undefined : json['id_token'],
        'refresh_token': json['refresh_token'] == null ? undefined : json['refresh_token'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'token_type': json['token_type'] == null ? undefined : json['token_type'],
    };
}

export function OAuth2TokenExchangeToJSON(json: any): OAuth2TokenExchange {
    return OAuth2TokenExchangeToJSONTyped(json, false);
}

export function OAuth2TokenExchangeToJSONTyped(value?: OAuth2TokenExchange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'access_token': value['access_token'],
        'expires_in': value['expires_in'],
        'id_token': value['id_token'],
        'refresh_token': value['refresh_token'],
        'scope': value['scope'],
        'token_type': value['token_type'],
    };
}

