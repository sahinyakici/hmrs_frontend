import axios from "axios";

export default class CompanyService {
  getAllCompanies() {
    return axios.get(`http://localhost:8080/api/employers/getAll`);
  }
  postCompany(company) {
    return axios.post(`http://localhost:8080/api/employers/add`, {
      data: company,
    });
  }
}
