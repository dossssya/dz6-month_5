const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.example.com/data';

export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

