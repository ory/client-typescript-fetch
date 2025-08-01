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
import type { AccountExperienceThemeVariables } from './AccountExperienceThemeVariables';
import {
    AccountExperienceThemeVariablesFromJSON,
    AccountExperienceThemeVariablesFromJSONTyped,
    AccountExperienceThemeVariablesToJSON,
    AccountExperienceThemeVariablesToJSONTyped,
} from './AccountExperienceThemeVariables';

/**
 * 
 * @export
 * @interface ProjectBrandingTheme
 */
export interface ProjectBrandingTheme {
    /**
     * AccentDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    accent_default_color?: string;
    /**
     * AccentDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    accent_disabled_color?: string;
    /**
     * AccentEmphasisColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    accent_emphasis_color?: string;
    /**
     * AccentMutedColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    accent_muted_color?: string;
    /**
     * AccentSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    accent_subtle_color?: string;
    /**
     * The Account Experience Theme Variables.
     * @type {Array<AccountExperienceThemeVariables>}
     * @memberof ProjectBrandingTheme
     */
    account_experience_variables?: Array<AccountExperienceThemeVariables>;
    /**
     * AccountExperienceVariableStylesheet holds a reference to the current stylesheet that can be used in the AX
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    account_experience_variables_stylesheet?: string;
    /**
     * BackgroundCanvasColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    background_canvas_color?: string;
    /**
     * BackgroundSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    background_subtle_color?: string;
    /**
     * BackgroundSurfaceColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    background_surface_color?: string;
    /**
     * BorderDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    border_default_color?: string;
    /**
     * The Customization Creation Date.
     * @type {Date}
     * @memberof ProjectBrandingTheme
     */
    readonly created_at: Date;
    /**
     * ErrorDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    error_default_color?: string;
    /**
     * ErrorEmphasisColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    error_emphasis_color?: string;
    /**
     * ErrorMutedColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    error_muted_color?: string;
    /**
     * ErrorSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    error_subtle_color?: string;
    /**
     * Favicon Type
     * The Favicon mime type.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    favicon_type?: string;
    /**
     * Favicon URL
     * Favicon can be an https:// or base64:// URL. If the URL is not allowed, the favicon will be stored inside the Ory Network storage bucket.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    favicon_url?: string;
    /**
     * ForegroundDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    foreground_default_color?: string;
    /**
     * ForegroundDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    foreground_disabled_color?: string;
    /**
     * ForegroundMutedColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    foreground_muted_color?: string;
    /**
     * ForegroundOnAccentColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    foreground_on_accent_color?: string;
    /**
     * ForegroundOnDarkColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    foreground_on_dark_color?: string;
    /**
     * ForegroundOnDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    foreground_on_disabled_color?: string;
    /**
     * ForegroundSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    foreground_subtle_color?: string;
    /**
     * The customization theme ID.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    readonly id: string;
    /**
     * InputBackgroundColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    input_background_color?: string;
    /**
     * InputDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    input_disabled_color?: string;
    /**
     * InputPlaceholderColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    input_placeholder_color?: string;
    /**
     * InputTextColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    input_text_color?: string;
    /**
     * Logo Type
     * The Logo mime type.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    logo_type?: string;
    /**
     * Logo URL
     * Logo can be an https:// or base64:// URL. If the URL is not allowed, the logo will be stored inside the Ory Network storage bucket.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    logo_url?: string;
    /**
     * The customization theme name.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    name: string;
    /**
     * Primary color is an hsla color value used to derive the other colors from for the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    primary_color?: string;
    /**
     * The ProjectBranding ID this customization is associated with.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    project_branding_id: string;
    /**
     * Secondary color is a hsla color code used to derive the other colors from for the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    secondary_color?: string;
    /**
     * SuccessEmphasisColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    success_emphasis_color?: string;
    /**
     * TextDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    text_default_color?: string;
    /**
     * TextDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingTheme
     */
    text_disabled_color?: string;
    /**
     * Last Time Branding was Updated.
     * @type {Date}
     * @memberof ProjectBrandingTheme
     */
    readonly updated_at: Date;
}

/**
 * Check if a given object implements the ProjectBrandingTheme interface.
 */
