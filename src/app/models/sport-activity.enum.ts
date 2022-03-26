export enum SportActivityEnum {
    NONE = 'None',
	WALKING = 'Walking',
	FITNESS_OR_GYM = 'Fitness or Gym',
	RUNNING_OR_ATHLETICS = 'Running or Athletics',
	SWIMMING = 'Swimming',
	CYCLING = 'Cycling',
	BUSHWALKING = 'Bushwalking',
	FOOTBALL_OR_SOCCER = 'Football or Soccer',
	YOGA = 'Yoga',
	MARTIAL_ARTS = 'Martial Arts',
	OTHER = 'Other'
}

export const SportActivityEnumMap = new Map<SportActivityEnum | string, string>([
    [SportActivityEnum.NONE, 'NONE'],
    [SportActivityEnum.WALKING, 'WALKING'],
    [SportActivityEnum.FITNESS_OR_GYM, 'FITNESS_OR_GYM'],
    [SportActivityEnum.RUNNING_OR_ATHLETICS, 'RUNNING_OR_ATHLETICS'],
	[SportActivityEnum.SWIMMING, 'SWIMMING'],
	[SportActivityEnum.CYCLING, 'CYCLING'],
	[SportActivityEnum.BUSHWALKING, 'BUSHWALKING'],
	[SportActivityEnum.FOOTBALL_OR_SOCCER, 'FOOTBALL_OR_SOCCER'],
	[SportActivityEnum.YOGA, 'YOGA'],
	[SportActivityEnum.MARTIAL_ARTS, 'MARTIAL_ARTS'],
	[SportActivityEnum.OTHER, 'OTHER'],
]);