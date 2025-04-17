/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { UpdateRegistrationFlowWithCodeMethod } from './UpdateRegistrationFlowWithCodeMethod';
import {
    instanceOfUpdateRegistrationFlowWithCodeMethod,
    UpdateRegistrationFlowWithCodeMethodFromJSON,
    UpdateRegistrationFlowWithCodeMethodFromJSONTyped,
    UpdateRegistrationFlowWithCodeMethodToJSON,
} from './UpdateRegistrationFlowWithCodeMethod';
import type { UpdateRegistrationFlowWithOidcMethod } from './UpdateRegistrationFlowWithOidcMethod';
import {
    instanceOfUpdateRegistrationFlowWithOidcMethod,
    UpdateRegistrationFlowWithOidcMethodFromJSON,
    UpdateRegistrationFlowWithOidcMethodFromJSONTyped,
    UpdateRegistrationFlowWithOidcMethodToJSON,
} from './UpdateRegistrationFlowWithOidcMethod';
import type { UpdateRegistrationFlowWithPasskeyMethod } from './UpdateRegistrationFlowWithPasskeyMethod';
import {
    instanceOfUpdateRegistrationFlowWithPasskeyMethod,
    UpdateRegistrationFlowWithPasskeyMethodFromJSON,
    UpdateRegistrationFlowWithPasskeyMethodFromJSONTyped,
    UpdateRegistrationFlowWithPasskeyMethodToJSON,
} from './UpdateRegistrationFlowWithPasskeyMethod';
import type { UpdateRegistrationFlowWithPasswordMethod } from './UpdateRegistrationFlowWithPasswordMethod';
import {
    instanceOfUpdateRegistrationFlowWithPasswordMethod,
    UpdateRegistrationFlowWithPasswordMethodFromJSON,
    UpdateRegistrationFlowWithPasswordMethodFromJSONTyped,
    UpdateRegistrationFlowWithPasswordMethodToJSON,
} from './UpdateRegistrationFlowWithPasswordMethod';
import type { UpdateRegistrationFlowWithProfileMethod } from './UpdateRegistrationFlowWithProfileMethod';
import {
    instanceOfUpdateRegistrationFlowWithProfileMethod,
    UpdateRegistrationFlowWithProfileMethodFromJSON,
    UpdateRegistrationFlowWithProfileMethodFromJSONTyped,
    UpdateRegistrationFlowWithProfileMethodToJSON,
} from './UpdateRegistrationFlowWithProfileMethod';
import type { UpdateRegistrationFlowWithSamlMethod } from './UpdateRegistrationFlowWithSamlMethod';
import {
    instanceOfUpdateRegistrationFlowWithSamlMethod,
    UpdateRegistrationFlowWithSamlMethodFromJSON,
    UpdateRegistrationFlowWithSamlMethodFromJSONTyped,
    UpdateRegistrationFlowWithSamlMethodToJSON,
} from './UpdateRegistrationFlowWithSamlMethod';
import type { UpdateRegistrationFlowWithWebAuthnMethod } from './UpdateRegistrationFlowWithWebAuthnMethod';
import {
    instanceOfUpdateRegistrationFlowWithWebAuthnMethod,
    UpdateRegistrationFlowWithWebAuthnMethodFromJSON,
    UpdateRegistrationFlowWithWebAuthnMethodFromJSONTyped,
    UpdateRegistrationFlowWithWebAuthnMethodToJSON,
} from './UpdateRegistrationFlowWithWebAuthnMethod';

/**
 * @type UpdateRegistrationFlowBody
 * Update Registration Request Body
 * @export
 */
export type UpdateRegistrationFlowBody = { method: 'code' } & UpdateRegistrationFlowWithCodeMethod | { method: 'oidc' } & UpdateRegistrationFlowWithOidcMethod | { method: 'passkey' } & UpdateRegistrationFlowWithPasskeyMethod | { method: 'password' } & UpdateRegistrationFlowWithPasswordMethod | { method: 'profile' } & UpdateRegistrationFlowWithProfileMethod | { method: 'saml' } & UpdateRegistrationFlowWithSamlMethod | { method: 'webauthn' } & UpdateRegistrationFlowWithWebAuthnMethod;

export function UpdateRegistrationFlowBodyFromJSON(json: any): UpdateRegistrationFlowBody {
    return UpdateRegistrationFlowBodyFromJSONTyped(json, false);
}

export function UpdateRegistrationFlowBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRegistrationFlowBody {
    if (json == null) {
        return json;
    }
    switch (json['method']) {
        case 'code':
            return Object.assign({}, UpdateRegistrationFlowWithCodeMethodFromJSONTyped(json, true), { method: 'code' } as const);
        case 'oidc':
            return Object.assign({}, UpdateRegistrationFlowWithOidcMethodFromJSONTyped(json, true), { method: 'oidc' } as const);
        case 'passkey':
            return Object.assign({}, UpdateRegistrationFlowWithPasskeyMethodFromJSONTyped(json, true), { method: 'passkey' } as const);
        case 'password':
            return Object.assign({}, UpdateRegistrationFlowWithPasswordMethodFromJSONTyped(json, true), { method: 'password' } as const);
        case 'profile':
            return Object.assign({}, UpdateRegistrationFlowWithProfileMethodFromJSONTyped(json, true), { method: 'profile' } as const);
        case 'saml':
            return Object.assign({}, UpdateRegistrationFlowWithSamlMethodFromJSONTyped(json, true), { method: 'saml' } as const);
        case 'webauthn':
            return Object.assign({}, UpdateRegistrationFlowWithWebAuthnMethodFromJSONTyped(json, true), { method: 'webauthn' } as const);
        default:
            throw new Error(`No variant of UpdateRegistrationFlowBody exists with 'method=${json['method']}'`);
    }
}

export function UpdateRegistrationFlowBodyToJSON(json: any): any {
    return UpdateRegistrationFlowBodyToJSONTyped(json, false);
}

export function UpdateRegistrationFlowBodyToJSONTyped(value?: UpdateRegistrationFlowBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['method']) {
        case 'code':
            return Object.assign({}, UpdateRegistrationFlowWithCodeMethodToJSON(value), { method: 'code' } as const);
        case 'oidc':
            return Object.assign({}, UpdateRegistrationFlowWithOidcMethodToJSON(value), { method: 'oidc' } as const);
        case 'passkey':
            return Object.assign({}, UpdateRegistrationFlowWithPasskeyMethodToJSON(value), { method: 'passkey' } as const);
        case 'password':
            return Object.assign({}, UpdateRegistrationFlowWithPasswordMethodToJSON(value), { method: 'password' } as const);
        case 'profile':
            return Object.assign({}, UpdateRegistrationFlowWithProfileMethodToJSON(value), { method: 'profile' } as const);
        case 'saml':
            return Object.assign({}, UpdateRegistrationFlowWithSamlMethodToJSON(value), { method: 'saml' } as const);
        case 'webauthn':
            return Object.assign({}, UpdateRegistrationFlowWithWebAuthnMethodToJSON(value), { method: 'webauthn' } as const);
        default:
            throw new Error(`No variant of UpdateRegistrationFlowBody exists with 'method=${value['method']}'`);
    }

}

