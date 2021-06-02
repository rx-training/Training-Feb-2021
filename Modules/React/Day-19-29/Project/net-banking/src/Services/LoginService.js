import axios from "axios";

const LOGIN_BASE_URL = "http://localhost:5000/home/netBanking";
const ACCOUNT_BASE_URL="http://localhost:5000/home/account"
const STATEMENT="http://localhost:5000/home/account/ministatement"

class LoginService {
  login(object) {
    return axios.post(LOGIN_BASE_URL + "/login",object);
  }

  signUp(object){
    return axios.post(LOGIN_BASE_URL + "/signUp",object);
  }
  getCustomer(CustomerId){
    return axios.get(LOGIN_BASE_URL + "/getCustomer/" + CustomerId);
  }

  credit(object){
    return axios.post(ACCOUNT_BASE_URL + "/credit",object);
  }
  debit(object){
    return axios.post(ACCOUNT_BASE_URL + "/debit",object);
  }
  NEFT(object){
    return axios.post(ACCOUNT_BASE_URL + "/NEFT",object);
  }
  Delete(object){
    return axios.post(ACCOUNT_BASE_URL + "/delete",object);
  }
  MiniStatement(){
    return axios.post(STATEMENT );
  }

  

  

//   createStudent(Student) {
//     return axios.post(STUDENT_API_BASE_URL, Student);
//   }

//   getStudentById(StudentId) {
//     return axios.get(STUDENT_API_BASE_URL + "/" + StudentId);
//   }

//   updateStudent(Student, StudentId) {
//     return axios.put(STUDENT_API_BASE_URL + "/" + StudentId, Student);
//   }

//   deleteStudent(StudentId) {
//     return axios.delete(STUDENT_API_BASE_URL + "/" + StudentId);
//   }
}

export default new LoginService();