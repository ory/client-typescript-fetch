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
 * @interface OnboardingPortalLink
 */
export interface OnboardingPortalLink {
    /**
     * The onboarding portal link's creation date
     * @type {Date}
     * @memberof OnboardingPortalLink
     */
    readonly created_at?: Date;
    /**
     * Feature flag to enable SSO configuration
     * @type {boolean}
     * @memberof OnboardingPortalLink
     */
    enable_sso?: boolean;
    /**
     * The onboarding portal link's expiry date
     * @type {Date}
     * @memberof OnboardingPortalLink
     */
    readonly expires_at: Date;
    /**
     * The onboarding portal link's ID.
     * @type {string}
     * @memberof OnboardingPortalLink
     */
    readonly id: string;
    /**
     * The onboarding portal link's organization ID
     * @type {string}
     * @memberof OnboardingPortalLink
     */
    readonly organization_id: string;
    /**
     * The onboarding portal link's project ID
     * @type {string}
     * @memberof OnboardingPortalLink
     */
    readonly project_id: string;
    /**
     * The onboarding portal link's value
     * @type {string}
     * @memberof OnboardingPortalLink
     */
    readonly value: string;
}

/**
 * Check if a given object implements the OnboardingPortalLink interface.
 */
export function instanceOfOnboardingPortalLink(value: object): value is OnboardingPortalLink {
    if (!('expires_at' in value) || value['expires_at'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('organization_id' in value) || value['organization_id'] === undefined) return false;
    if (!('project_id' in value) || value['project_id'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function OnboardingPortalLinkFromJSON(json: any): OnboardingPortalLink {
    return OnboardingPortalLinkFromJSONTyped(json, false);
}

export function OnboardingPortalLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnboardingPortalLink {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'enable_sso': json['enable_sso'] == null ? undefined : json['enable_sso'],
        'expires_at': (new Date(json['expires_at'])),
        'id': json['id'],
        'organization_id': json['organization_id'],
        'project_id': json['project_id'],
        'value': json['value'],
    };
}

export function OnboardingPortalLinkToJSON(json: any): OnboardingPortalLink {
    return OnboardingPortalLinkToJSONTyped(json, false);
}

export function OnboardingPortalLinkToJSONTyped(value?: Omit<OnboardingPortalLink, 'created_at'|'expires_at'|'id'|'organization_id'|'project_id'|'value'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'enable_sso': value['enable_sso'],
    };
}

