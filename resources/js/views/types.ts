export type Inputs = {
    dossier_name: string;
    dossier_file_upload: File | null;
    category: Category;
};

export enum Category {
    General = "general",
    NationalVisaRequestForm = "national-visa-request-form",
    Passport = "passport",
    PassportPhotograph = "passport-photograph",
    ProofOfAccommodation = "proof-of-accommodation",
}
