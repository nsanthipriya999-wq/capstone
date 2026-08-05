const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getActivePromotion() {
    try {
        const response = await fetch(`${BASE_URL}/promotions/active`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}
