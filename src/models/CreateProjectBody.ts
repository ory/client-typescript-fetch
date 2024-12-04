/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.14
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Create Project Request Body
 * @export
 * @interface CreateProjectBody
 */
export interface CreateProjectBody {
    /**
     * The environment of the project.
     * prod Production
     * stage Staging
     * dev Development
     * @type {string}
     * @memberof CreateProjectBody
     */
    environment: CreateProjectBodyEnvironmentEnum;
    /**
     * Home Region
     * 
     * The home region of the project. This is the region where the project will be created.
     * eu-central EUCentral
     * asia-northeast AsiaNorthEast
     * us-east USEast
     * us-west USWest
     * us US
     * global Global
     * @type {string}
     * @memberof CreateProjectBody
     */
    home_region?: CreateProjectBodyHomeRegionEnum;
    /**
     * The name of the project to be created
     * @type {string}
     * @memberof CreateProjectBody
     */
    name: string;
    /**
     * The workspace to create the project in.
     * @type {string}
     * @memberof CreateProjectBody
     */
    workspace_id?: string;
}


/**
 * @export
 */
export const CreateProjectBodyEnvironmentEnum = {
    Prod: 'prod',
    Stage: 'stage',
    Dev: 'dev'
} as const;
export type CreateProjectBodyEnvironmentEnum = typeof CreateProjectBodyEnvironmentEnum[keyof typeof CreateProjectBodyEnvironmentEnum];

/**
 * @export
 */
export const CreateProjectBodyHomeRegionEnum = {
    EuCentral: 'eu-central',
    AsiaNortheast: 'asia-northeast',
    UsEast: 'us-east',
    UsWest: 'us-west',
    Us: 'us',
    Global: 'global'
} as const;
export type CreateProjectBodyHomeRegionEnum = typeof CreateProjectBodyHomeRegionEnum[keyof typeof CreateProjectBodyHomeRegionEnum];


/**
 * Check if a given object implements the CreateProjectBody interface.
 */
export function instanceOfCreateProjectBody(value: object): value is CreateProjectBody {
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateProjectBodyFromJSON(json: any): CreateProjectBody {
    return CreateProjectBodyFromJSONTyped(json, false);
}

export function CreateProjectBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectBody {
    if (json == null) {
        return json;
    }
    return {
        
        'environment': json['environment'],
        'home_region': json['home_region'] == null ? undefined : json['home_region'],
        'name': json['name'],
        'workspace_id': json['workspace_id'] == null ? undefined : json['workspace_id'],
    };
}

export function CreateProjectBodyToJSON(value?: CreateProjectBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'environment': value['environment'],
        'home_region': value['home_region'],
        'name': value['name'],
        'workspace_id': value['workspace_id'],
    };
}

