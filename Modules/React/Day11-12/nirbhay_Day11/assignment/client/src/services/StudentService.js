import axios from "axios";

const STUDENT_API_URL = "http://localhost:5000/student";

class StudentService {
  getStudents() {
    return axios.get(STUDENT_API_URL);
  }

  createStudent(student) {
    return axios.post(STUDENT_API_URL, student, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  deleteStudent(studentId) {
    return axios.delete(STUDENT_API_URL + "/" + studentId);
  }
}

export default new StudentService();
