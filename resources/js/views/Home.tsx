import React from "react";
import DossierListController from "@/actions/App/Http/Controllers/API/V1/DossierListController";
import ListDossiers from "@/components/ListDossiers";
import { DossierGroupedByCategory } from "./types";
import { NavLink, useLocation } from "react-router";
import Message from "@/components/Message";
import useSimpleQuery from "@/hooks/Query/useSimpleQuery";

const Home = () => {
    const location = useLocation();
    const { message, type } = location.state || { message: null, type: null };

    const {
        data,
        isPending: loading,
        isError,
    } = useSimpleQuery<{
        data: { items: DossierGroupedByCategory[] };
    }>({
        queryKey: ["dossiers"],
        route: DossierListController.get().url,
    });

    const dossiers = data?.data?.items || [];

    if (loading) {
        return (
            <div className="text-center py-8 text-gray-500">
                Loading dossiers...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-8 text-red-500">
                Failed to load dossiers.
            </div>
        );
    }

    if (!dossiers.length) {
        return (
            <div className="text-center py-8 text-gray-500">
                No dossiers found.
                <br />
                <span className="text-blue-600">
                    <NavLink
                        to="/create-dossier"
                        className="underline hover:text-blue-700"
                    >
                        Create a new dossier
                    </NavLink>
                </span>
            </div>
        );
    }

    return (
        <div className="">
            <Message message={message} type={type} />

            {<ListDossiers dossiers={dossiers} />}
        </div>
    );
};

export default Home;
