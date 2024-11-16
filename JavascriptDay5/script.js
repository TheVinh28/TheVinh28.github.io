function submitForm() {
    const name = document.getElementById("name").value;
    const birthYear = document.getElementById("birthYear").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;

    const result = document.getElementById("result");
    result.innerHTML = ""; // Reset result content

    // Check for empty fields
    if (!name || !birthYear || !age || !gender || !phone) {
        result.innerHTML = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    // Display information
    result.innerHTML = `
        <p><strong>Họ tên:</strong> ${name}</p>
        <p><strong>Năm sinh:</strong> ${birthYear}</p>
        <p><strong>Tuổi:</strong> ${age}</p>
        <p><strong>Giới tính:</strong> ${gender}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
    `;
}
