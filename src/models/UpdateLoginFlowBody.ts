/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.0
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { UpdateLoginFlowWithCodeMethod } from './UpdateLoginFlowWithCodeMethod';
import {
    instanceOfUpdateLoginFlowWithCodeMethod,
    UpdateLoginFlowWithCodeMethodFromJSON,
    UpdateLoginFlowWithCodeMethodFromJSONTyped,
    UpdateLoginFlowWithCodeMethodToJSON,
} from './UpdateLoginFlowWithCodeMethod';
import type { UpdateLoginFlowWithIdentifierFirstMethod } from './UpdateLoginFlowWithIdentifierFirstMethod';
import {
    instanceOfUpdateLoginFlowWithIdentifierFirstMethod,
    UpdateLoginFlowWithIdentifierFirstMethodFromJSON,
    UpdateLoginFlowWithIdentifierFirstMethodFromJSONTyped,
    UpdateLoginFlowWithIdentifierFirstMethodToJSON,
} from './UpdateLoginFlowWithIdentifierFirstMethod';
import type { UpdateLoginFlowWithLookupSecretMethod } from './UpdateLoginFlowWithLookupSecretMethod';
import {
    instanceOfUpdateLoginFlowWithLookupSecretMethod,
    UpdateLoginFlowWithLookupSecretMethodFromJSON,
    UpdateLoginFlowWithLookupSecretMethodFromJSONTyped,
    UpdateLoginFlowWithLookupSecretMethodToJSON,
} from './UpdateLoginFlowWithLookupSecretMethod';
import type { UpdateLoginFlowWithOidcMethod } from './UpdateLoginFlowWithOidcMethod';
import {
    instanceOfUpdateLoginFlowWithOidcMethod,
    UpdateLoginFlowWithOidcMethodFromJSON,
    UpdateLoginFlowWithOidcMethodFromJSONTyped,
    UpdateLoginFlowWithOidcMethodToJSON,
} from './UpdateLoginFlowWithOidcMethod';
import type { UpdateLoginFlowWithPasskeyMethod } from './UpdateLoginFlowWithPasskeyMethod';
import {
    instanceOfUpdateLoginFlowWithPasskeyMethod,
    UpdateLoginFlowWithPasskeyMethodFromJSON,
    UpdateLoginFlowWithPasskeyMethodFromJSONTyped,
    UpdateLoginFlowWithPasskeyMethodToJSON,
} from './UpdateLoginFlowWithPasskeyMethod';
import type { UpdateLoginFlowWithPasswordMethod } from './UpdateLoginFlowWithPasswordMethod';
import {
    instanceOfUpdateLoginFlowWithPasswordMethod,
    UpdateLoginFlowWithPasswordMethodFromJSON,
    UpdateLoginFlowWithPasswordMethodFromJSONTyped,
    UpdateLoginFlowWithPasswordMethodToJSON,
} from './UpdateLoginFlowWithPasswordMethod';
import type { UpdateLoginFlowWithTotpMethod } from './UpdateLoginFlowWithTotpMethod';
import {
    instanceOfUpdateLoginFlowWithTotpMethod,
    UpdateLoginFlowWithTotpMethodFromJSON,
    UpdateLoginFlowWithTotpMethodFromJSONTyped,
    UpdateLoginFlowWithTotpMethodToJSON,
} from './UpdateLoginFlowWithTotpMethod';
import type { UpdateLoginFlowWithWebAuthnMethod } from './UpdateLoginFlowWithWebAuthnMethod';
import {
    instanceOfUpdateLoginFlowWithWebAuthnMethod,
    UpdateLoginFlowWithWebAuthnMethodFromJSON,
    UpdateLoginFlowWithWebAuthnMethodFromJSONTyped,
    UpdateLoginFlowWithWebAuthnMethodToJSON,
} from './UpdateLoginFlowWithWebAuthnMethod';

/**
 * @type UpdateLoginFlowBody
 * 
 * @export
 */
export type UpdateLoginFlowBody = { method: 'code' } & UpdateLoginFlowWithCodeMethod | { method: 'identifier_first' } & UpdateLoginFlowWithIdentifierFirstMethod | { method: 'lookup_secret' } & UpdateLoginFlowWithLookupSecretMethod | { method: 'oidc' } & UpdateLoginFlowWithOidcMethod | { method: 'passkey' } & UpdateLoginFlowWithPasskeyMethod | { method: 'password' } & UpdateLoginFlowWithPasswordMethod | { method: 'totp' } & UpdateLoginFlowWithTotpMethod | { method: 'webauthn' } & UpdateLoginFlowWithWebAuthnMethod;

export function UpdateLoginFlowBodyFromJSON(json: any): UpdateLoginFlowBody {
    return UpdateLoginFlowBodyFromJSONTyped(json, false);
}

export function UpdateLoginFlowBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowBody {
    if (json == null) {
        return json;
    }
    switch (json['method']) {
        case 'code':
            return Object.assign({}, UpdateLoginFlowWithCodeMethodFromJSONTyped(json, true), { method: 'code' } as const);
        case 'identifier_first':
            return Object.assign({}, UpdateLoginFlowWithIdentifierFirstMethodFromJSONTyped(json, true), { method: 'identifier_first' } as const);
        case 'lookup_secret':
            return Object.assign({}, UpdateLoginFlowWithLookupSecretMethodFromJSONTyped(json, true), { method: 'lookup_secret' } as const);
        case 'oidc':
            return Object.assign({}, UpdateLoginFlowWithOidcMethodFromJSONTyped(json, true), { method: 'oidc' } as const);
        case 'passkey':
            return Object.assign({}, UpdateLoginFlowWithPasskeyMethodFromJSONTyped(json, true), { method: 'passkey' } as const);
        case 'password':
            return Object.assign({}, UpdateLoginFlowWithPasswordMethodFromJSONTyped(json, true), { method: 'password' } as const);
        case 'totp':
            return Object.assign({}, UpdateLoginFlowWithTotpMethodFromJSONTyped(json, true), { method: 'totp' } as const);
        case 'webauthn':
            return Object.assign({}, UpdateLoginFlowWithWebAuthnMethodFromJSONTyped(json, true), { method: 'webauthn' } as const);
        default:
            throw new Error(`No variant of UpdateLoginFlowBody exists with 'method=${json['method']}'`);
    }
}

export function UpdateLoginFlowBodyToJSON(value?: UpdateLoginFlowBody | null): any {
    if (value == null) {
        return value;
    }
    switch (value['method']) {
        case 'code':
            return UpdateLoginFlowWithCodeMethodToJSON(value);
        case 'identifier_first':
            return UpdateLoginFlowWithIdentifierFirstMethodToJSON(value);
        case 'lookup_secret':
            return UpdateLoginFlowWithLookupSecretMethodToJSON(value);
        case 'oidc':
            return UpdateLoginFlowWithOidcMethodToJSON(value);
        case 'passkey':
            return UpdateLoginFlowWithPasskeyMethodToJSON(value);
        case 'password':
            return UpdateLoginFlowWithPasswordMethodToJSON(value);
        case 'totp':
            return UpdateLoginFlowWithTotpMethodToJSON(value);
        case 'webauthn':
            return UpdateLoginFlowWithWebAuthnMethodToJSON(value);
        default:
            throw new Error(`No variant of UpdateLoginFlowBody exists with 'method=${value['method']}'`);
    }

}

