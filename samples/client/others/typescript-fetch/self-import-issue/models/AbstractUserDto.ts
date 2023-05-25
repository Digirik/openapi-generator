/* tslint:disable */
/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BranchDto } from './BranchDto';
import {
    BranchDtoFromJSON,
    BranchDtoFromJSONTyped,
    BranchDtoToJSON,
} from './BranchDto';
import type { InternalAuthenticatedUserDto } from './InternalAuthenticatedUserDto';
import {
    InternalAuthenticatedUserDtoFromJSON,
    InternalAuthenticatedUserDtoFromJSONTyped,
    InternalAuthenticatedUserDtoToJSON,
} from './InternalAuthenticatedUserDto';
import type { RemoteAuthenticatedUserDto } from './RemoteAuthenticatedUserDto';
import {
    RemoteAuthenticatedUserDtoFromJSON,
    RemoteAuthenticatedUserDtoFromJSONTyped,
    RemoteAuthenticatedUserDtoToJSON,
} from './RemoteAuthenticatedUserDto';

import {
     InternalAuthenticatedUserDtoFromJSONTyped,
     RemoteAuthenticatedUserDtoFromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface AbstractUserDto
 */
export interface AbstractUserDto {
    /**
     * 
     * @type {string}
     * @memberof AbstractUserDto
     */
    username?: string;
    /**
     * 
     * @type {BranchDto}
     * @memberof AbstractUserDto
     */
    branch?: BranchDto;
    /**
     * 
     * @type {string}
     * @memberof AbstractUserDto
     */
    type?: string;
}

/**
 * Check if a given object implements the AbstractUserDto interface.
 */
export function instanceOfAbstractUserDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AbstractUserDtoFromJSON(json: any): AbstractUserDto {
    return AbstractUserDtoFromJSONTyped(json, false);
}

export function AbstractUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractUserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['type'] === 'internal-authenticated') {
            return InternalAuthenticatedUserDtoFromJSONTyped(json, true);
        }
        if (json['type'] === 'remote-authenticated') {
            return RemoteAuthenticatedUserDtoFromJSONTyped(json, true);
        }
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'branch': !exists(json, 'branch') ? undefined : BranchDtoFromJSON(json['branch']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function AbstractUserDtoToJSON(value?: AbstractUserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'branch': BranchDtoToJSON(value.branch),
        'type': value.type,
    };
}

