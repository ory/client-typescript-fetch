/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { OAuth2LoginRequest } from './OAuth2LoginRequest';
import {
    OAuth2LoginRequestFromJSON,
    OAuth2LoginRequestFromJSONTyped,
    OAuth2LoginRequestToJSON,
} from './OAuth2LoginRequest';
import type { UiContainer } from './UiContainer';
import {
    UiContainerFromJSON,
    UiContainerFromJSONTyped,
    UiContainerToJSON,
} from './UiContainer';

/**
 * 
 * @export
 * @interface RegistrationFlow
 */
export interface RegistrationFlow {
    /**
     * Active, if set, contains the registration method that is being used. It is initially
     * not set.
     * password CredentialsTypePassword
     * oidc CredentialsTypeOIDC
     * totp CredentialsTypeTOTP
     * lookup_secret CredentialsTypeLookup
     * webauthn CredentialsTypeWebAuthn
     * code CredentialsTypeCodeAuth
     * passkey CredentialsTypePasskey
     * profile CredentialsTypeProfile
     * saml CredentialsTypeSAML
     * link_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.
     * code_recovery CredentialsTypeRecoveryCode
     * @type {string}
     * @memberof RegistrationFlow
     */
    active?: RegistrationFlowActiveEnum;
    /**
     * ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in,
     * a new flow has to be initiated.
     * @type {Date}
     * @memberof RegistrationFlow
     */
    expires_at: Date;
    /**
     * ID represents the flow's unique ID. When performing the registration flow, this
     * represents the id in the registration ui's query parameter: http://<selfservice.flows.registration.ui_url>/?flow=<id>
     * @type {string}
     * @memberof RegistrationFlow
     */
    id: string;
    /**
     * IssuedAt is the time (UTC) when the flow occurred.
     * @type {Date}
     * @memberof RegistrationFlow
     */
    issued_at: Date;
    /**
     * Ory OAuth 2.0 Login Challenge.
     * 
     * This value is set using the `login_challenge` query parameter of the registration and login endpoints.
     * If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.
     * @type {string}
     * @memberof RegistrationFlow
     */
    oauth2_login_challenge?: string;
    /**
     * 
     * @type {OAuth2LoginRequest}
     * @memberof RegistrationFlow
     */
    oauth2_login_request?: OAuth2LoginRequest;
    /**
     * 
     * @type {string}
     * @memberof RegistrationFlow
     */
    organization_id?: string | null;
    /**
     * RequestURL is the initial URL that was requested from Ory Kratos. It can be used
     * to forward information contained in the URL's path or query for example.
     * @type {string}
     * @memberof RegistrationFlow
     */
    request_url: string;
    /**
     * ReturnTo contains the requested return_to URL.
     * @type {string}
     * @memberof RegistrationFlow
     */
    return_to?: string;
    /**
     * SessionTokenExchangeCode holds the secret code that the client can use to retrieve a session token after the flow has been completed.
     * This is only set if the client has requested a session token exchange code, and if the flow is of type "api",
     * and only on creating the flow.
     * @type {string}
     * @memberof RegistrationFlow
     */
    session_token_exchange_code?: string;
    /**
     * State represents the state of this request:
     * 
     * choose_method: ask the user to choose a method (e.g. registration with email)
     * sent_email: the email has been sent to the user
     * passed_challenge: the request was successful and the registration challenge was passed.
     * @type {any}
     * @memberof RegistrationFlow
     */
    state: any | null;
    /**
     * TransientPayload is used to pass data from the registration to a webhook
     * @type {object}
     * @memberof RegistrationFlow
     */
    transient_payload?: object;
    /**
     * The flow type can either be `api` or `browser`.
     * @type {string}
     * @memberof RegistrationFlow
     */
    type: string;
    /**
     * 
     * @type {UiContainer}
     * @memberof RegistrationFlow
     */
    ui: UiContainer;
}


/**
 * @export
 */
export const RegistrationFlowActiveEnum = {
    Password: 'password',
    Oidc: 'oidc',
    Totp: 'totp',
    LookupSecret: 'lookup_secret',
    Webauthn: 'webauthn',
    Code: 'code',
    Passkey: 'passkey',
    Profile: 'profile',
    Saml: 'saml',
    LinkRecovery: 'link_recovery',
    CodeRecovery: 'code_recovery'
} as const;
export type RegistrationFlowActiveEnum = typeof RegistrationFlowActiveEnum[keyof typeof RegistrationFlowActiveEnum];


/**
 * Check if a given object implements the RegistrationFlow interface.
 */
export function instanceOfRegistrationFlow(value: object): value is RegistrationFlow {
    if (!('expires_at' in value) || value['expires_at'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('issued_at' in value) || value['issued_at'] === undefined) return false;
    if (!('request_url' in value) || value['request_url'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('ui' in value) || value['ui'] === undefined) return false;
    return true;
}

export function RegistrationFlowFromJSON(json: any): RegistrationFlow {
    return RegistrationFlowFromJSONTyped(json, false);
}

export function RegistrationFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationFlow {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'] == null ? undefined : json['active'],
        'expires_at': (new Date(json['expires_at'])),
        'id': json['id'],
        'issued_at': (new Date(json['issued_at'])),
        'oauth2_login_challenge': json['oauth2_login_challenge'] == null ? undefined : json['oauth2_login_challenge'],
        'oauth2_login_request': json['oauth2_login_request'] == null ? undefined : OAuth2LoginRequestFromJSON(json['oauth2_login_request']),
        'organization_id': json['organization_id'] == null ? undefined : json['organization_id'],
        'request_url': json['request_url'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
        'session_token_exchange_code': json['session_token_exchange_code'] == null ? undefined : json['session_token_exchange_code'],
        'state': json['state'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
        'type': json['type'],
        'ui': UiContainerFromJSON(json['ui']),
    };
}

export function RegistrationFlowToJSON(value?: RegistrationFlow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'active': value['active'],
        'expires_at': ((value['expires_at']).toISOString()),
        'id': value['id'],
        'issued_at': ((value['issued_at']).toISOString()),
        'oauth2_login_challenge': value['oauth2_login_challenge'],
        'oauth2_login_request': OAuth2LoginRequestToJSON(value['oauth2_login_request']),
        'organization_id': value['organization_id'],
        'request_url': value['request_url'],
        'return_to': value['return_to'],
        'session_token_exchange_code': value['session_token_exchange_code'],
        'state': value['state'],
        'transient_payload': value['transient_payload'],
        'type': value['type'],
        'ui': UiContainerToJSON(value['ui']),
    };
}

