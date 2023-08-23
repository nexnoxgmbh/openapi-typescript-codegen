
import type { Enum } from '../../../client/interfaces/Enum';
import { isString } from '../../../utils/isString';
import type { WithEnumExtension } from '../interfaces/Extensions/WithEnumExtension';

/**
 * Extend the enum with the x-enum properties. This adds the capability
 * to use names and descriptions inside the generated enums.
 * @param enumerators
 * @param definition
 */
export const extendEnum = (enumerators: Enum[], definition: WithEnumExtension): Enum[] => {
    const names = definition['x-enum-varnames']?.filter(isString);
    const descriptions = definition['x-enum-descriptions']?.filter(isString);

    return enumerators.map((enumerator, index) => ({
        name: names?.[index] || enumerator.name,
        description: descriptions?.[index] || enumerator.description,
        value: enumerator.value,
        type: enumerator.type,
    }));
};

export const extendMsEnum = (enumerators: Enum[], definition: WithEnumExtension): Enum[] => {
    const names = definition['x-ms-enum']?.values || [];

    return enumerators.map((enumerator, index) => ({
        name: names?.find(x => `'${x.value}'` === enumerator.value)?.name || enumerator.name,
        description: enumerator.description,
        value: names?.find(x => `'${x.value}'` === enumerator.value)?.value || enumerator.value,
        type: enumerator.type,
    }));
};

