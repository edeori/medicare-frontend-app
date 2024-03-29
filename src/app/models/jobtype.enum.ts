export enum JobTypeEnum {
    STUDENT = 'Student',
    STUDENT_AND_WORKING = 'Student and Working',
    AGRICULTURE = 'Agriculture',
    ARCHITECTURE_AND_CONSTRUCTION = 'Architecture and Construction',
    ARTS = 'Arts',
    BUSINESS_AND_FINANCE = 'Business and Finance',
    EDUCATION_AND_TRAINING = 'Education and Training',
    GOVERNMENT_AND_PUBLIC_ADMINISTRATION = 'Government and Public Administration',
    HEALTH = 'Health',
    INFORMATION_TECHNOLOGY = 'Information Technology',
    FASHION = 'Fashion',
    GOODS = 'Goods',
    SERVICE_CONTRACT = 'Service Contract',
    HOSPITALITY = 'Hospitality',
    RETIRED = 'Retired'
}

export const JobTypeEnumMap = new Map<JobTypeEnum | string, string>([
    [JobTypeEnum.STUDENT, 'STUDENT'],
    [JobTypeEnum.STUDENT_AND_WORKING, 'STUDENT_AND_WORKING'],
    [JobTypeEnum.AGRICULTURE, 'AGRICULTURE'],
    [JobTypeEnum.ARCHITECTURE_AND_CONSTRUCTION, 'ARCHITECTURE_AND_CONSTRUCTION'],
    [JobTypeEnum.ARTS, 'ARTS'],
    [JobTypeEnum.BUSINESS_AND_FINANCE, 'BUSINESS_AND_FINANCE'],
    [JobTypeEnum.EDUCATION_AND_TRAINING, 'EDUCATION_AND_TRAINING'],
    [JobTypeEnum.GOVERNMENT_AND_PUBLIC_ADMINISTRATION, 'GOVERNMENT_AND_PUBLIC_ADMINISTRATION'],
    [JobTypeEnum.HEALTH, 'HEALTH'],
    [JobTypeEnum.INFORMATION_TECHNOLOGY, 'INFORMATION_TECHNOLOGY'],
    [JobTypeEnum.FASHION, 'FASHION'],
    [JobTypeEnum.GOODS, 'GOODS'],
    [JobTypeEnum.SERVICE_CONTRACT, 'SERVICE_CONTRACT'],
    [JobTypeEnum.HOSPITALITY, 'HOSPITALITY'],
    [JobTypeEnum.RETIRED, 'RETIRED'],
]);

export const JobTypeEnumReMap = new Map<string, string>([
    ['STUDENT', 'Student'],
    ['STUDENT_AND_WORKING', 'Student and Working'],
    ['AGRICULTURE', 'Agriculture'],
    ['ARCHITECTURE_AND_CONSTRUCTION', 'Architecture and Construction'],
    ['ARTS', 'Arts'],
    ['BUSINESS_AND_FINANCE', 'Business and Finance'],
    ['EDUCATION_AND_TRAINING', 'Education and Training'],
    ['GOVERNMENT_AND_PUBLIC_ADMINISTRATION', 'Government and Public Administration'],
    ['HEALTH', 'Health'],
    ['INFORMATION_TECHNOLOGY', 'Information Technology'],
    ['FASHION', 'Fashion'],
    ['GOODS', 'Goods'],
    ['SERVICE_CONTRACT', 'Service Contract'],
    ['HOSPITALITY', 'Hospitality'],
    ['RETIRED', 'Retired'],
]);