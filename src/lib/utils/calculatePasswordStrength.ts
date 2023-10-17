export const calculatePasswordStrength = (password: string): 'poor' | 'weak' | 'good' | 'strong' | 'excellent' => {
    const lengthRegex = /^.{8,}$/;  // At least 8 characters
    const numberRegex = /\d/;      // At least one number
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    const checks = [
        lengthRegex.test(password),
        numberRegex.test(password),
        symbolRegex.test(password)
    ];

    const strengthScore = checks.filter(Boolean).length;

    if (strengthScore === 0) {
        return 'poor';
    } else if (strengthScore === 1) {
        return 'weak';
    } else if (strengthScore === 2) {
        return 'good';
    } else if (strengthScore === 3) {
        return 'strong';
    } else {
        return 'excellent';
    }
};
