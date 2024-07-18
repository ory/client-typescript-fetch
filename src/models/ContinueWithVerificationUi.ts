/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ContinueWithVerificationUiFlow } from './ContinueWithVerificationUiFlow';
import {
    ContinueWithVerificationUiFlowFromJSON,
    ContinueWithVerificationUiFlowFromJSONTyped,
    ContinueWithVerificationUiFlowToJSON,
} from './ContinueWithVerificationUiFlow';

/**
 * Indicates, that the UI flow could be continued by showing a verification ui
 * @export
 * @interface ContinueWithVerificationUi
 */
export interface ContinueWithVerificationUi {
    /**
     * Action will always be `show_verification_ui`
     * show_verification_ui ContinueWithActionShowVerificationUIString
     * @type {string}
     * @memberof ContinueWithVerificationUi
     */
    action: ContinueWithVerificationUiActionEnum;
    /**
     * 
     * @type {ContinueWithVerificationUiFlow}
     * @memberof ContinueWithVerificationUi
     */
    flow: ContinueWithVerificationUiFlow;
}


/**
 * @export
 */
export const ContinueWithVerificationUiActionEnum = {
    ShowVerificationUi: 'show_verification_ui'
} as const;
export type ContinueWithVerificationUiActionEnum = typeof ContinueWithVerificationUiActionEnum[keyof typeof ContinueWithVerificationUiActionEnum];


/**
 * Check if a given object implements the ContinueWithVerificationUi interface.
 */
export function instanceOfContinueWithVerificationUi(value: object): value is ContinueWithVerificationUi {
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('flow' in value) || value['flow'] === undefined) return false;
    return true;
}

export function ContinueWithVerificationUiFromJSON(json: any): ContinueWithVerificationUi {
    return ContinueWithVerificationUiFromJSONTyped(json, false);
}

export function ContinueWithVerificationUiFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinueWithVerificationUi {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'],
        'flow': ContinueWithVerificationUiFlowFromJSON(json['flow']),
    };
}

export function ContinueWithVerificationUiToJSON(value?: ContinueWithVerificationUi | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'flow': ContinueWithVerificationUiFlowToJSON(value['flow']),
    };
}

