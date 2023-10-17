import { useContext } from "react";
import { DashboardToggleContext } from "@/context/toggle/DashboardToggleContext";

export const useToggleDashboard = () => {
    const context = useContext(DashboardToggleContext);
    if (context === undefined) {
        throw new Error(
            "useToggleDashboard must be used within a DashboardToggleProvider"
        );
    }
    return context;
};