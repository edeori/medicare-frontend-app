export enum EatingEnum {
    HOME_COOKED = 'Home Cooked',
	TAKE_AWAY = 'Take Away',
	ORDERING = 'Ordering',
	FASTFOOD = 'Fastfood'
}

export const EatingEnumMap = new Map<EatingEnum | string, string>([
    [EatingEnum.HOME_COOKED, 'HOME_COOKED'],
    [EatingEnum.TAKE_AWAY, 'TAKE_AWAY'],
    [EatingEnum.ORDERING, 'ORDERING'],
    [EatingEnum.FASTFOOD, 'FASTFOOD'],
]);

export const EatingEnumReMap = new Map<string, string>([
    ['HOME_COOKED', 'Home Cooked'],
    ['TAKE_AWAY', 'Take Away'],
    ['ORDERING', 'Ordering'],
    ['FASTFOOD', 'Fastfood'],
]);