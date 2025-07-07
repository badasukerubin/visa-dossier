import React, { useEffect, useState } from "react";
import axios from "axios";
import DossierListController from "@/actions/App/Http/Controllers/DossierListController";
import ListDossiers from "@/components/ListDossiers";
import { DossierGroupedByCategory } from "./types";

const Home = () => {
    const [dossiers, setDossiers] = useState<DossierGroupedByCategory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDossiers = async () => {
            try {
                const response = await axios.get(
                    DossierListController.get().url,
                );
                setDossiers(response.data.data.items || []);
            } catch {
                setDossiers([]);
            } finally {
                setLoading(false);
            }
        };
        fetchDossiers();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-8 text-gray-500">
                Loading dossiers...
            </div>
        );
    }

    if (!dossiers.length) {
        return (
            <div className="text-center py-8 text-gray-500">
                No dossiers found.
            </div>
        );
    }

    return <div className="">{<ListDossiers dossiers={dossiers} />}</div>;
};

export default Home;
