export enum RelationshipStatusEnum {
    SINGLE = 'Single',
    IN_A_RELATIONSHIP = 'In a relationship',
    ENGAGED = 'Engaged',
    MARRIED = 'Married',
    SEPARATED = 'Separated',
    DIVORCED = 'Divorced',
    WIDOWED = 'Widowed'
}

export const RelationshipStatusEnumMap = new Map<RelationshipStatusEnum | string, string>([
    [RelationshipStatusEnum.SINGLE, 'SINGLE'],
    [RelationshipStatusEnum.IN_A_RELATIONSHIP, 'IN_A_RELATIONSHIP'],
    [RelationshipStatusEnum.ENGAGED, 'ENGAGED'],
    [RelationshipStatusEnum.MARRIED, 'MARRIED'],
    [RelationshipStatusEnum.SEPARATED, 'SEPARATED'],
    [RelationshipStatusEnum.DIVORCED, 'DIVORCED'],
    [RelationshipStatusEnum.WIDOWED, 'WIDOWED'],
]);