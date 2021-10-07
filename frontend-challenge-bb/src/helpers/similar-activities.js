import { getActivities } from "../services/api-call";

export const getSimilarActivities = async () => {
    const randomPage = Math.floor(Math.random() * 50);
    const response = await getActivities(randomPage);
    return response.data;
}