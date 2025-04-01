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
import type { Workspace } from './Workspace';
import {
    WorkspaceFromJSON,
    WorkspaceFromJSONTyped,
    WorkspaceToJSON,
    WorkspaceToJSONTyped,
} from './Workspace';

/**
 * 
 * @export
 * @interface ProjectMetadata
 */
export interface ProjectMetadata {
    /**
     * The Project's Creation Date
     * @type {Date}
     * @memberof ProjectMetadata
     */
    created_at: Date;
    /**
     * The environment of the project.
     * prod Production
     * stage Staging
     * dev Development
     * @type {string}
     * @memberof ProjectMetadata
     */
    environment: ProjectMetadataEnvironmentEnum;
    /**
     * The project's data home region
     * eu-central EUCentral
     * asia-northeast AsiaNorthEast
     * us-east USEast
     * us-west USWest
     * us US
     * global Global
     * @type {string}
     * @memberof ProjectMetadata
     */
    home_region: ProjectMetadataHomeRegionEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectMetadata
     */
    hosts: Array<string>;
    /**
     * The project's ID.
     * @type {string}
     * @memberof ProjectMetadata
     */
    readonly id: string;
    /**
     * The project's name if set
     * @type {string}
     * @memberof ProjectMetadata
     */
    name: string;
    /**
     * The project's slug
     * @type {string}
     * @memberof ProjectMetadata
     */
    readonly slug: string;
    /**
     * The state of the project.
     * running Running
     * halted Halted
     * deleted Deleted
     * @type {string}
     * @memberof ProjectMetadata
     */
    state: ProjectMetadataStateEnum;
    /**
     * 
     * @type {string}
     * @memberof ProjectMetadata
     */
    subscription_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectMetadata
     */
    subscription_plan?: string | null;
    /**
     * Last Time Project was Updated
     * @type {Date}
     * @memberof ProjectMetadata
     */
    updated_at: Date;
    /**
     * 
     * @type {Workspace}
     * @memberof ProjectMetadata
     */
    workspace?: Workspace;
    /**
     * 
     * @type {string}
     * @memberof ProjectMetadata
     */
    workspace_id?: string | null;
}


/**
 * @export
 */
export const ProjectMetadataEnvironmentEnum = {
    Prod: 'prod',
    Stage: 'stage',
    Dev: 'dev',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ProjectMetadataEnvironmentEnum = typeof ProjectMetadataEnvironmentEnum[keyof typeof ProjectMetadataEnvironmentEnum];

/**
 * @export
 */
export const ProjectMetadataHomeRegionEnum = {
    EuCentral: 'eu-central',
    AsiaNortheast: 'asia-northeast',
    UsEast: 'us-east',
    UsWest: 'us-west',
    Us: 'us',
    Global: 'global',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ProjectMetadataHomeRegionEnum = typeof ProjectMetadataHomeRegionEnum[keyof typeof ProjectMetadataHomeRegionEnum];

/**
 * @export
 */
export const ProjectMetadataStateEnum = {
    Running: 'running',
    Halted: 'halted',
    Deleted: 'deleted',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ProjectMetadataStateEnum = typeof ProjectMetadataStateEnum[keyof typeof ProjectMetadataStateEnum];


/**
 * Check if a given object implements the ProjectMetadata interface.
 */
export function instanceOfProjectMetadata(value: object): value is ProjectMetadata {
    if (!('created_at' in value) || value['created_at'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('home_region' in value) || value['home_region'] === undefined) return false;
    if (!('hosts' in value) || value['hosts'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('updated_at' in value) || value['updated_at'] === undefined) return false;
    return true;
}

export function ProjectMetadataFromJSON(json: any): ProjectMetadata {
    return ProjectMetadataFromJSONTyped(json, false);
}

export function ProjectMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'environment': json['environment'],
        'home_region': json['home_region'],
        'hosts': json['hosts'],
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
        'state': json['state'],
        'subscription_id': json['subscription_id'] == null ? undefined : json['subscription_id'],
        'subscription_plan': json['subscription_plan'] == null ? undefined : json['subscription_plan'],
        'updated_at': (new Date(json['updated_at'])),
        'workspace': json['workspace'] == null ? undefined : WorkspaceFromJSON(json['workspace']),
        'workspace_id': json['workspace_id'] == null ? undefined : json['workspace_id'],
    };
}

export function ProjectMetadataToJSON(json: any): ProjectMetadata {
    return ProjectMetadataToJSONTyped(json, false);
}

export function ProjectMetadataToJSONTyped(value?: Omit<ProjectMetadata, 'id'|'slug'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created_at': ((value['created_at']).toISOString()),
        'environment': value['environment'],
        'home_region': value['home_region'],
        'hosts': value['hosts'],
        'name': value['name'],
        'state': value['state'],
        'subscription_id': value['subscription_id'],
        'subscription_plan': value['subscription_plan'],
        'updated_at': ((value['updated_at']).toISOString()),
        'workspace': WorkspaceToJSON(value['workspace']),
        'workspace_id': value['workspace_id'],
    };
}

