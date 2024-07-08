/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.10
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
 * @interface ProjectBrandingColors
 */
export interface ProjectBrandingColors {
    /**
     * AccentDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    accent_default_color?: string;
    /**
     * AccentDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    accent_disabled_color?: string;
    /**
     * AccentEmphasisColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    accent_emphasis_color?: string;
    /**
     * AccentMutedColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    accent_muted_color?: string;
    /**
     * AccentSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    accent_subtle_color?: string;
    /**
     * BackgroundCanvasColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    background_canvas_color?: string;
    /**
     * BackgroundSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    background_subtle_color?: string;
    /**
     * BackgroundSurfaceColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    background_surface_color?: string;
    /**
     * BorderDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    border_default_color?: string;
    /**
     * ErrorDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    error_default_color?: string;
    /**
     * ErrorEmphasisColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    error_emphasis_color?: string;
    /**
     * ErrorMutedColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    error_muted_color?: string;
    /**
     * ErrorSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    error_subtle_color?: string;
    /**
     * ForegroundDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    foreground_default_color?: string;
    /**
     * ForegroundDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    foreground_disabled_color?: string;
    /**
     * ForegroundMutedColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    foreground_muted_color?: string;
    /**
     * ForegroundOnAccentColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    foreground_on_accent_color?: string;
    /**
     * ForegroundOnDarkColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    foreground_on_dark_color?: string;
    /**
     * ForegroundOnDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    foreground_on_disabled_color?: string;
    /**
     * ForegroundSubtleColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    foreground_subtle_color?: string;
    /**
     * InputBackgroundColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    input_background_color?: string;
    /**
     * InputDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    input_disabled_color?: string;
    /**
     * InputPlaceholderColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    input_placeholder_color?: string;
    /**
     * InputTextColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    input_text_color?: string;
    /**
     * Primary color is an hsla color value used to derive the other colors from for the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    primary_color?: string;
    /**
     * Secondary color is a hsla color code used to derive the other colors from for the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    secondary_color?: string;
    /**
     * SuccessEmphasisColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    success_emphasis_color?: string;
    /**
     * TextDefaultColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    text_default_color?: string;
    /**
     * TextDisabledColor is a hex color code used by the Ory Account Experience theme.
     * @type {string}
     * @memberof ProjectBrandingColors
     */
    text_disabled_color?: string;
}

/**
 * Check if a given object implements the ProjectBrandingColors interface.
 */
export function instanceOfProjectBrandingColors(value: object): value is ProjectBrandingColors {
    return true;
}

export function ProjectBrandingColorsFromJSON(json: any): ProjectBrandingColors {
    return ProjectBrandingColorsFromJSONTyped(json, false);
}

export function ProjectBrandingColorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectBrandingColors {
    if (json == null) {
        return json;
    }
    return {
        
        'accent_default_color': json['accent_default_color'] == null ? undefined : json['accent_default_color'],
        'accent_disabled_color': json['accent_disabled_color'] == null ? undefined : json['accent_disabled_color'],
        'accent_emphasis_color': json['accent_emphasis_color'] == null ? undefined : json['accent_emphasis_color'],
        'accent_muted_color': json['accent_muted_color'] == null ? undefined : json['accent_muted_color'],
        'accent_subtle_color': json['accent_subtle_color'] == null ? undefined : json['accent_subtle_color'],
        'background_canvas_color': json['background_canvas_color'] == null ? undefined : json['background_canvas_color'],
        'background_subtle_color': json['background_subtle_color'] == null ? undefined : json['background_subtle_color'],
        'background_surface_color': json['background_surface_color'] == null ? undefined : json['background_surface_color'],
        'border_default_color': json['border_default_color'] == null ? undefined : json['border_default_color'],
        'error_default_color': json['error_default_color'] == null ? undefined : json['error_default_color'],
        'error_emphasis_color': json['error_emphasis_color'] == null ? undefined : json['error_emphasis_color'],
        'error_muted_color': json['error_muted_color'] == null ? undefined : json['error_muted_color'],
        'error_subtle_color': json['error_subtle_color'] == null ? undefined : json['error_subtle_color'],
        'foreground_default_color': json['foreground_default_color'] == null ? undefined : json['foreground_default_color'],
        'foreground_disabled_color': json['foreground_disabled_color'] == null ? undefined : json['foreground_disabled_color'],
        'foreground_muted_color': json['foreground_muted_color'] == null ? undefined : json['foreground_muted_color'],
        'foreground_on_accent_color': json['foreground_on_accent_color'] == null ? undefined : json['foreground_on_accent_color'],
        'foreground_on_dark_color': json['foreground_on_dark_color'] == null ? undefined : json['foreground_on_dark_color'],
        'foreground_on_disabled_color': json['foreground_on_disabled_color'] == null ? undefined : json['foreground_on_disabled_color'],
        'foreground_subtle_color': json['foreground_subtle_color'] == null ? undefined : json['foreground_subtle_color'],
        'input_background_color': json['input_background_color'] == null ? undefined : json['input_background_color'],
        'input_disabled_color': json['input_disabled_color'] == null ? undefined : json['input_disabled_color'],
        'input_placeholder_color': json['input_placeholder_color'] == null ? undefined : json['input_placeholder_color'],
        'input_text_color': json['input_text_color'] == null ? undefined : json['input_text_color'],
        'primary_color': json['primary_color'] == null ? undefined : json['primary_color'],
        'secondary_color': json['secondary_color'] == null ? undefined : json['secondary_color'],
        'success_emphasis_color': json['success_emphasis_color'] == null ? undefined : json['success_emphasis_color'],
        'text_default_color': json['text_default_color'] == null ? undefined : json['text_default_color'],
        'text_disabled_color': json['text_disabled_color'] == null ? undefined : json['text_disabled_color'],
    };
}

export function ProjectBrandingColorsToJSON(value?: ProjectBrandingColors | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accent_default_color': value['accent_default_color'],
        'accent_disabled_color': value['accent_disabled_color'],
        'accent_emphasis_color': value['accent_emphasis_color'],
        'accent_muted_color': value['accent_muted_color'],
        'accent_subtle_color': value['accent_subtle_color'],
        'background_canvas_color': value['background_canvas_color'],
        'background_subtle_color': value['background_subtle_color'],
        'background_surface_color': value['background_surface_color'],
        'border_default_color': value['border_default_color'],
        'error_default_color': value['error_default_color'],
        'error_emphasis_color': value['error_emphasis_color'],
        'error_muted_color': value['error_muted_color'],
        'error_subtle_color': value['error_subtle_color'],
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
        'primary_color': value['primary_color'],
        'secondary_color': value['secondary_color'],
        'success_emphasis_color': value['success_emphasis_color'],
        'text_default_color': value['text_default_color'],
        'text_disabled_color': value['text_disabled_color'],
    };
}

