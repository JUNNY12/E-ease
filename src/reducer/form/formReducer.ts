import { calculatePasswordStrength } from "@/lib/utils/calculatePasswordStrength";

export type ActionType = 'username' | 'email' | 'password' | 'confirmPassword' |'resetForm'

interface IAction {
    type: ActionType;
    payload: string;
}

export interface IState {
    username: string;
    email?: string;
    password: string;
    confirmPassword?: string;
    passwordStrength?: "poor" | "weak" | "good" | "strong" | "excellent";
    passwordError?: string;
}


export const formReducer = (state: IState, action: IAction): IState => {

    switch (action.type) {
        case 'username':
            return {
                ...state,
                username: action.payload
            };

        case 'email':
            return {
                ...state,
                email: action.payload
            };

        case 'password':
            const passwordStrength = calculatePasswordStrength(action.payload);
            const passwordError = state.confirmPassword && action.payload !== state.confirmPassword ? 'Passwords do not match' : '';
            return {
                ...state,
                password: action.payload,
                passwordStrength,
                passwordError,
            };

        case 'confirmPassword':
            const passwordErrorConfirm = action.payload !== state.password
                ? "Passwords do not match"
                : ""

            return {
                ...state,
                confirmPassword: action.payload,
                passwordError: passwordErrorConfirm
            };
        case 'resetForm':
            return {
                ...state,
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                passwordStrength: undefined,
                passwordError: undefined
            };

        default:
            return state;
    }
};