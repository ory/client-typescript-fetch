/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * show_form: No user data has been collected, or it is invalid, and thus the form should be shown.
 * success: Indicates that the settings flow has been updated successfully with the provided data.
 * Done will stay true when repeatedly checking. If set to true, done will revert back to false only
 * when a flow with invalid (e.g. "please use a valid phone number") data was sent.
 * @export
 */
export const SettingsFlowState = {
    ShowForm: 'show_form',
    Success: 'success'
} as const;
export type SettingsFlowState = typeof SettingsFlowState[keyof typeof SettingsFlowState];


export function instanceOfSettingsFlowState(value: any): boolean {
    for (const key in SettingsFlowState) {
        if (Object.prototype.hasOwnProperty.call(SettingsFlowState, key)) {
            if ((SettingsFlowState as Record<string, SettingsFlowState>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SettingsFlowStateFromJSON(json: any): SettingsFlowState {
    return SettingsFlowStateFromJSONTyped(json, false);
}

export function SettingsFlowStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsFlowState {
    return json as SettingsFlowState;
}

export function SettingsFlowStateToJSON(value?: SettingsFlowState | null): any {
    return value as any;
}

