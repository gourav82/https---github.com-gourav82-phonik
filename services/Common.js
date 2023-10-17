import axiosClient from "../helper/AxiosInstance";
import { CONFIG_URI } from "../helper/Constants";

export async function getUrlFromStorageAPI() {
    try {
        const res = await axiosClient("public").get(CONFIG_URI);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
}