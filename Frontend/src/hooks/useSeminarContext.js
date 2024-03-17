import {SeminarContext} from "../context/SeminarContext.jsx";
import {useContext} from "react";

export default function useSeminarContext() {
    const context = useContext(SeminarContext);
    if (!context) {
        throw new Error('useSeminarContext must be used within a SeminarContextProvider');
    }
    return context;
}
