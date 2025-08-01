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
/**
 * 
 * @export
 * @interface AcceptOAuth2ConsentRequestSession
 */
export interface AcceptOAuth2ConsentRequestSession {
    /**
     * AccessToken sets session data for the access and refresh token, as well as any future tokens issued by the
     * refresh grant. Keep in mind that this data will be available to anyone performing OAuth 2.0 Challenge Introspection.
     * If only your services can perform OAuth 2.0 Challenge Introspection, this is usually fine. But if third parties
     * can access that endpoint as well, sensitive data from the session might be exposed to them. Use with care!
     * @type {any}
     * @memberof AcceptOAuth2ConsentRequestSession
     */
    access_token?: any | null;
    /**
     * IDToken sets session data for the OpenID Connect ID token. Keep in mind that the session'id payloads are readable
     * by anyone that has access to the ID Challenge. Use with care!
     * @type {any}
     * @memberof AcceptOAuth2ConsentRequestSession
     */
    id_token?: any | null;
}

/**
 * Check if a given object implements the AcceptOAuth2ConsentRequestSession interface.
 */
export function instanceOfAcceptOAuth2ConsentRequestSession(value: object): value is AcceptOAuth2ConsentRequestSession {
    return true;
}

export function AcceptOAuth2ConsentRequestSessionFromJSON(json: any): AcceptOAuth2ConsentRequestSession {
    return AcceptOAuth2ConsentRequestSessionFromJSONTyped(json, false);
}

export function AcceptOAuth2ConsentRequestSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptOAuth2ConsentRequestSession {
    if (json == null) {
        return json;
    }
    return {
        
        'access_token': json['access_token'] == null ? undefined : json['access_token'],
        'id_token': json['id_token'] == null ? undefined : json['id_token'],
    };
}

export function AcceptOAuth2ConsentRequestSessionToJSON(json: any): AcceptOAuth2ConsentRequestSession {
    return AcceptOAuth2ConsentRequestSessionToJSONTyped(json, false);
}

export function AcceptOAuth2ConsentRequestSessionToJSONTyped(value?: AcceptOAuth2ConsentRequestSession | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'access_token': value['access_token'],
        'id_token': value['id_token'],
    };
}

