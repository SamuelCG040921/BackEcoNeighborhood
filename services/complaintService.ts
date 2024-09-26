import ComplaintRepository from "../repositorys/complaintRepository";
import Complaint from "../Dto/complaintDto";

class ComplaintService{
    static async createComplaint(complaint:Complaint){
        return await ComplaintRepository.createComplaint(complaint);
    }

    static async getAllComplaints(){
        try {
            const complaints = await ComplaintRepository.getAllComplaints();
            return complaints
        } catch (error) {
            console.error('Error en el ComplaintService al obtener las denuncias');
            throw error
        }
    }
}

export default ComplaintService