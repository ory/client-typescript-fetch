/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.15
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Create Event Stream Request Body
 * @export
 * @interface CreateEventStreamBody
 */
export interface CreateEventStreamBody {
    /**
     * The AWS IAM role ARN to assume when publishing to the SNS topic.
     * @type {string}
     * @memberof CreateEventStreamBody
     */
    role_arn: string;
    /**
     * The AWS SNS topic ARN.
     * @type {string}
     * @memberof CreateEventStreamBody
     */
    topic_arn: string;
    /**
     * The type of the event stream (AWS SNS, GCP Pub/Sub, etc).
     * @type {string}
     * @memberof CreateEventStreamBody
     */
    type: CreateEventStreamBodyTypeEnum;
}


/**
 * @export
 */
export const CreateEventStreamBodyTypeEnum = {
    Sns: 'sns'
} as const;
export type CreateEventStreamBodyTypeEnum = typeof CreateEventStreamBodyTypeEnum[keyof typeof CreateEventStreamBodyTypeEnum];


/**
 * Check if a given object implements the CreateEventStreamBody interface.
 */
export function instanceOfCreateEventStreamBody(value: object): value is CreateEventStreamBody {
    if (!('role_arn' in value) || value['role_arn'] === undefined) return false;
    if (!('topic_arn' in value) || value['topic_arn'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function CreateEventStreamBodyFromJSON(json: any): CreateEventStreamBody {
    return CreateEventStreamBodyFromJSONTyped(json, false);
}

export function CreateEventStreamBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEventStreamBody {
    if (json == null) {
        return json;
    }
    return {
        
        'role_arn': json['role_arn'],
        'topic_arn': json['topic_arn'],
        'type': json['type'],
    };
}

export function CreateEventStreamBodyToJSON(value?: CreateEventStreamBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'role_arn': value['role_arn'],
        'topic_arn': value['topic_arn'],
        'type': value['type'],
    };
}

