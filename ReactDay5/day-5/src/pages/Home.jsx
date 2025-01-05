import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50">

      <div className="bg-cover bg-center w-full h-[400px] flex items-center justify-center text-center relative" style={{ backgroundImage: 'url(/path/to/header-image.jpg)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight">ƯU ĐÃI LÊN TỚI 30%<br />KHI ĐẶT SET MENU SUM VẦY</h1>
          <p className="text-lg text-white mt-4">Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021</p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition duration-300">Xem chi tiết ưu đãi</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto py-16">
        <div className="flex flex-col justify-center px-6">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Tiệc tại gia chất nhà hàng</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Với dịch vụ tiệc tại gia của chúng tôi, bạn sẽ được phục vụ những món ăn ngon miệng, được chế biến từ nguyên liệu tươi ngon nhất. Chúng tôi cam kết mang đến trải nghiệm tiệc tuyệt vời ngay tại ngôi nhà của bạn.
          </p>
        </div>

        <div className="relative w-full">
          <img src="/path/to/video-preview.jpg" alt="Video preview" className="w-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105" />
          <button className="absolute inset-center w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125">
            ▶
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">5 BƯỚC ĐỂ ĐẶT TIỆC</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {['TÌM HIỂU THÔNG TIN', 'LIÊN HỆ TƯ VẤN', 'KÝ KẾT HỢP ĐỒNG', 'PHỤC VỤ TIỆC', 'THANH TOÁN'].map((step, index) => (
            <div key={index} className="text-center bg-white p-8 shadow-lg rounded-lg hover:bg-yellow-50 transition duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full mx-auto mb-4 text-lg font-semibold">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{step}</h3>
              <p className="text-gray-600">Khách hàng tìm hiểu thông tin và đăng ký tư vấn</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">ĐẶT TIỆC Ở ĐÂY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-xl mx-auto">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Chọn ngày đặt</label>
            <input type="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Số bàn tiệc</label>
            <input type="number" min="0" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
        </div>
        <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg mr-4 transition duration-300">Đặt tiệc ngay</button>
        <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition duration-300">Xem thực đơn</button>
      </div>

      <div className="bg-gray-100 py-16 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 flex flex-col gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">DỊCH VỤ</h3>
              <ul className="text-gray-700 space-y-2">
                <li>TIỆC TẠI GIA</li>
                <li>TIỆC BUFFET</li>
                <li>TIỆC CƯỚI HỎI</li>
                <li>TIỆC SỰ KIỆN</li>
                <li>TIỆC TEA BREAK</li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">LIÊN HỆ</h3>
              <p>Address: abc@cmcglobal.vn</p>
              <p>Hotline: 0919319071</p>
            </div>
          </div>

          <div className="md:col-span-1 relative">
            <div className="w-full h-[300px] relative">
              <img src="/path/to/your-image.jpg" alt="Set Menu" className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-2xl font-bold">SET MENU</h3>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg w-full transition duration-300">Xem chi tiết</button>
          </div>

          <div className="md:col-span-1 relative">
            <div className="w-full h-[300px] relative">
              <img src="/path/to/your-image2.jpg" alt="Menu Tự Chọn" className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-2xl font-bold">MENU TỰ CHỌN</h3>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg w-full transition duration-300">Xem chi tiết</button>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">VÌ SAO LỰA CHỌN CHÚNG TÔI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'].map((src, index) => (
            <div key={index} className="rounded-lg shadow-md hover:scale-105 transition duration-300">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-[250px] object-cover rounded-lg mb-4" />
              <p className="text-lg font-medium text-gray-700">Hình ảnh {index + 1} - Mô tả dịch vụ</p>
              <p className="text-sm text-gray-500 mt-2">
                {index === 0 && 'Chúng tôi cam kết mang đến cho bạn những món ăn tươi ngon, được chế biến từ nguyên liệu chất lượng nhất.'}
                {index === 1 && 'Dịch vụ của chúng tôi luôn đi kèm với sự chăm sóc tận tình, giúp bạn yên tâm tổ chức tiệc tại gia.'}
                {index === 2 && 'Đội ngũ nhân viên chuyên nghiệp sẽ giúp bạn tạo ra một buổi tiệc hoàn hảo, ấn tượng cho mọi khách mời.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
