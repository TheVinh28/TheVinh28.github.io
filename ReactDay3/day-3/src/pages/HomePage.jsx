import React from "react";
import Layout from "../components/common/Layout";
import CardCustom from "../components/CardCustom";

const HomePage = () => {

  const [count,setCount] = useState({name:"K",id:1});
  console.log("giá trị của state",state);

  const handleIncrease = () => {  
    const shadowCount = { ...count, id: count.id + 1 }; 
    setCount(shadowCount);  
  }; 


  return (
    //chỉ trả về một giá trị, ở đây là thẻ đóng và mở React.Fragment
    //state và pros đều để lưu giữ biến
    //state nhận được nhiều giá trị khác nhau
    //state thay đổi được trái ngược với pros không thay đổi được
    //state truyền từ component này sang component khác thì thành pros, muốn thay đổi được thì phải thông qua setState
    //setState cập nhật giá trị của state và render lại component(tạo lại giao diện)
    //tại sao lại dùng const không phải dùng let? Vì dùng let sẽ không bắt react vẽ lại giao diện được
    //state là giá trị riêng độc lập với từng component kể cả có trùng, lặp lại component đó
    //Về bản chất cái tk useState nó sẽ dùng 1 cái phép so sánh nóng ở đây là kiểu liệu và giá trị bằng nhau không thay đổi thì nó sẽ cập nhật lại giao diện(vd: obj vẫn là obj, arr vẫn là arr)
    //Vậy muốn thay đổi được các biến tham chiếu (referrence) thì phải làm một phép gắn (dùng destructurring, spread operator)
    // đối với OBJECT:
    // cần tránh thay đổi trực tiếp vào cái object gốc mà phải tạo ra 1 cái object nó là bản sao của object gốc rồi thay đổi trên cái object đã sao chép ra
    // ví dụ
    //const shadowCount = { ...count, id: count.id + 1 } 
    // sau đó mới set giá trị state bằng sao của object gốc
    // đối với ARRAY:
    // khi dùng spread operator thì mình không cần phải khởi tạo ra bản sao, có thể thực hiện cập nhật trực tiếp luôn
    //Component Tree
    //có hai cách truyền dữ liệu
    //truyền từ cha sang con dùng pros
    //truyền từ con sang cha truyền vào con một pros là một function
    <React.Fragment>
    <Layout>
      <h1>Welcome to Nexcent</h1>
      <p>Explore our products below:</p>
      <CardCustom />
    </Layout> 

    <div>  
      Giá trị: {count.id} - tên {count.name}  
    </div>  
    <button onClick={handleIncrease}>Tăng</button>  
  );  
    </React.Fragment>
  );
};

export default HomePage;
