/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.19.0
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The experimental state represents the state of a recovery flow. This field is EXPERIMENTAL and subject to change!
 * @export
 */
export const RecoveryFlowState = {
    ChooseMethod: 'choose_method',
    SentEmail: 'sent_email',
    PassedChallenge: 'passed_challenge',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type RecoveryFlowState = typeof RecoveryFlowState[keyof typeof RecoveryFlowState];


export function instanceOfRecoveryFlowState(value: any): boolean {
    for (const key in RecoveryFlowState) {
        if (Object.prototype.hasOwnProperty.call(RecoveryFlowState, key)) {
            if (RecoveryFlowState[key as keyof typeof RecoveryFlowState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RecoveryFlowStateFromJSON(json: any): RecoveryFlowState {
    return RecoveryFlowStateFromJSONTyped(json, false);
}

export function RecoveryFlowStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecoveryFlowState {
    return json as RecoveryFlowState;
}

export function RecoveryFlowStateToJSON(value?: RecoveryFlowState | null): any {
    return value as any;
}

export function RecoveryFlowStateToJSONTyped(value: any, ignoreDiscriminator: boolean): RecoveryFlowState {
    return value as RecoveryFlowState;
}

