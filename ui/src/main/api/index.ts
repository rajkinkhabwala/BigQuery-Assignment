import axios from "axios";

function districtRequest(): Promise<any> {
    return axios.get("http://localhost:8000/api/district");
}

function yearRequest(): Promise<any> {
    return axios.get("http://localhost:8000/api/year");
}

const dataRequests = { districtRequest, yearRequest };

export default dataRequests;