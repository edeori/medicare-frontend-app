export enum AlcoholRegularityEnum {
    DAILY = 'Daily',
	MORE_THAN_ONCE_A_WEEK = 'More than once a week',
	WEEKEND = 'Weekend',
	OCCASION = 'Occasion',
	NEVER = 'Never'
}

export const AlcoholRegularityEnumMap = new Map<AlcoholRegularityEnum | string, string>([
    [AlcoholRegularityEnum.DAILY, 'DAILY'],
    [AlcoholRegularityEnum.MORE_THAN_ONCE_A_WEEK, 'MORE_THAN_ONCE_A_WEEK'],
    [AlcoholRegularityEnum.WEEKEND, 'WEEKEND'],
    [AlcoholRegularityEnum.OCCASION, 'OCCASION'],
	[AlcoholRegularityEnum.NEVER, 'NEVER'],
]);