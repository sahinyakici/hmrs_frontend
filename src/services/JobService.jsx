import axios from "axios";
export default class JobService {
  getAllJobs() {
    return axios.get(
      `http://localhost:8080/api/jobAdvertisement/getAllWhichIsOpen`
    );
  }
  postJob(job){
    return axios.post(`http://localhost:8080/api/jobAdvertisement/save",{data:job}`)
  }
updateJobStatus(jobId, status) {
  return axios.put(`http://localhost:8080/api/jobAdvertisement/updateWithId?id=${jobId}&newStatus=${status}`);
}
}
