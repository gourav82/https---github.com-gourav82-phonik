import axiosClient from "../helper/AxiosInstance";
import { BANNER_URI, CATEGORY_URI, LATEST_PRODUCT_URI, POPULAR_PRODUCT_URI } from "../helper/Constants";

export async function latestProductAPI(brands) {
    try {
        const res = await axiosClient("public").get(LATEST_PRODUCT_URI);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}
export async function popularProductAPI(brands) {
    try {
        const res = await axiosClient("public").get(POPULAR_PRODUCT_URI);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function bannerAPI() {
    try {
        const res = await axiosClient("public").get(BANNER_URI);
        const { data } = res;
        console.log(res);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function allCategoryAPI() {
    try {
        const res = await axiosClient("public").get(CATEGORY_URI);
        const { data } = res;
        console.log(res);
        return data;
    } catch (error) {
        console.log(error);
    }
}