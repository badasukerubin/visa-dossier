export type MessageType = "success" | "error" | "warning" | "info";
export interface Model {
    id: number;
    created_at: string;
    updated_at: string;
}

export type Inputs = {
    dossier_name: string;
    dossier_file_upload: File | null;
    category: Category;
};

export type ApiGrouping<T, K extends string = string> = {
    [key in K]: T[];
};

export interface DossierFile extends Model {
    file_name: string;
    file_type: string;
    file_path: string;
    category: Category;
}

export interface Dossier extends Model {
    name: string;
    files: DossierFile[];
}

export interface DossierGroupedByCategory extends Omit<Dossier, "files"> {
    files: ApiGrouping<DossierFile>;
}

export enum Category {
    General = "general",
    NationalVisaRequestForm = "national-visa-request-form",
    Passport = "passport",
    PassportPhotograph = "passport-photograph",
    ProofOfAccommodation = "proof-of-accommodation",
}
