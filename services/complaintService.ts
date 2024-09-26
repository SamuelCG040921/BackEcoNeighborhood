import ComplaintRepository from "../repositorys/complaintRepository";
import Complaint from "../Dto/complaintDto";

class ComplaintService{
    static async createComplaint(complaint:Complaint){
        return await ComplaintRepository.createComplaint(complaint);
    }
}

export default ComplaintService