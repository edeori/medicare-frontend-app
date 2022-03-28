export enum LivingLocationEnum {
    CAPITAL_CITY = 'Capital City',
	CITY = 'City',
	COUNTRY = 'Country',
	VILLAGE = 'Village'
}

export const LivingLocationEnumMap = new Map<LivingLocationEnum | string, string>([
    [LivingLocationEnum.CAPITAL_CITY, 'CAPITAL_CITY'],
    [LivingLocationEnum.CITY, 'CITY'],
    [LivingLocationEnum.COUNTRY, 'COUNTRY'],
    [LivingLocationEnum.VILLAGE, 'VILLAGE']
]);

export const LivingLocationEnumReMap = new Map<string, string>([
    ['CAPITAL_CITY', 'Capital City'],
    ['CITY', 'City'],
    ['COUNTRY', 'Country'],
    ['VILLAGE', 'Village']
]);