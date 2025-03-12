/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.18.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Identity } from './Identity';
import {
    IdentityFromJSON,
    IdentityFromJSONTyped,
    IdentityToJSON,
    IdentityToJSONTyped,
} from './Identity';
import type { ContinueWith } from './ContinueWith';
import {
    ContinueWithFromJSON,
    ContinueWithFromJSONTyped,
    ContinueWithToJSON,
    ContinueWithToJSONTyped,
} from './ContinueWith';
import type { UiContainer } from './UiContainer';
import {
    UiContainerFromJSON,
    UiContainerFromJSONTyped,
    UiContainerToJSON,
    UiContainerToJSONTyped,
} from './UiContainer';

/**
 * This flow is used when an identity wants to update settings
 * (e.g. profile data, passwords, ...) in a selfservice manner.
 * 
 * We recommend reading the [User Settings Documentation](../self-service/flows/user-settings)
 * @export
 * @interface SettingsFlow
 */
export interface SettingsFlow {
    /**
     * Active, if set, contains the registration method that is being used. It is initially
     * not set.
     * @type {string}
     * @memberof SettingsFlow
     */
    active?: string;
    /**
     * Contains a list of actions, that could follow this flow
     * 
     * It can, for example, contain a reference to the verification flow, created as part of the user's
     * registration.
     * @type {Array<ContinueWith>}
     * @memberof SettingsFlow
     */
    continue_with?: Array<ContinueWith>;
    /**
     * ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to update the setting,
     * a new flow has to be initiated.
     * @type {Date}
     * @memberof SettingsFlow
     */
    expires_at: Date;
    /**
     * ID represents the flow's unique ID. When performing the settings flow, this
     * represents the id in the settings ui's query parameter: http://<selfservice.flows.settings.ui_url>?flow=<id>
     * @type {string}
     * @memberof SettingsFlow
     */
    id: string;
    /**
     * 
     * @type {Identity}
     * @memberof SettingsFlow
     */
    identity: Identity;
    /**
     * IssuedAt is the time (UTC) when the flow occurred.
     * @type {Date}
     * @memberof SettingsFlow
     */
    issued_at: Date;
    /**
     * RequestURL is the initial URL that was requested from Ory Kratos. It can be used
     * to forward information contained in the URL's path or query for example.
     * @type {string}
     * @memberof SettingsFlow
     */
    request_url: string;
    /**
     * ReturnTo contains the requested return_to URL.
     * @type {string}
     * @memberof SettingsFlow
     */
    return_to?: string;
    /**
     * State represents the state of this flow. It knows two states:
     * 
     * show_form: No user data has been collected, or it is invalid, and thus the form should be shown.
     * success: Indicates that the settings flow has been updated successfully with the provided data.
     * Done will stay true when repeatedly checking. If set to true, done will revert back to false only
     * when a flow with invalid (e.g. "please use a valid phone number") data was sent.
     * @type {any}
     * @memberof SettingsFlow
     */
    state: any | null;
    /**
     * TransientPayload is used to pass data from the settings flow to hooks and email templates
     * @type {object}
     * @memberof SettingsFlow
     */
    transient_payload?: object;
    /**
     * The flow type can either be `api` or `browser`.
     * @type {string}
     * @memberof SettingsFlow
     */
    type: string;
    /**
     * 
     * @type {UiContainer}
     * @memberof SettingsFlow
     */
    ui: UiContainer;
}

/**
 * Check if a given object implements the SettingsFlow interface.
 */
export function instanceOfSettingsFlow(value: object): value is SettingsFlow {
    if (!('expires_at' in value) || value['expires_at'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('identity' in value) || value['identity'] === undefined) return false;
    if (!('issued_at' in value) || value['issued_at'] === undefined) return false;
    if (!('request_url' in value) || value['request_url'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('ui' in value) || value['ui'] === undefined) return false;
    return true;
}

export function SettingsFlowFromJSON(json: any): SettingsFlow {
    return SettingsFlowFromJSONTyped(json, false);
}

export function SettingsFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsFlow {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'] == null ? undefined : json['active'],
        'continue_with': json['continue_with'] == null ? undefined : ((json['continue_with'] as Array<any>).map(ContinueWithFromJSON)),
        'expires_at': (new Date(json['expires_at'])),
        'id': json['id'],
        'identity': IdentityFromJSON(json['identity']),
        'issued_at': (new Date(json['issued_at'])),
        'request_url': json['request_url'],
        'return_to': json['return_to'] == null ? undefined : json['return_to'],
        'state': json['state'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
        'type': json['type'],
        'ui': UiContainerFromJSON(json['ui']),
    };
}

export function SettingsFlowToJSON(json: any): SettingsFlow {
    return SettingsFlowToJSONTyped(json, false);
}

export function SettingsFlowToJSONTyped(value?: SettingsFlow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'active': value['active'],
        'continue_with': value['continue_with'] == null ? undefined : ((value['continue_with'] as Array<any>).map(ContinueWithToJSON)),
        'expires_at': ((value['expires_at']).toISOString()),
        'id': value['id'],
        'identity': IdentityToJSON(value['identity']),
        'issued_at': ((value['issued_at']).toISOString()),
        'request_url': value['request_url'],
        'return_to': value['return_to'],
        'state': value['state'],
        'transient_payload': value['transient_payload'],
        'type': value['type'],
        'ui': UiContainerToJSON(value['ui']),
    };
}

