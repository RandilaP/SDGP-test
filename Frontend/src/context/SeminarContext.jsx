import { createContext, useReducer } from "react";

export const SeminarContext = createContext();

export const seminarsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_SEMINARS':
            return {
                ...state,
                seminars: action.payload
            };
        case 'CREATE_SEMINAR':
            return {
                ...state,
                seminars: [action.payload, ...state.seminars]
            };
        case 'UPDATE_SEMINAR':
            return {
                ...state,
                seminars: state.seminars.map(seminar =>
                    seminar._id === action.payload._id ? action.payload : seminar
                )
            };
        default:
            return state;
    }
};

// eslint-disable-next-line react/prop-types
export const SeminarContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(seminarsReducer, {
        seminars: []
    });

    return (
        <SeminarContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SeminarContext.Provider>
    );
};
