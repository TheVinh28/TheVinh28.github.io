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
const $btnUpdate = document.getElementById("updateButton");
const $btnCreate = document.getElementById("createButton");
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
        <button class="btn btn-primary btn-sm" onclick="updateStudent")">Sửa</button>
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

function updateStudent(index) {
  //Bước 1:Lấy thông tin học sinh cần tìm
  const student = initData[index];

  const Newname = document.getElementById("name");

  const NewmathScore = document.getElementById("mathScore");

  const NewenglishScore = document.getElementById("englishScore");

  const NewliteratureScore = document.getElementById("literatureScore");

  console.log(student.gender);
  //Bước 2:Hiện thị thông tin tương ứng lên ô input
  Newname.value = student.name;

  document.querySelector(`input[value=${student.gender}]`).checked = true;

  NewmathScore.value = student.mathScore;

  NewenglishScore.value = student.englishScore;

  NewliteratureScore.value = student.literatureScore;

  $btnUpdate.style.display = "inline";
  $btnCreate.style.display = "none";
  $btnUpdate.onclick = function () {
    const name = name.value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const math_score = mathScore.value;
    const english_score = englishScore.value;
    const literature_score = literatureScore.value;
    console.log("name:", name);
    
    renderStudents[indexStudentUpdate].name = name;
    renderStudents[indexStudentUpdate].gender = gender;
    renderStudents[indexStudentUpdate].mathScore = mathScore;
    renderStudents[indexStudentUpdate].englishScore = englishScore;
    renderStudents[indexStudentUpdate].literatureScore = literatureScore;

    localStorage.setItem("students", JSON.stringify(initData));
    renderStudents(initData);
    
    document.querySelector('input[name="gender"]:checked').checked = false;
    indexStudentUpdate = -1;

    $btnUpdate.style.display = "none";
    $btnCreate.style.display = "inline";
};

};



