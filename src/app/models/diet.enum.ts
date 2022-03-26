export enum DietEnum {
    NO_DIET = 'No Diet',
	PALEO = 'Paleo',
	CARNIVORE = 'Carnivore',
	VEGAN = 'Vegan',
	VEGETARIAN = 'Vegetarian',
	KETOGENIC = 'Ketogenic',
	MEDITERRANEAN = 'Mediterranean',
	INTERMITTENT_FASTING = 'Intermittent Fasting',
	OTHER_FITTNESS = 'Other Fittness'
}

export const DietEnumMap = new Map<DietEnum | string, string>([
    [DietEnum.NO_DIET, 'NO_DIET'],
    [DietEnum.PALEO, 'PALEO'],
    [DietEnum.CARNIVORE, 'CARNIVORE'],
    [DietEnum.VEGAN, 'VEGAN'],
	[DietEnum.VEGETARIAN, 'VEGETARIAN'],
	[DietEnum.KETOGENIC, 'KETOGENIC'],
	[DietEnum.MEDITERRANEAN, 'MEDITERRANEAN'],
	[DietEnum.INTERMITTENT_FASTING, 'INTERMITTENT_FASTING'],
	[DietEnum.OTHER_FITTNESS, 'OTHER_FITTNESS'],
]);