/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ManagedIdentitySchema } from './ManagedIdentitySchema';
import {
    ManagedIdentitySchemaFromJSON,
    ManagedIdentitySchemaFromJSONTyped,
    ManagedIdentitySchemaToJSON,
} from './ManagedIdentitySchema';

/**
 * 
 * @export
 * @interface NormalizedProjectRevisionIdentitySchema
 */
export interface NormalizedProjectRevisionIdentitySchema {
    /**
     * The Project's Revision Creation Date
     * @type {Date}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    readonly created_at?: Date;
    /**
     * The unique ID of this entry.
     * @type {string}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    id?: string;
    /**
     * 
     * @type {ManagedIdentitySchema}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    identity_schema?: ManagedIdentitySchema;
    /**
     * 
     * @type {string}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    identity_schema_id?: string | null;
    /**
     * The imported (named) ID of the Identity Schema referenced in the Ory Kratos config.
     * @type {string}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    import_id?: string;
    /**
     * The ImportURL can be used to import an Identity Schema from a bse64 encoded string.
     * In the future, this key also support HTTPS and other sources!
     * 
     * If you import an Ory Kratos configuration, this would be akin to the `identity.schemas.#.url` key.
     * 
     * The configuration will always return the import URL when you fetch it from the API.
     * @type {string}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    import_url?: string;
    /**
     * If true sets the default schema for identities
     * 
     * Only one schema can ever be the default schema. If you
     * try to add two schemas with default to true, the
     * request will fail.
     * @type {boolean}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    is_default?: boolean;
    /**
     * Use a preset instead of a custom identity schema.
     * @type {string}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    preset?: string;
    /**
     * The Revision's ID this schema belongs to
     * @type {string}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    project_revision_id?: string;
    /**
     * Last Time Project's Revision was Updated
     * @type {Date}
     * @memberof NormalizedProjectRevisionIdentitySchema
     */
    readonly updated_at?: Date;
}

/**
 * Check if a given object implements the NormalizedProjectRevisionIdentitySchema interface.
 */
export function instanceOfNormalizedProjectRevisionIdentitySchema(value: object): value is NormalizedProjectRevisionIdentitySchema {
    return true;
}

export function NormalizedProjectRevisionIdentitySchemaFromJSON(json: any): NormalizedProjectRevisionIdentitySchema {
    return NormalizedProjectRevisionIdentitySchemaFromJSONTyped(json, false);
}

export function NormalizedProjectRevisionIdentitySchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedProjectRevisionIdentitySchema {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'id': json['id'] == null ? undefined : json['id'],
        'identity_schema': json['identity_schema'] == null ? undefined : ManagedIdentitySchemaFromJSON(json['identity_schema']),
        'identity_schema_id': json['identity_schema_id'] == null ? undefined : json['identity_schema_id'],
        'import_id': json['import_id'] == null ? undefined : json['import_id'],
        'import_url': json['import_url'] == null ? undefined : json['import_url'],
        'is_default': json['is_default'] == null ? undefined : json['is_default'],
        'preset': json['preset'] == null ? undefined : json['preset'],
        'project_revision_id': json['project_revision_id'] == null ? undefined : json['project_revision_id'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function NormalizedProjectRevisionIdentitySchemaToJSON(value?: Omit<NormalizedProjectRevisionIdentitySchema, 'created_at'|'updated_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'identity_schema': ManagedIdentitySchemaToJSON(value['identity_schema']),
        'identity_schema_id': value['identity_schema_id'],
        'import_id': value['import_id'],
        'import_url': value['import_url'],
        'is_default': value['is_default'],
        'preset': value['preset'],
        'project_revision_id': value['project_revision_id'],
    };
}

