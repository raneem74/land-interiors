import { format } from 'date-fns';

export const getImageUrl = (imageUrl: string): string => process.env.apiUrl + '/' + imageUrl;

export const formatDate = (date: string | Date | undefined): string => {
    if (date) {
        const formattedDate = typeof date === 'string' ? new Date(date) : date;
        return format(formattedDate, 'MMM . dd/yyyy');
    }
    return '';
};
