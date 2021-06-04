import axios from "axios";

const LOGIN_BASE_URL = "http://localhost:5000/home/netBanking";
const ACCOUNT_BASE_URL="http://localhost:5000/home/account"
const STATEMENT="http://localhost:5000/home/account/ministatement"
const ADMIN="http://localhost:5000/home/admin"

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
  MiniStatementById(object){
    return axios.post(ACCOUNT_BASE_URL + "/ministatementById",object);
  }
  MiniStatement(){
    return axios.post(STATEMENT );
  }
  getAllUser(){
    return axios.get(ADMIN + "/users")
  }
  getAllAdmin(){
    return axios.get(ADMIN + "/getAllAdmin")
  }
  
  AdminDelete(obj){
    return axios.post(ADMIN + "/delete",obj)
  }
  AdminRegister(obj){
    return axios.post(ADMIN + "/register",obj)
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