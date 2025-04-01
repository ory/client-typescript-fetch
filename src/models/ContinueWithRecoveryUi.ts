/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.1
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ContinueWithRecoveryUiFlow } from './ContinueWithRecoveryUiFlow';
import {
    ContinueWithRecoveryUiFlowFromJSON,
    ContinueWithRecoveryUiFlowFromJSONTyped,
    ContinueWithRecoveryUiFlowToJSON,
    ContinueWithRecoveryUiFlowToJSONTyped,
} from './ContinueWithRecoveryUiFlow';

/**
 * Indicates, that the UI flow could be continued by showing a recovery ui
 * @export
 * @interface ContinueWithRecoveryUi
 */
export interface ContinueWithRecoveryUi {
    /**
     * Action will always be `show_recovery_ui`
     * show_recovery_ui ContinueWithActionShowRecoveryUIString
     * @type {string}
     * @memberof ContinueWithRecoveryUi
     */
    action: ContinueWithRecoveryUiActionEnum;
    /**
     * 
     * @type {ContinueWithRecoveryUiFlow}
     * @memberof ContinueWithRecoveryUi
     */
    flow: ContinueWithRecoveryUiFlow;
}


/**
 * @export
 */
export const ContinueWithRecoveryUiActionEnum = {
    ShowRecoveryUi: 'show_recovery_ui',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ContinueWithRecoveryUiActionEnum = typeof ContinueWithRecoveryUiActionEnum[keyof typeof ContinueWithRecoveryUiActionEnum];


/**
 * Check if a given object implements the ContinueWithRecoveryUi interface.
 */
export function instanceOfContinueWithRecoveryUi(value: object): value is ContinueWithRecoveryUi {
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('flow' in value) || value['flow'] === undefined) return false;
    return true;
}

export function ContinueWithRecoveryUiFromJSON(json: any): ContinueWithRecoveryUi {
    return ContinueWithRecoveryUiFromJSONTyped(json, false);
}

export function ContinueWithRecoveryUiFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinueWithRecoveryUi {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'],
        'flow': ContinueWithRecoveryUiFlowFromJSON(json['flow']),
    };
}

export function ContinueWithRecoveryUiToJSON(json: any): ContinueWithRecoveryUi {
    return ContinueWithRecoveryUiToJSONTyped(json, false);
}

export function ContinueWithRecoveryUiToJSONTyped(value?: ContinueWithRecoveryUi | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'action': value['action'],
        'flow': ContinueWithRecoveryUiFlowToJSON(value['flow']),
    };
}

