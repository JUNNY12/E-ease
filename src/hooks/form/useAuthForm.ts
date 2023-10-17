import { useReducer } from "react";
import { IState, ActionType } from "@/reducer/form/formReducer";
import { formReducer } from "@/reducer/form/formReducer";

export const useAuthForm = (initialState: IState) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: e.target.name as ActionType,
            payload: e.target.value
        })
    }

    const resetForm = () => {
        dispatch({
            type: 'resetForm',
            payload: ''
        })
    }

    return { state, handleInputChange, resetForm };
}