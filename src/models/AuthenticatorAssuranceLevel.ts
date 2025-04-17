/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The authenticator assurance level can be one of "aal1", "aal2", or "aal3". A higher number means that it is harder
 * for an attacker to compromise the account.
 * 
 * Generally, "aal1" implies that one authentication factor was used while AAL2 implies that two factors (e.g.
 * password + TOTP) have been used.
 * 
 * To learn more about these levels please head over to: https://www.ory.sh/kratos/docs/concepts/credentials
 * @export
 */
export const AuthenticatorAssuranceLevel = {
    Aal0: 'aal0',
    Aal1: 'aal1',
    Aal2: 'aal2',
    Aal3: 'aal3',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type AuthenticatorAssuranceLevel = typeof AuthenticatorAssuranceLevel[keyof typeof AuthenticatorAssuranceLevel];


export function instanceOfAuthenticatorAssuranceLevel(value: any): boolean {
    for (const key in AuthenticatorAssuranceLevel) {
        if (Object.prototype.hasOwnProperty.call(AuthenticatorAssuranceLevel, key)) {
            if (AuthenticatorAssuranceLevel[key as keyof typeof AuthenticatorAssuranceLevel] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AuthenticatorAssuranceLevelFromJSON(json: any): AuthenticatorAssuranceLevel {
    return AuthenticatorAssuranceLevelFromJSONTyped(json, false);
}

export function AuthenticatorAssuranceLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticatorAssuranceLevel {
    return json as AuthenticatorAssuranceLevel;
}

export function AuthenticatorAssuranceLevelToJSON(value?: AuthenticatorAssuranceLevel | null): any {
    return value as any;
}

export function AuthenticatorAssuranceLevelToJSONTyped(value: any, ignoreDiscriminator: boolean): AuthenticatorAssuranceLevel {
    return value as AuthenticatorAssuranceLevel;
}

