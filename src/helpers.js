// Calculate years difference
export function getYearDifference(year) {
    return new Date().getFullYear() - year;
}

// Calculate increment based on category
export function calculateCategory(category) {
    let increment;

    switch(category){
        case 'luxury':
            increment = 1.30;
            break;
        case 'sport':
            increment = 1.15;
            break;
        case 'compact':
            increment = 1.05;
            break;
        default: break;
    }

    return increment;
}

// Caluclate increment based on plan

export function getPlan(plan) {
    return (plan === 'basic') ? (1.10) : ((plan === 'economy') ? (1.20) : (1.50))

}

// To show firts letter as capital
export function firstCapitalLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}