export function instanceOfProjectBrandingTheme(value: object): value is ProjectBrandingTheme {
    if (!('created_at' in value) || value['created_at'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('project_branding_id' in value) || value['project_branding_id'] === undefined) return false;
    if (!('updated_at' in value) || value['updated_at'] === undefined) return false;
    return true;
}

export function ProjectBrandingThemeFromJSON(json: any): ProjectBrandingTheme {
    return ProjectBrandingThemeFromJSONTyped(json, false);
}

export function ProjectBrandingThemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectBrandingTheme {
    if (json == null) {
        return json;
    }
    return {
        
        'accent_default_color': json['accent_default_color'] == null ? undefined : json['accent_default_color'],
        'accent_disabled_color': json['accent_disabled_color'] == null ? undefined : json['accent_disabled_color'],
        'accent_emphasis_color': json['accent_emphasis_color'] == null ? undefined : json['accent_emphasis_color'],
        'accent_muted_color': json['accent_muted_color'] == null ? undefined : json['accent_muted_color'],
        'accent_subtle_color': json['accent_subtle_color'] == null ? undefined : json['accent_subtle_color'],
        'account_experience_variables': json['account_experience_variables'] == null ? undefined : ((json['account_experience_variables'] as Array<any>).map(AccountExperienceThemeVariablesFromJSON)),
        'account_experience_variables_stylesheet': json['account_experience_variables_stylesheet'] == null ? undefined : json['account_experience_variables_stylesheet'],
        'background_canvas_color': json['background_canvas_color'] == null ? undefined : json['background_canvas_color'],
        'background_subtle_color': json['background_subtle_color'] == null ? undefined : json['background_subtle_color'],
        'background_surface_color': json['background_surface_color'] == null ? undefined : json['background_surface_color'],
        'border_default_color': json['border_default_color'] == null ? undefined : json['border_default_color'],
        'created_at': (new Date(json['created_at'])),
        'error_default_color': json['error_default_color'] == null ? undefined : json['error_default_color'],
        'error_emphasis_color': json['error_emphasis_color'] == null ? undefined : json['error_emphasis_color'],
        'error_muted_color': json['error_muted_color'] == null ? undefined : json['error_muted_color'],
        'error_subtle_color': json['error_subtle_color'] == null ? undefined : json['error_subtle_color'],
        'favicon_type': json['favicon_type'] == null ? undefined : json['favicon_type'],
        'favicon_url': json['favicon_url'] == null ? undefined : json['favicon_url'],
        'foreground_default_color': json['foreground_default_color'] == null ? undefined : json['foreground_default_color'],
        'foreground_disabled_color': json['foreground_disabled_color'] == null ? undefined : json['foreground_disabled_color'],
        'foreground_muted_color': json['foreground_muted_color'] == null ? undefined : json['foreground_muted_color'],
        'foreground_on_accent_color': json['foreground_on_accent_color'] == null ? undefined : json['foreground_on_accent_color'],
        'foreground_on_dark_color': json['foreground_on_dark_color'] == null ? undefined : json['foreground_on_dark_color'],
        'foreground_on_disabled_color': json['foreground_on_disabled_color'] == null ? undefined : json['foreground_on_disabled_color'],
        'foreground_subtle_color': json['foreground_subtle_color'] == null ? undefined : json['foreground_subtle_color'],
        'id': json['id'],
        'input_background_color': json['input_background_color'] == null ? undefined : json['input_background_color'],
        'input_disabled_color': json['input_disabled_color'] == null ? undefined : json['input_disabled_color'],
        'input_placeholder_color': json['input_placeholder_color'] == null ? undefined : json['input_placeholder_color'],
        'input_text_color': json['input_text_color'] == null ? undefined : json['input_text_color'],
        'logo_type': json['logo_type'] == null ? undefined : json['logo_type'],
        'logo_url': json['logo_url'] == null ? undefined : json['logo_url'],
        'name': json['name'],
        'primary_color': json['primary_color'] == null ? undefined : json['primary_color'],
        'project_branding_id': json['project_branding_id'],
        'secondary_color': json['secondary_color'] == null ? undefined : json['secondary_color'],
        'success_emphasis_color': json['success_emphasis_color'] == null ? undefined : json['success_emphasis_color'],
        'text_default_color': json['text_default_color'] == null ? undefined : json['text_default_color'],
        'text_disabled_color': json['text_disabled_color'] == null ? undefined : json['text_disabled_color'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function ProjectBrandingThemeToJSON(json: any): ProjectBrandingTheme {
    return ProjectBrandingThemeToJSONTyped(json, false);
}

export function ProjectBrandingThemeToJSONTyped(value?: Omit<ProjectBrandingTheme, 'created_at'|'id'|'updated_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accent_default_color': value['accent_default_color'],
        'accent_disabled_color': value['accent_disabled_color'],
        'accent_emphasis_color': value['accent_emphasis_color'],
        'accent_muted_color': value['accent_muted_color'],
        'accent_subtle_color': value['accent_subtle_color'],
        'account_experience_variables': value['account_experience_variables'] == null ? undefined : ((value['account_experience_variables'] as Array<any>).map(AccountExperienceThemeVariablesToJSON)),
        'account_experience_variables_stylesheet': value['account_experience_variables_stylesheet'],
        'background_canvas_color': value['background_canvas_color'],
        'background_subtle_color': value['background_subtle_color'],
        'background_surface_color': value['background_surface_color'],
        'border_default_color': value['border_default_color'],
        'error_default_color': value['error_default_color'],
        'error_emphasis_color': value['error_emphasis_color'],
        'error_muted_color': value['error_muted_color'],
        'error_subtle_color': value['error_subtle_color'],
        'favicon_type': value['favicon_type'],
        'favicon_url': value['favicon_url'],
        'foreground_default_color': value['foreground_default_color'],
        'foreground_disabled_color': value['foreground_disabled_color'],
        'foreground_muted_color': value['foreground_muted_color'],
        'foreground_on_accent_color': value['foreground_on_accent_color'],
        'foreground_on_dark_color': value['foreground_on_dark_color'],
        'foreground_on_disabled_color': value['foreground_on_disabled_color'],
        'foreground_subtle_color': value['foreground_subtle_color'],
        'input_background_color': value['input_background_color'],
        'input_disabled_color': value['input_disabled_color'],
        'input_placeholder_color': value['input_placeholder_color'],
        'input_text_color': value['input_text_color'],
        'logo_type': value['logo_type'],
        'logo_url': value['logo_url'],
        'name': value['name'],
        'primary_color': value['primary_color'],
        'project_branding_id': value['project_branding_id'],
        'secondary_color': value['secondary_color'],
        'success_emphasis_color': value['success_emphasis_color'],
        'text_default_color': value['text_default_color'],
        'text_disabled_color': value['text_disabled_color'],
    };
}

