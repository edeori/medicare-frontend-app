export enum RaceEnum {
    CAUCASIAN= 'Caucasian',
	ASIAN= 'Asian',
	BLACK= 'Black',
	GYPSY= 'Gypsy',
	MIXED= 'Mixed'
}

export const RaceEnumMap = new Map<RaceEnum | string, string>([
    [RaceEnum.CAUCASIAN, 'CAUCASIAN'],
    [RaceEnum.ASIAN, 'ASIAN'],
    [RaceEnum.BLACK, 'BLACK'],
    [RaceEnum.GYPSY, 'GYPSY'],
	[RaceEnum.MIXED, 'MIXED'],
]);

export const RaceEnumReMap = new Map<string, string>([
    ['CAUCASIAN', 'Caucasian'],
    ['ASIAN', 'Asian'],
    ['BLACK', 'Black'],
    ['GYPSY', 'Gypsy'],
	['MIXED', 'Mixed'],
]);