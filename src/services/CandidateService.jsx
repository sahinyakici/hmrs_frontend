import axios from "axios";

export default class CandidateService {
  getAllCandidates() {
    return axios.get(`http://localhost:8080/api/candidate/getAll`);
  }
  postCandidates(candidate){
    axios.post(`http://localhost:8080/api/candidate/add`,{data:candidate})
  }
}
