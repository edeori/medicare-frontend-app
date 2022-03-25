import { PotentialIllnessDTO } from "./potential-illness-dto";

export interface HealthStatusDTO {
    id: string;
    patientId: string;
    potentialIllnesses: PotentialIllnessDTO[];
}