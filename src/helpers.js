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
        case 'economy':
            increment = 1.05;
            break;
        default: break;
    }

    return increment;
}