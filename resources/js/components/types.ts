import { DossierGroupedByCategory, MessageType } from "@/views/types";

export interface ListDossiersProps {
    dossiers: DossierGroupedByCategory[];
}

export interface MessageProps {
    message?: string;
    type?: MessageType;
}
