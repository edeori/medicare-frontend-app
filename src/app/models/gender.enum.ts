export enum GenderEnum {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

export const GenderEnumMap = new Map<GenderEnum | string, string>([
    [GenderEnum.MALE, 'MALE'],
    [GenderEnum.FEMALE, 'FEMALE'],
    [GenderEnum.OTHER, 'OTHER']
]);