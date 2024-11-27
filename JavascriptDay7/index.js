const list_user = document.getElementById("list_user");

(async function getData() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  list_user.innerHTML = data.users.map((user, idx) => {
    return `
    <div class="all">
      <header>STT: ${idx + 1}</header>
      <div class="card">
        <img src="${user.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.username}</h5>
          <p class="card-text">${user.address.address} - ${user.address.city} - ${user.address.country}</p>
        </div>
      </div>
    </div>
    `;
  });
})();
