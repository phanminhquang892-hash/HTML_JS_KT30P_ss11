let students = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }
];

const getStudents = (list) =>{
  return list.filter(student => student.score >= 8);
}
const excellentStudents = getStudents(students);
console.log("Danh sách sinh viên xuất sắc:");
console.log(excellentStudents);

const checkStudents = (list) =>{
 return list.some(student => student.score < 4)
    ? "Có sinh viên yếu": "Không có sinh viên yếu";
}
console.log("Kiểm tra sinh viên yếu:");
console.log(checkStudents(students));

const createStudents = (list) => {
  return list.map(student => `Tên: ${student.name} - Điểm: ${student.score}`);
}
const studentLabels = createStudents(students);
console.log("Danh sách hiển thị chuẩn hóa:");
console.log(studentLabels);
