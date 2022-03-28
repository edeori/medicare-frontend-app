export enum JobActivityEnum {
    PHYSICAL = 'Physical',
    MENTAL = 'Mental',
    TRADE = 'Trade',
    DRIVING = 'Driving',
    RETIRED = 'Retired'
}

export const JobActivityEnumMap = new Map<JobActivityEnum | string, string>([
    [JobActivityEnum.PHYSICAL, 'PHYSICAL'],
    [JobActivityEnum.MENTAL, 'MENTAL'],
    [JobActivityEnum.TRADE, 'TRADE'],
    [JobActivityEnum.DRIVING, 'DRIVING'],
    [JobActivityEnum.RETIRED, 'RETIRED'],
]);

export const JobActivityEnumReMap = new Map<string, string>([
    ['PHYSICAL', 'Physical'],
    ['MENTAL', 'Mental'],
    ['TRADE', 'Trade'],
    ['DRIVING', 'Driving'],
    ['RETIRED', 'Retired'],
]);