/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { UpdateSettingsFlowWithLookupMethod } from './UpdateSettingsFlowWithLookupMethod';
import {
    instanceOfUpdateSettingsFlowWithLookupMethod,
    UpdateSettingsFlowWithLookupMethodFromJSON,
    UpdateSettingsFlowWithLookupMethodFromJSONTyped,
    UpdateSettingsFlowWithLookupMethodToJSON,
} from './UpdateSettingsFlowWithLookupMethod';
import type { UpdateSettingsFlowWithOidcMethod } from './UpdateSettingsFlowWithOidcMethod';
import {
    instanceOfUpdateSettingsFlowWithOidcMethod,
    UpdateSettingsFlowWithOidcMethodFromJSON,
    UpdateSettingsFlowWithOidcMethodFromJSONTyped,
    UpdateSettingsFlowWithOidcMethodToJSON,
} from './UpdateSettingsFlowWithOidcMethod';
import type { UpdateSettingsFlowWithPasskeyMethod } from './UpdateSettingsFlowWithPasskeyMethod';
import {
    instanceOfUpdateSettingsFlowWithPasskeyMethod,
    UpdateSettingsFlowWithPasskeyMethodFromJSON,
    UpdateSettingsFlowWithPasskeyMethodFromJSONTyped,
    UpdateSettingsFlowWithPasskeyMethodToJSON,
} from './UpdateSettingsFlowWithPasskeyMethod';
import type { UpdateSettingsFlowWithPasswordMethod } from './UpdateSettingsFlowWithPasswordMethod';
import {
    instanceOfUpdateSettingsFlowWithPasswordMethod,
    UpdateSettingsFlowWithPasswordMethodFromJSON,
    UpdateSettingsFlowWithPasswordMethodFromJSONTyped,
    UpdateSettingsFlowWithPasswordMethodToJSON,
} from './UpdateSettingsFlowWithPasswordMethod';
import type { UpdateSettingsFlowWithProfileMethod } from './UpdateSettingsFlowWithProfileMethod';
import {
    instanceOfUpdateSettingsFlowWithProfileMethod,
    UpdateSettingsFlowWithProfileMethodFromJSON,
    UpdateSettingsFlowWithProfileMethodFromJSONTyped,
    UpdateSettingsFlowWithProfileMethodToJSON,
} from './UpdateSettingsFlowWithProfileMethod';
import type { UpdateSettingsFlowWithTotpMethod } from './UpdateSettingsFlowWithTotpMethod';
import {
    instanceOfUpdateSettingsFlowWithTotpMethod,
    UpdateSettingsFlowWithTotpMethodFromJSON,
    UpdateSettingsFlowWithTotpMethodFromJSONTyped,
    UpdateSettingsFlowWithTotpMethodToJSON,
} from './UpdateSettingsFlowWithTotpMethod';
import type { UpdateSettingsFlowWithWebAuthnMethod } from './UpdateSettingsFlowWithWebAuthnMethod';
import {
    instanceOfUpdateSettingsFlowWithWebAuthnMethod,
    UpdateSettingsFlowWithWebAuthnMethodFromJSON,
    UpdateSettingsFlowWithWebAuthnMethodFromJSONTyped,
    UpdateSettingsFlowWithWebAuthnMethodToJSON,
} from './UpdateSettingsFlowWithWebAuthnMethod';

/**
 * @type UpdateSettingsFlowBody
 * Update Settings Flow Request Body
 * @export
 */
export type UpdateSettingsFlowBody = { method: 'lookup_secret' } & UpdateSettingsFlowWithLookupMethod | { method: 'oidc' } & UpdateSettingsFlowWithOidcMethod | { method: 'passkey' } & UpdateSettingsFlowWithPasskeyMethod | { method: 'password' } & UpdateSettingsFlowWithPasswordMethod | { method: 'profile' } & UpdateSettingsFlowWithProfileMethod | { method: 'totp' } & UpdateSettingsFlowWithTotpMethod | { method: 'webauthn' } & UpdateSettingsFlowWithWebAuthnMethod;

export function UpdateSettingsFlowBodyFromJSON(json: any): UpdateSettingsFlowBody {
    return UpdateSettingsFlowBodyFromJSONTyped(json, false);
}

export function UpdateSettingsFlowBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSettingsFlowBody {
    if (json == null) {
        return json;
    }
    switch (json['method']) {
        case 'lookup_secret':
            return Object.assign({}, UpdateSettingsFlowWithLookupMethodFromJSONTyped(json, true), { method: 'lookup_secret' } as const);
        case 'oidc':
            return Object.assign({}, UpdateSettingsFlowWithOidcMethodFromJSONTyped(json, true), { method: 'oidc' } as const);
        case 'passkey':
            return Object.assign({}, UpdateSettingsFlowWithPasskeyMethodFromJSONTyped(json, true), { method: 'passkey' } as const);
        case 'password':
            return Object.assign({}, UpdateSettingsFlowWithPasswordMethodFromJSONTyped(json, true), { method: 'password' } as const);
        case 'profile':
            return Object.assign({}, UpdateSettingsFlowWithProfileMethodFromJSONTyped(json, true), { method: 'profile' } as const);
        case 'totp':
            return Object.assign({}, UpdateSettingsFlowWithTotpMethodFromJSONTyped(json, true), { method: 'totp' } as const);
        case 'webauthn':
            return Object.assign({}, UpdateSettingsFlowWithWebAuthnMethodFromJSONTyped(json, true), { method: 'webauthn' } as const);
        default:
            throw new Error(`No variant of UpdateSettingsFlowBody exists with 'method=${json['method']}'`);
    }
}

export function UpdateSettingsFlowBodyToJSON(value?: UpdateSettingsFlowBody | null): any {
    if (value == null) {
        return value;
    }
    switch (value['method']) {
        case 'lookup_secret':
            return UpdateSettingsFlowWithLookupMethodToJSON(value);
        case 'oidc':
            return UpdateSettingsFlowWithOidcMethodToJSON(value);
        case 'passkey':
            return UpdateSettingsFlowWithPasskeyMethodToJSON(value);
        case 'password':
            return UpdateSettingsFlowWithPasswordMethodToJSON(value);
        case 'profile':
            return UpdateSettingsFlowWithProfileMethodToJSON(value);
        case 'totp':
            return UpdateSettingsFlowWithTotpMethodToJSON(value);
        case 'webauthn':
            return UpdateSettingsFlowWithWebAuthnMethodToJSON(value);
        default:
            throw new Error(`No variant of UpdateSettingsFlowBody exists with 'method=${value['method']}'`);
    }

}

