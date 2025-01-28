/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.3
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
 * @interface UiText
 */
export interface UiText {
    /**
     * The message's context. Useful when customizing messages.
     * @type {object}
     * @memberof UiText
     */
    context?: object;
    /**
     * 
     * @type {number}
     * @memberof UiText
     */
    id: number;
    /**
     * The message text. Written in american english.
     * @type {string}
     * @memberof UiText
     */
    text: string;
    /**
     * The message type.
     * info Info
     * error Error
     * success Success
     * @type {string}
     * @memberof UiText
     */
    type: UiTextTypeEnum;
}


/**
 * @export
 */
export const UiTextTypeEnum = {
    Info: 'info',
    Error: 'error',
    Success: 'success'
} as const;
export type UiTextTypeEnum = typeof UiTextTypeEnum[keyof typeof UiTextTypeEnum];


/**
 * Check if a given object implements the UiText interface.
 */
export function instanceOfUiText(value: object): value is UiText {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function UiTextFromJSON(json: any): UiText {
    return UiTextFromJSONTyped(json, false);
}

export function UiTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiText {
    if (json == null) {
        return json;
    }
    return {
        
        'context': json['context'] == null ? undefined : json['context'],
        'id': json['id'],
        'text': json['text'],
        'type': json['type'],
    };
}

export function UiTextToJSON(value?: UiText | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'context': value['context'],
        'id': value['id'],
        'text': value['text'],
        'type': value['type'],
    };
}

