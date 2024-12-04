/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.14
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
 * @interface AccountExperienceConfiguration
 */
export interface AccountExperienceConfiguration {
    /**
     * 
     * @type {string}
     * @memberof AccountExperienceConfiguration
     */
    account_experience_theme_stylesheet?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountExperienceConfiguration
     */
    favicon_type?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountExperienceConfiguration
     */
    favicon_url?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountExperienceConfiguration
     */
    kratos_selfservice_default_browser_return_url?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountExperienceConfiguration
     */
    kratos_selfservice_flows_recovery_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountExperienceConfiguration
     */
    kratos_selfservice_flows_registration_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountExperienceConfiguration
     */
    kratos_selfservice_flows_verification_enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountExperienceConfiguration
     */
    logo_url?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountExperienceConfiguration
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AccountExperienceConfiguration
     */
    organization_map?: { [key: string]: string; };
}

/**
 * Check if a given object implements the AccountExperienceConfiguration interface.
 */
export function instanceOfAccountExperienceConfiguration(value: object): value is AccountExperienceConfiguration {
    return true;
}

export function AccountExperienceConfigurationFromJSON(json: any): AccountExperienceConfiguration {
    return AccountExperienceConfigurationFromJSONTyped(json, false);
}

export function AccountExperienceConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountExperienceConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'account_experience_theme_stylesheet': json['account_experience_theme_stylesheet'] == null ? undefined : json['account_experience_theme_stylesheet'],
        'favicon_type': json['favicon_type'] == null ? undefined : json['favicon_type'],
        'favicon_url': json['favicon_url'] == null ? undefined : json['favicon_url'],
        'kratos_selfservice_default_browser_return_url': json['kratos_selfservice_default_browser_return_url'] == null ? undefined : json['kratos_selfservice_default_browser_return_url'],
        'kratos_selfservice_flows_recovery_enabled': json['kratos_selfservice_flows_recovery_enabled'] == null ? undefined : json['kratos_selfservice_flows_recovery_enabled'],
        'kratos_selfservice_flows_registration_enabled': json['kratos_selfservice_flows_registration_enabled'] == null ? undefined : json['kratos_selfservice_flows_registration_enabled'],
        'kratos_selfservice_flows_verification_enabled': json['kratos_selfservice_flows_verification_enabled'] == null ? undefined : json['kratos_selfservice_flows_verification_enabled'],
        'logo_url': json['logo_url'] == null ? undefined : json['logo_url'],
        'name': json['name'] == null ? undefined : json['name'],
        'organization_map': json['organization_map'] == null ? undefined : json['organization_map'],
    };
}

export function AccountExperienceConfigurationToJSON(value?: AccountExperienceConfiguration | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_experience_theme_stylesheet': value['account_experience_theme_stylesheet'],
        'favicon_type': value['favicon_type'],
        'favicon_url': value['favicon_url'],
        'kratos_selfservice_default_browser_return_url': value['kratos_selfservice_default_browser_return_url'],
        'kratos_selfservice_flows_recovery_enabled': value['kratos_selfservice_flows_recovery_enabled'],
        'kratos_selfservice_flows_registration_enabled': value['kratos_selfservice_flows_registration_enabled'],
        'kratos_selfservice_flows_verification_enabled': value['kratos_selfservice_flows_verification_enabled'],
        'logo_url': value['logo_url'],
        'name': value['name'],
        'organization_map': value['organization_map'],
    };
}

