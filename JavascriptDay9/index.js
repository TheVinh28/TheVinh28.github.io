const students = [
    {
      id: 1,
      name: "Nguyễn K Sang",
      gender: "Nam",
      mathScore: "7",
      englishScore: "7",
      literatureScore: "7",
    },
    {
      id: 2,
      name: "Nguyễn Huy Hoàng",
      gender: "Nam",
      mathScore: "6",
      englishScore: "7",
      literatureScore: "9",
    },
    {
      id: 3,
      name: "Nông Đình Tùng",
      gender: "Nam",
      mathScore: "5",
      englishScore: "6",
      literatureScore: "6",
    },
    {
      id: 4,
      name: "Phan Chính Việt",
      gender: "Nam",
      mathScore: "6",
      englishScore: "7",
      literatureScore: "5",
    },
    {
      id: 5,
      name: "Phạm Thùy Linh",
      gender: "Nữ",
      mathScore: "5",
      englishScore: "8",
      literatureScore: "8",
    },
  ];
  
  (function renderList() {
    const tbodyDOM = document.getElementById("info-student");
    tbodyDOM.innerHTML = "";
    students.forEach((student, index) => {
      const avgScore = (
        (parseFloat(student.mathScore) +
          parseFloat(student.englishScore) +
          parseFloat(student.literatureScore)) /
        3
      ).toFixed(2);
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.mathScore}</td>
            <td>${student.englishScore}</td>
            <td>${student.literatureScore}</td>
            <td>${avgScore}</td>
            <td>
                <button type="button" class="btn btn-primary" style="margin-left: 8px;")">Sửa</button>
                <button type="button" class="btn btn-danger" style="margin-left: 8px;")">Xoá</button>
            </td>
        `;
      tbodyDOM.appendChild(row);
    });
  })();
  