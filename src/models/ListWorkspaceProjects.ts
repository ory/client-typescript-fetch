/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ProjectMetadata } from './ProjectMetadata';
import {
    ProjectMetadataFromJSON,
    ProjectMetadataFromJSONTyped,
    ProjectMetadataToJSON,
    ProjectMetadataToJSONTyped,
} from './ProjectMetadata';

/**
 * 
 * @export
 * @interface ListWorkspaceProjects
 */
export interface ListWorkspaceProjects {
    /**
     * 
     * @type {boolean}
     * @memberof ListWorkspaceProjects
     */
    has_next_page: boolean;
    /**
     * 
     * @type {string}
     * @memberof ListWorkspaceProjects
     */
    next_page: string;
    /**
     * 
     * @type {Array<ProjectMetadata>}
     * @memberof ListWorkspaceProjects
     */
    projects: Array<ProjectMetadata>;
}

/**
 * Check if a given object implements the ListWorkspaceProjects interface.
 */
export function instanceOfListWorkspaceProjects(value: object): value is ListWorkspaceProjects {
    if (!('has_next_page' in value) || value['has_next_page'] === undefined) return false;
    if (!('next_page' in value) || value['next_page'] === undefined) return false;
    if (!('projects' in value) || value['projects'] === undefined) return false;
    return true;
}

export function ListWorkspaceProjectsFromJSON(json: any): ListWorkspaceProjects {
    return ListWorkspaceProjectsFromJSONTyped(json, false);
}

export function ListWorkspaceProjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListWorkspaceProjects {
    if (json == null) {
        return json;
    }
    return {
        
        'has_next_page': json['has_next_page'],
        'next_page': json['next_page'],
        'projects': ((json['projects'] as Array<any>).map(ProjectMetadataFromJSON)),
    };
}

export function ListWorkspaceProjectsToJSON(json: any): ListWorkspaceProjects {
    return ListWorkspaceProjectsToJSONTyped(json, false);
}

export function ListWorkspaceProjectsToJSONTyped(value?: ListWorkspaceProjects | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'has_next_page': value['has_next_page'],
        'next_page': value['next_page'],
        'projects': ((value['projects'] as Array<any>).map(ProjectMetadataToJSON)),
    };
}

