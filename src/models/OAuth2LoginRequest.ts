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
import type { OAuth2ConsentRequestOpenIDConnectContext } from './OAuth2ConsentRequestOpenIDConnectContext';
import {
    OAuth2ConsentRequestOpenIDConnectContextFromJSON,
    OAuth2ConsentRequestOpenIDConnectContextFromJSONTyped,
    OAuth2ConsentRequestOpenIDConnectContextToJSON,
} from './OAuth2ConsentRequestOpenIDConnectContext';
import type { OAuth2Client } from './OAuth2Client';
import {
    OAuth2ClientFromJSON,
    OAuth2ClientFromJSONTyped,
    OAuth2ClientToJSON,
} from './OAuth2Client';

/**
 * 
 * @export
 * @interface OAuth2LoginRequest
 */
export interface OAuth2LoginRequest {
    /**
     * ID is the identifier ("login challenge") of the login request. It is used to
     * identify the session.
     * @type {string}
     * @memberof OAuth2LoginRequest
     */
    challenge: string;
    /**
     * 
     * @type {OAuth2Client}
     * @memberof OAuth2LoginRequest
     */
    client: OAuth2Client;
    /**
     * 
     * @type {OAuth2ConsentRequestOpenIDConnectContext}
     * @memberof OAuth2LoginRequest
     */
    oidc_context?: OAuth2ConsentRequestOpenIDConnectContext;
    /**
     * RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which
     * initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but
     * might come in handy if you want to deal with additional request parameters.
     * @type {string}
     * @memberof OAuth2LoginRequest
     */
    request_url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuth2LoginRequest
     */
    requested_access_token_audience?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuth2LoginRequest
     */
    requested_scope?: Array<string>;
    /**
     * SessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag)
     * this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false)
     * this will be a new random value. This value is used as the "sid" parameter in the ID Token and in OIDC Front-/Back-
     * channel logout. It's value can generally be used to associate consecutive login requests by a certain user.
     * @type {string}
     * @memberof OAuth2LoginRequest
     */
    session_id?: string;
    /**
     * Skip, if true, implies that the client has requested the same scopes from the same user previously.
     * If true, you can skip asking the user to grant the requested scopes, and simply forward the user to the redirect URL.
     * 
     * This feature allows you to update / set session information.
     * @type {boolean}
     * @memberof OAuth2LoginRequest
     */
    skip: boolean;
    /**
     * Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope
     * requested by the OAuth 2.0 client. If this value is set and `skip` is true, you MUST include this subject type
     * when accepting the login request, or the request will fail.
     * @type {string}
     * @memberof OAuth2LoginRequest
     */
    subject: string;
}

/**
 * Check if a given object implements the OAuth2LoginRequest interface.
 */
export function instanceOfOAuth2LoginRequest(value: object): value is OAuth2LoginRequest {
    if (!('challenge' in value) || value['challenge'] === undefined) return false;
    if (!('client' in value) || value['client'] === undefined) return false;
    if (!('request_url' in value) || value['request_url'] === undefined) return false;
    if (!('skip' in value) || value['skip'] === undefined) return false;
    if (!('subject' in value) || value['subject'] === undefined) return false;
    return true;
}

export function OAuth2LoginRequestFromJSON(json: any): OAuth2LoginRequest {
    return OAuth2LoginRequestFromJSONTyped(json, false);
}

export function OAuth2LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2LoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'challenge': json['challenge'],
        'client': OAuth2ClientFromJSON(json['client']),
        'oidc_context': json['oidc_context'] == null ? undefined : OAuth2ConsentRequestOpenIDConnectContextFromJSON(json['oidc_context']),
        'request_url': json['request_url'],
        'requested_access_token_audience': json['requested_access_token_audience'] == null ? undefined : json['requested_access_token_audience'],
        'requested_scope': json['requested_scope'] == null ? undefined : json['requested_scope'],
        'session_id': json['session_id'] == null ? undefined : json['session_id'],
        'skip': json['skip'],
        'subject': json['subject'],
    };
}

export function OAuth2LoginRequestToJSON(value?: OAuth2LoginRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'challenge': value['challenge'],
        'client': OAuth2ClientToJSON(value['client']),
        'oidc_context': OAuth2ConsentRequestOpenIDConnectContextToJSON(value['oidc_context']),
        'request_url': value['request_url'],
        'requested_access_token_audience': value['requested_access_token_audience'],
        'requested_scope': value['requested_scope'],
        'session_id': value['session_id'],
        'skip': value['skip'],
        'subject': value['subject'],
    };
}

