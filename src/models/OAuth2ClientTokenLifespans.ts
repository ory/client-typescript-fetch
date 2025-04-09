/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Lifespans of different token types issued for this OAuth 2.0 Client.
 * @export
 * @interface OAuth2ClientTokenLifespans
 */
export interface OAuth2ClientTokenLifespans {
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    authorization_code_grant_access_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    authorization_code_grant_id_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    authorization_code_grant_refresh_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    client_credentials_grant_access_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    implicit_grant_access_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    implicit_grant_id_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    jwt_bearer_grant_access_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    refresh_token_grant_access_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    refresh_token_grant_id_token_lifespan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth2ClientTokenLifespans
     */
    refresh_token_grant_refresh_token_lifespan?: string | null;
}

/**
 * Check if a given object implements the OAuth2ClientTokenLifespans interface.
 */
export function instanceOfOAuth2ClientTokenLifespans(value: object): value is OAuth2ClientTokenLifespans {
    return true;
}

export function OAuth2ClientTokenLifespansFromJSON(json: any): OAuth2ClientTokenLifespans {
    return OAuth2ClientTokenLifespansFromJSONTyped(json, false);
}

export function OAuth2ClientTokenLifespansFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2ClientTokenLifespans {
    if (json == null) {
        return json;
    }
    return {
        
        'authorization_code_grant_access_token_lifespan': json['authorization_code_grant_access_token_lifespan'] == null ? undefined : json['authorization_code_grant_access_token_lifespan'],
        'authorization_code_grant_id_token_lifespan': json['authorization_code_grant_id_token_lifespan'] == null ? undefined : json['authorization_code_grant_id_token_lifespan'],
        'authorization_code_grant_refresh_token_lifespan': json['authorization_code_grant_refresh_token_lifespan'] == null ? undefined : json['authorization_code_grant_refresh_token_lifespan'],
        'client_credentials_grant_access_token_lifespan': json['client_credentials_grant_access_token_lifespan'] == null ? undefined : json['client_credentials_grant_access_token_lifespan'],
        'implicit_grant_access_token_lifespan': json['implicit_grant_access_token_lifespan'] == null ? undefined : json['implicit_grant_access_token_lifespan'],
        'implicit_grant_id_token_lifespan': json['implicit_grant_id_token_lifespan'] == null ? undefined : json['implicit_grant_id_token_lifespan'],
        'jwt_bearer_grant_access_token_lifespan': json['jwt_bearer_grant_access_token_lifespan'] == null ? undefined : json['jwt_bearer_grant_access_token_lifespan'],
        'refresh_token_grant_access_token_lifespan': json['refresh_token_grant_access_token_lifespan'] == null ? undefined : json['refresh_token_grant_access_token_lifespan'],
        'refresh_token_grant_id_token_lifespan': json['refresh_token_grant_id_token_lifespan'] == null ? undefined : json['refresh_token_grant_id_token_lifespan'],
        'refresh_token_grant_refresh_token_lifespan': json['refresh_token_grant_refresh_token_lifespan'] == null ? undefined : json['refresh_token_grant_refresh_token_lifespan'],
    };
}

export function OAuth2ClientTokenLifespansToJSON(json: any): OAuth2ClientTokenLifespans {
    return OAuth2ClientTokenLifespansToJSONTyped(json, false);
}

export function OAuth2ClientTokenLifespansToJSONTyped(value?: OAuth2ClientTokenLifespans | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'authorization_code_grant_access_token_lifespan': value['authorization_code_grant_access_token_lifespan'],
        'authorization_code_grant_id_token_lifespan': value['authorization_code_grant_id_token_lifespan'],
        'authorization_code_grant_refresh_token_lifespan': value['authorization_code_grant_refresh_token_lifespan'],
        'client_credentials_grant_access_token_lifespan': value['client_credentials_grant_access_token_lifespan'],
        'implicit_grant_access_token_lifespan': value['implicit_grant_access_token_lifespan'],
        'implicit_grant_id_token_lifespan': value['implicit_grant_id_token_lifespan'],
        'jwt_bearer_grant_access_token_lifespan': value['jwt_bearer_grant_access_token_lifespan'],
        'refresh_token_grant_access_token_lifespan': value['refresh_token_grant_access_token_lifespan'],
        'refresh_token_grant_id_token_lifespan': value['refresh_token_grant_id_token_lifespan'],
        'refresh_token_grant_refresh_token_lifespan': value['refresh_token_grant_refresh_token_lifespan'],
    };
}

