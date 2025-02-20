import React, { useState } from 'react';
import { Carousel } from 'antd';
import { PhoneOutlined, CreditCardOutlined, CheckCircleOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player';
import { Button, Card, Row, Col } from "antd";
import { DatePicker, InputNumber } from 'antd';
import { Layout } from "antd";

const imageUrls = [
  "https://intern-project-chi.vercel.app/static/media/bg1.da6d3327978f205184d6.jpg",
  "https://intern-project-chi.vercel.app/static/media/bg2.682ad3017ba51acb4d80.jpg",
  "https://intern-project-chi.vercel.app/static/media/bg3.cd94ec83ef439a755c40.jpg",
  "https://intern-project-chi.vercel.app/static/media/bg4.63e3fbb06b475740c09e.jpg",
];

const { Content } = Layout;

const renderCards = () => {
  const data = [
    {
      title: "SỰ LỰA CHỌN ẨM THỰC SỐ 1",
      description: "Thuộc Golden Gate Group - 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc",
      img: imageUrls[0],
    },
    {
      title: "THỰC PHẨM AN TOÀN",
      description: "Đào đảm an toàn vệ sinh thực phẩm từ nguồn cung cấp đến khâu chế biến",
      img: imageUrls[1],
    },
    {
      title: "THỰC ĐƠN ĐA DẠNG",
      description: "Menu phong phú, kết hợp tinh hoa ẩm thực Á - Âu, đa dạng lựa chọn",
      img: imageUrls[2],
    },
    {
      title: "PHỤC VỤ CHUYÊN NGHIỆP",
      description: "Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi",
      img: imageUrls[3],
    },
  ];

  return data.map((item, index) => (
    <div
      key={index}
      className="relative group cursor-pointer rounded-md overflow-hidden shadow-lg"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 p-6 text-white bg-black bg-opacity-50 w-full">
        <h2 className="text-2xl font-semibold">{item.title}</h2>
        <p className="mt-2">{item.description}</p>
      </div>
    </div>
  ));
};
const Home = () => {
  const imageUrl = "https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg";
  const [playVideo, setPlayVideo] = useState(false);
  const [date, setDate] = useState(null);
  const [tableCount, setTableCount] = useState(0);

  return (
    <div>
    <div className="w-full bg-gray-100">
      <Carousel autoplay effect="fade" dots={{ className: 'custom-dots' }}>
        {[1, 2, 3].map((_, index) => (
          <div key={index}>
            <div className="relative h-screen">
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                  ƯU ĐÃI LÊN TỚI 30%
                </h1>
                <h2 className="text-3xl md:text-5xl mb-6 drop-shadow-lg">
                  KHI ĐẶT SET MENU SUM VẦY
                </h2>
                <p className="mb-6 text-lg md:text-xl drop-shadow-md">
                  Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                  XEM CHI TIẾT ƯU ĐÃI
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-gray-100">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold">Tiệc tại gia chất nhà hàng</h2>
          <p className="text-gray-700">
            Tận hưởng bữa tiệc ấm cúng ngay tại nhà với chất lượng nhà hàng đẳng cấp.
          </p>
          <p className="text-gray-700">
            Chúng tôi mang đến trải nghiệm ẩm thực tuyệt vời và dịch vụ tận tâm.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {playVideo ? (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=kPa7bsKwL-c"
              playing
              controls
              width="100%"
              height="300px"
            />
          ) : (
            <div className="relative cursor-pointer" onClick={() => setPlayVideo(true)}>
              <img
                src={imageUrl}
                alt="Video thumbnail"
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-red-500 text-white p-4 rounded-full text-3xl shadow-lg">▶</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">5 BƯỚC ĐỂ ĐẶT TIỆC</h2>
        <div className="flex justify-between items-center px-10">
          {[
            { icon: <PhoneOutlined />, number: 1, title: 'TÌM HIỂU THÔNG TIN', desc: 'Khách hàng tìm hiểu thông tin và đăng kí tư vấn' },
            { icon: <PhoneOutlined />, number: 2, title: 'LIÊN HỆ TƯ VẤN', desc: 'Nhân viên liên hệ trong 2 tiếng để nhận thông tin' },
            { icon: <CreditCardOutlined />, number: 3, title: 'KÝ KẾT HỢP ĐỒNG', desc: 'Khách hàng ký hợp đồng dịch vụ' },
            { icon: <CreditCardOutlined />, number: 4, title: 'PHỤC VỤ TIỆC', desc: 'Chuẩn bị và tổ chức sự kiện' },
            { icon: <CheckCircleOutlined />, number: 5, title: 'THANH TOÁN', desc: 'Khách hàng thanh toán sau sự kiện' },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center w-1/5">
              <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full text-2xl mb-4">
                {step.icon}
              </div>
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center -mt-4">
                {step.number}
              </div>
              <h3 className="font-bold text-sm mt-2">{step.title}</h3>
              <p className="text-gray-600 text-xs px-2 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="font-sans">
    
    <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: `url('https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-between h-full px-24">
        <div className="text-left text-white max-w-md">
          <h1 className="text-5xl font-bold mb-4">ĐẶT TIỆC Ở ĐÂY</h1>
          <p className="text-base leading-relaxed">
            Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở nên đơn giản và dễ dàng hơn bao giờ hết
          </p>
        </div>
        <div className="flex items-center gap-12">
          <div className="text-white text-center">
            <p className="text-sm mb-2">CHỌN NGÀY ĐẶT</p>
            <DatePicker 
              value={date} 
              onChange={(value) => setDate(value)} 
              format={'DD/MM/YYYY'} 
              className="text-center bg-white bg-opacity-80 border border-gray-300 rounded-md px-2 py-1 shadow-md"
            />
          </div>
          <div className="text-white text-center">
            <p className="text-sm mb-2">SỐ BÀN TIỆC</p>
            <InputNumber 
              min={0} 
              value={tableCount} 
              onChange={setTableCount} 
              className="text-center bg-white bg-opacity-80 border border-gray-300 rounded-md px-2 py-1 shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button type="primary" className="bg-orange-600 border-none px-8 py-3 text-sm font-semibold uppercase">ĐẶT TIỆC NGAY</Button>
          <Button ghost className="border-white text-white px-8 py-3 text-sm font-semibold uppercase">XEM THỰC ĐƠN</Button>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl gap-4">
        <div className="bg-black text-white py-6 px-4 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">DỊCH VỤ</h2>
          <ul className="text-lg space-y-2">
            <li>TIỆC TẠI GIA</li>
            <li>TIỆC CƯỚI HỎI</li>
            <li>TIỆC BUFFET</li>
            <li>TIỆC SỰ KIỆN</li>
            <li>TIỆC TEA BREAK</li>
          </ul>
        </div>

        <div className="relative group">
          <img
            src="https://intern-project-chi.vercel.app/static/media/set_menu.50c5439a3c5c641f3ce0.jpg"
            alt="Set Menu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity group-hover:opacity-100 opacity-0">
            <h2 className="text-white text-2xl font-bold">SET MENU</h2>
            <a href="#" className="text-white underline mt-2">Xem chi tiết</a>
          </div>
        </div>

        <div className="relative group">
          <img
            src="https://intern-project-chi.vercel.app/static/media/option_menu.e3ec617af9965b3f463c.jpg"
            alt="Menu Tự Chọn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity group-hover:opacity-100 opacity-0">
            <h2 className="text-white text-2xl font-bold">MENU TỰ CHỌN</h2>
            <a href="#" className="text-white underline mt-2">Xem chi tiết</a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-6 bg-yellow-400 text-black py-6 px-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">LIÊN HỆ</h2>
        <p className="text-lg">Address: abc@cmcglobal.vn</p>
        <p className="text-lg">Hotline: 0919319071</p>
      </div>
    </div>
 
      <div className="min-h-screen bg-white p-10">
      <h1 className="text-center text-3xl font-bold mb-10">VÌ SAO LỰA CHỌN CHÚNG TÔI?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderCards()}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
