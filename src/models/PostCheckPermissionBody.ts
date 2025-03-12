/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.18.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { SubjectSet } from './SubjectSet';
import {
    SubjectSetFromJSON,
    SubjectSetFromJSONTyped,
    SubjectSetToJSON,
    SubjectSetToJSONTyped,
} from './SubjectSet';

/**
 * Check Permission using Post Request Body
 * @export
 * @interface PostCheckPermissionBody
 */
export interface PostCheckPermissionBody {
    /**
     * Namespace to query
     * @type {string}
     * @memberof PostCheckPermissionBody
     */
    namespace?: string;
    /**
     * Object to query
     * @type {string}
     * @memberof PostCheckPermissionBody
     */
    object?: string;
    /**
     * Relation to query
     * @type {string}
     * @memberof PostCheckPermissionBody
     */
    relation?: string;
    /**
     * SubjectID to query
     * 
     * Either SubjectSet or SubjectID can be provided.
     * @type {string}
     * @memberof PostCheckPermissionBody
     */
    subject_id?: string;
    /**
     * 
     * @type {SubjectSet}
     * @memberof PostCheckPermissionBody
     */
    subject_set?: SubjectSet;
}

/**
 * Check if a given object implements the PostCheckPermissionBody interface.
 */
export function instanceOfPostCheckPermissionBody(value: object): value is PostCheckPermissionBody {
    return true;
}

export function PostCheckPermissionBodyFromJSON(json: any): PostCheckPermissionBody {
    return PostCheckPermissionBodyFromJSONTyped(json, false);
}

export function PostCheckPermissionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCheckPermissionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
        'object': json['object'] == null ? undefined : json['object'],
        'relation': json['relation'] == null ? undefined : json['relation'],
        'subject_id': json['subject_id'] == null ? undefined : json['subject_id'],
        'subject_set': json['subject_set'] == null ? undefined : SubjectSetFromJSON(json['subject_set']),
    };
}

export function PostCheckPermissionBodyToJSON(json: any): PostCheckPermissionBody {
    return PostCheckPermissionBodyToJSONTyped(json, false);
}

export function PostCheckPermissionBodyToJSONTyped(value?: PostCheckPermissionBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'namespace': value['namespace'],
        'object': value['object'],
        'relation': value['relation'],
        'subject_id': value['subject_id'],
        'subject_set': SubjectSetToJSON(value['subject_set']),
    };
}

