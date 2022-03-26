export enum IllnessCategoryEnum {
    BLOOD = 'Blood',
	CANCER_AND_NEOPLASMS = 'Cancer and Neoplasms',
	CARDIOVASCULAR = 'Cardiovascular',
	EAR = 'Ear',
	EYE = 'Eye',
	INFECTION = 'Infection',
	INFLAMMATORY_AND_IMMUNE_SYSTEM = 'Inflammatory and Immune System',
	INJURIES_AND_ACCIDENTS = 'Injuries and Accidents',
	MENTAL_HEALTH = 'Mental Healt',
	METABOLIC_AND_ENDOCRINE = 'Metabolic and Endocrine',
	MUSCULOSKELETAL = 'Musculoskeletal',
	NEUROLOGICAL = 'Neurological',
	ORAL_AND_GASTROINTESTINAL = 'Oral and Gastrointestinal',
	RENAL_AND_UROGENITAL = 'Renal and Urogenital',
	REPRODUCTIVE_HEALTH_AND_CHILDBIRTH = 'Reproductive Health and Childbirth',
	RESPIRATORY = 'Respiratory',
	SKIN = 'Skin',
	STROKE = 'Stroke',
	UNKNOWN = 'Unknown'
}

export const IllnessCategoryEnumMap = new Map<IllnessCategoryEnum | string, string>([
    [IllnessCategoryEnum.BLOOD, 'BLOOD'],
    [IllnessCategoryEnum.CANCER_AND_NEOPLASMS, 'CANCER_AND_NEOPLASMS'],
    [IllnessCategoryEnum.CARDIOVASCULAR, 'CARDIOVASCULAR'],
    [IllnessCategoryEnum.EAR, 'EAR'],
	[IllnessCategoryEnum.EYE, 'EYE'],
	[IllnessCategoryEnum.INFECTION, 'INFECTION'],
	[IllnessCategoryEnum.INFLAMMATORY_AND_IMMUNE_SYSTEM, 'INFLAMMATORY_AND_IMMUNE_SYSTEM'],
	[IllnessCategoryEnum.INJURIES_AND_ACCIDENTS, 'INJURIES_AND_ACCIDENTS'],
	[IllnessCategoryEnum.MENTAL_HEALTH, 'MENTAL_HEALTH'],
	[IllnessCategoryEnum.METABOLIC_AND_ENDOCRINE, 'METABOLIC_AND_ENDOCRINE'],
	[IllnessCategoryEnum.MUSCULOSKELETAL, 'MUSCULOSKELETAL'],
	[IllnessCategoryEnum.NEUROLOGICAL, 'NEUROLOGICAL'],
	[IllnessCategoryEnum.ORAL_AND_GASTROINTESTINAL, 'ORAL_AND_GASTROINTESTINAL'],
	[IllnessCategoryEnum.RENAL_AND_UROGENITAL, 'RENAL_AND_UROGENITAL'],
	[IllnessCategoryEnum.REPRODUCTIVE_HEALTH_AND_CHILDBIRTH, 'REPRODUCTIVE_HEALTH_AND_CHILDBIRTH'],
	[IllnessCategoryEnum.RESPIRATORY, 'RESPIRATORY'],
	[IllnessCategoryEnum.SKIN, 'SKIN'],
	[IllnessCategoryEnum.STROKE, 'STROKE'],
	[IllnessCategoryEnum.UNKNOWN, 'UNKNOWN'],
]);