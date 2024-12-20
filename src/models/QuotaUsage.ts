/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.16
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
 * @interface QuotaUsage
 */
export interface QuotaUsage {
    /**
     * The additional price per unit in cents.
     * @type {string}
     * @memberof QuotaUsage
     */
    additional_price: string;
    /**
     * 
     * @type {boolean}
     * @memberof QuotaUsage
     */
    can_use_more: boolean;
    /**
     * 
     * production_projects ProductionProjects
     * staging_projects StagingProjects
     * development_projects DevelopmentProjects
     * daily_active_users DailyActiveUsers
     * custom_domains CustomDomains
     * event_streams EventStreams
     * event_stream_events EventStreamEvents
     * sla SLA
     * collaborator_seats CollaboratorSeats
     * edge_cache EdgeCache
     * branding_themes BrandingThemes
     * zendesk_support ZendeskSupport
     * project_metrics ProjectMetrics
     * project_metrics_time_window ProjectMetricsTimeWindow
     * project_metrics_events_history ProjectMetricsEventsHistory
     * organizations Organizations
     * rop_grant ResourceOwnerPasswordGrant
     * concierge_onboarding ConciergeOnboarding
     * credit Credit
     * data_location_global DataLocationGlobal
     * data_location_us DataLocationUS
     * data_location_asiane DataLocationAsiaNorthEast
     * m2m_token_issuance M2MTokenIssuance
     * permission_checks PermissionChecks
     * captcha Captcha
     * data_location_regional DataLocationRegional  Required Features
     * rate_limit_tier RateLimitTier
     * session_rate_limit_tier RateLimitTierSessions
     * identities_list_rate_limit_tier RateLimitTierIdentitiesList
     * permission_checks_rate_limit_tier RateLimitTierPermissionChecks
     * oauth2_introspect_rate_limit_tier RateLimitTierOAuth2Introspect
     * create_recovery_admin_rate_limit_tier RateLimitTierCreateAdminRecovery
     * @type {string}
     * @memberof QuotaUsage
     */
    feature: QuotaUsageFeatureEnum;
    /**
     * 
     * @type {boolean}
     * @memberof QuotaUsage
     */
    feature_available: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuotaUsage
     */
    included: number;
    /**
     * 
     * @type {boolean}
     * @memberof QuotaUsage
     */
    is_unlimited: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuotaUsage
     */
    used: number;
}


/**
 * @export
 */
export const QuotaUsageFeatureEnum = {
    ProductionProjects: 'production_projects',
    StagingProjects: 'staging_projects',
    DevelopmentProjects: 'development_projects',
    DailyActiveUsers: 'daily_active_users',
    CustomDomains: 'custom_domains',
    EventStreams: 'event_streams',
    EventStreamEvents: 'event_stream_events',
    Sla: 'sla',
    CollaboratorSeats: 'collaborator_seats',
    EdgeCache: 'edge_cache',
    BrandingThemes: 'branding_themes',
    ZendeskSupport: 'zendesk_support',
    ProjectMetrics: 'project_metrics',
    ProjectMetricsTimeWindow: 'project_metrics_time_window',
    ProjectMetricsEventsHistory: 'project_metrics_events_history',
    Organizations: 'organizations',
    RopGrant: 'rop_grant',
    ConciergeOnboarding: 'concierge_onboarding',
    Credit: 'credit',
    DataLocationGlobal: 'data_location_global',
    DataLocationUs: 'data_location_us',
    DataLocationAsiane: 'data_location_asiane',
    M2mTokenIssuance: 'm2m_token_issuance',
    PermissionChecks: 'permission_checks',
    Captcha: 'captcha',
    DataLocationRegional: 'data_location_regional',
    RateLimitTier: 'rate_limit_tier',
    SessionRateLimitTier: 'session_rate_limit_tier',
    IdentitiesListRateLimitTier: 'identities_list_rate_limit_tier',
    PermissionChecksRateLimitTier: 'permission_checks_rate_limit_tier',
    Oauth2IntrospectRateLimitTier: 'oauth2_introspect_rate_limit_tier',
    CreateRecoveryAdminRateLimitTier: 'create_recovery_admin_rate_limit_tier'
} as const;
export type QuotaUsageFeatureEnum = typeof QuotaUsageFeatureEnum[keyof typeof QuotaUsageFeatureEnum];


/**
 * Check if a given object implements the QuotaUsage interface.
 */
export function instanceOfQuotaUsage(value: object): value is QuotaUsage {
    if (!('additional_price' in value) || value['additional_price'] === undefined) return false;
    if (!('can_use_more' in value) || value['can_use_more'] === undefined) return false;
    if (!('feature' in value) || value['feature'] === undefined) return false;
    if (!('feature_available' in value) || value['feature_available'] === undefined) return false;
    if (!('included' in value) || value['included'] === undefined) return false;
    if (!('is_unlimited' in value) || value['is_unlimited'] === undefined) return false;
    if (!('used' in value) || value['used'] === undefined) return false;
    return true;
}

export function QuotaUsageFromJSON(json: any): QuotaUsage {
    return QuotaUsageFromJSONTyped(json, false);
}

export function QuotaUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuotaUsage {
    if (json == null) {
        return json;
    }
    return {
        
        'additional_price': json['additional_price'],
        'can_use_more': json['can_use_more'],
        'feature': json['feature'],
        'feature_available': json['feature_available'],
        'included': json['included'],
        'is_unlimited': json['is_unlimited'],
        'used': json['used'],
    };
}

export function QuotaUsageToJSON(value?: QuotaUsage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'additional_price': value['additional_price'],
        'can_use_more': value['can_use_more'],
        'feature': value['feature'],
        'feature_available': value['feature_available'],
        'included': value['included'],
        'is_unlimited': value['is_unlimited'],
        'used': value['used'],
    };
}

