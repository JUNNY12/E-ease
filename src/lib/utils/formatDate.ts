export const formatDate = (date: string) => {
    // Convert input string to a Date object
    const formattedDate = new Date(date);

    // Define options for the formatted output
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    // Format the date with the specified options
    const formattedDateString = formattedDate.toLocaleDateString(undefined, options);

    return formattedDateString;
};
