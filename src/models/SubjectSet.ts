/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.0
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
 * @interface SubjectSet
 */
export interface SubjectSet {
    /**
     * Namespace of the Subject Set
     * @type {string}
     * @memberof SubjectSet
     */
    namespace: string;
    /**
     * Object of the Subject Set
     * @type {string}
     * @memberof SubjectSet
     */
    object: string;
    /**
     * Relation of the Subject Set
     * @type {string}
     * @memberof SubjectSet
     */
    relation: string;
}

/**
 * Check if a given object implements the SubjectSet interface.
 */
export function instanceOfSubjectSet(value: object): value is SubjectSet {
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('object' in value) || value['object'] === undefined) return false;
    if (!('relation' in value) || value['relation'] === undefined) return false;
    return true;
}

export function SubjectSetFromJSON(json: any): SubjectSet {
    return SubjectSetFromJSONTyped(json, false);
}

export function SubjectSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubjectSet {
    if (json == null) {
        return json;
    }
    return {
        
        'namespace': json['namespace'],
        'object': json['object'],
        'relation': json['relation'],
    };
}

export function SubjectSetToJSON(json: any): SubjectSet {
    return SubjectSetToJSONTyped(json, false);
}

export function SubjectSetToJSONTyped(value?: SubjectSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'namespace': value['namespace'],
        'object': value['object'],
        'relation': value['relation'],
    };
}

