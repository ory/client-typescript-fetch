/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The state represents the state of the verification flow.
 * 
 * choose_method: ask the user to choose a method (e.g. recover account via email)
 * sent_email: the email has been sent to the user
 * passed_challenge: the request was successful and the recovery challenge was passed.
 * @export
 */
export const VerificationFlowState = {
    ChooseMethod: 'choose_method',
    SentEmail: 'sent_email',
    PassedChallenge: 'passed_challenge'
} as const;
export type VerificationFlowState = typeof VerificationFlowState[keyof typeof VerificationFlowState];


export function instanceOfVerificationFlowState(value: any): boolean {
    for (const key in VerificationFlowState) {
        if (Object.prototype.hasOwnProperty.call(VerificationFlowState, key)) {
            if ((VerificationFlowState as Record<string, VerificationFlowState>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function VerificationFlowStateFromJSON(json: any): VerificationFlowState {
    return VerificationFlowStateFromJSONTyped(json, false);
}

export function VerificationFlowStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationFlowState {
    return json as VerificationFlowState;
}

export function VerificationFlowStateToJSON(value?: VerificationFlowState | null): any {
    return value as any;
}

