import axiosClient from "../helper/AxiosInstace"
import { LOGIN_URI } from "../helper/Constants";

export async function processLogin(loginData) {
    try {

        const res = await axiosClient().post(LOGIN_URI, loginData);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function generateMobileOpt(mobileNo) {
    try {

        const res = await axiosClient().post('/V1/mobilelogin/send-otp', {
            "mobileNumber": mobileNo,
            "websiteId": "1"
        });
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function submitMobileOpt(mobileNumber, otp, login_type) {
    try {
        let paylaod = {
            mobileNumber,
            otp,
            "websiteId": "1",
            "customer": [],
            login_type
        }

        const res = await axiosClient().post('/V1/mobilelogin/verify-otp', JSON.stringify(paylaod));
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function generateEmailOpt(email, otp, login_type) {
    try {
        const res = await axiosClient().post('/V1/mobilelogin/send-email-otp', {
            email,
            otp,
            "websiteId": "1",
            "customer": [],
            login_type
        });
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function submitEmailOpt(mobileNumber,email, otp, login_type) {
    try {
        let paylaod = {
            mobileNumber,
            otp,
            email,
            "websiteId": "1",
            "customer": [],
            login_type,
            "email_exists": false
        }

        const res = await axiosClient().post('/V1/mobilelogin/verify-email-otp', JSON.stringify(paylaod));
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}