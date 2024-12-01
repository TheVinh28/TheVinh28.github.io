//Lấy dữ liệu vào localStorage
let initData = localStorage.getItem("students")
  ? JSON.parse(localStorage.getItem("students"))
  : [];

//Hàm trả về viết bằng arrow function
const averageScore = (mathScore, englishScore, literatureScore) => {
  return (
    (parseFloat(mathScore) +
      parseFloat(englishScore) +
      parseFloat(literatureScore)) /
    3
  ).toFixed(2);
};

//Hàm trả về viết bằng function
// function averageScore(mathScore, englishScore, literatureScore) {
//   return (
//     (parseFloat(mathScore) +
//       parseFloat(englishScore) +
//       parseFloat(literatureScore)) /
//     3
//   );
// };

function renderStudents(data) {
  const studentTable = document.getElementById("info-student");
  studentTable.innerHTML = "";
  data.forEach((student, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.gender}</td>
        <td>${student.mathScore}</td>
        <td>${student.englishScore}</td>
        <td>${student.literatureScore}</td>
        <td>${averageScore(
          student.mathScore,
          student.englishScore,
          student.literatureScore
        )}</td>
        <td>
        <button class="btn btn-primary btn-sm")">Sửa</button>
          <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Xóa</button>
        </td>
      </tr>
    `;
    studentTable.insertAdjacentHTML("beforeend", row);
  });
}

renderStudents(initData);

//Hàm tạo học sinh mới
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const mathScore = parseFloat(document.getElementById("mathScore").value);
  const englishScore = parseFloat(
    document.getElementById("englishScore").value
  );
  const literatureScore = parseFloat(
    document.getElementById("literatureScore").value
  );

  if (
    !name ||
    !gender ||
    isNaN(mathScore) ||
    isNaN(englishScore) ||
    isNaN(literatureScore)
  ) {
    alert("Vui lòng nhập đầy đủ và chính xác thông tin!");
    return;
  }
  const newStudent = { name, gender, mathScore, englishScore, literatureScore };
  initData.push(newStudent);
  //Lưu dữ liệu vào localStorage
  localStorage.setItem("students", JSON.stringify(initData));
  renderStudents(initData);
  e.target.reset();
});

//Hàm xóa học sinh
function deleteStudent(index){
  initData.splice(index,1);
  localStorage.setItem("students", JSON.stringify(initData));
  renderStudents(initData);
};
//slice không làm ảnh hưởng tới mảng gốc
//splice làm thay đổi cấu trúc của mảng gốc