function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(user => user.email === email && user.password === password);

    const resultDiv = document.getElementById('loginResult');
    if (!email || !password) {
        resultDiv.textContent = "Hãy nhập đầy đủ thông tin.";
        return;
    }
    if (user) {
        resultDiv.textContent = `Xin chào ${user.first_name} ${user.last_name}!`;
    } else {
        resultDiv.textContent = "Thông tin tài khoản không chính xác.";
    }
}

function register() {
    const firstName = document.getElementById('registerFirstName').value;
    const lastName = document.getElementById('registerLastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const resultDiv = document.getElementById('registerResult');
    if (!firstName || !lastName || !email || !password) {
        resultDiv.textContent = "Hãy nhập đầy đủ thông tin.";
        return;
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        resultDiv.textContent = "Email này đã có tài khoản.";
        return;
    }

    users.push({
        id: users.length + 1,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    });

    resultDiv.textContent = "Đăng ký thành công!";
}

function searchUsers() {
    const keyword = document.getElementById('searchUser').value.toLowerCase();
    const resultDiv = document.getElementById('userList');

    const filteredUsers = keyword ? users.filter(user =>
        user.first_name.toLowerCase().includes(keyword) ||
        user.last_name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
    ) : users;

    if (filteredUsers.length === 0) {
        resultDiv.textContent = "Không tìm thấy user nào phù hợp.";
        return;
    }

    resultDiv.innerHTML = `<table>
        <tr><th>ID</th><th>Họ Tên</th><th>Email</th></tr>
        ${filteredUsers.map(user =>
            `<tr><td>${user.id}</td><td>${user.first_name} ${user.last_name}</td><td>${user.email}</td></tr>`
        ).join('')}
    </table>`;
}

function viewPosts() {
    const resultDiv = document.getElementById('postList');

    if (posts.length === 0) {
        resultDiv.textContent = "Không có bài đăng nào.";
        return;
    }

    resultDiv.innerHTML = `<table>
        <tr><th>ID</th><th>Tiêu Đề</th><th>Người Tạo</th><th>Ngày Tạo</th></tr>
        ${posts.map(post => {
            const user = users.find(u => u.id === post.user_id);
            return `<tr><td>${post.id}</td><td>${post.title}</td><td>${user ? user.first_name + ' ' + user.last_name : 'Không rõ'}</td><td>${post.created_at}</td></tr>`;
        }).join('')}
    </table>`;
}

function searchPostsByUser() {
    const email = document.getElementById('postEmail').value;
    const resultDiv = document.getElementById('userPosts');

    if (!email) {
        resultDiv.textContent = "Hãy nhập email.";
        return;
    }

    const user = users.find(user => user.email === email);
    if (!user) {
        resultDiv.textContent = "Không tìm thấy user.";
        return;
    }

    const userPosts = posts.filter(post => post.user_id === user.id);

    if (userPosts.length === 0) {
        resultDiv.textContent = "User này chưa có bài đăng nào.";
        return;
    }

    resultDiv.innerHTML = `<table>
        <tr><th>ID</th><th>Tiêu Đề</th><th>Nội Dung</th></tr>
        ${userPosts.map(post =>
            `<tr><td>${post.id}</td><td>${post.title}</td><td>${post.content}</td></tr>`
        ).join('')}
    </table>`;
}

function viewPostDetails() {
    const postId = parseInt(document.getElementById('postId').value);
    const resultDiv = document.getElementById('postDetails');

    const post = posts.find(p => p.id === postId);
    if (!post) {
        resultDiv.textContent = "Không tìm thấy bài viết.";
        return;
    }

    const user = users.find(u => u.id === post.user_id);

    resultDiv.innerHTML = `<div class="post">
        <p><strong>ID:</strong> ${post.id}</p>
        <p><strong>Tiêu Đề:</strong> ${post.title}</p>
        <p><strong>Nội Dung:</strong> ${post.content}</p>
        <p><strong>Link Ảnh:</strong> <a href="${post.image}" target="_blank">${post.image}</a></p>
        <p><strong>Người Tạo:</strong> ${user ? user.first_name + ' ' + user.last_name : 'Không rõ'}</p>
        <p><strong>Ngày Tạo:</strong> ${post.created_at}</p>
        <p><strong>Ngày Sửa Đổi:</strong> ${post.updated_at}</p>
    </div>`;
}