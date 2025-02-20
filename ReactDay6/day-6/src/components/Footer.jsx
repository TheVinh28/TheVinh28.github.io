import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://intern-project-chi.vercel.app/static/media/logo.3d2794dc83c9f6633434.png"
              alt="Logo"
              className="w-32 mb-6 transition-transform duration-300 transform hover:scale-110"
            />
            <p className="text-center md:text-left text-sm text-gray-300 mb-6">
              Chúng tôi cung cấp dịch vụ tổ chức tiệc trọn gói với những món ăn ngon miệng, phục vụ tận nơi và cam kết mang lại sự hài lòng tuyệt đối.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">LIÊN KẾT</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Trang Chủ</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition duration-300">Dịch Vụ</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-yellow-400 transition duration-300">Thực Đơn</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition duration-300">Giới Thiệu</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">Liên Hệ</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">PHƯƠNG THỨC THANH TOÁN</h3>
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Mastercard"
              className="w-32 mb-4 transition-transform duration-300 transform hover:scale-110"
            />
            <p className="text-sm text-gray-300 text-center md:text-left">
              Chúng tôi chấp nhận thanh toán qua các phương thức tiện lợi như thẻ tín dụng, thẻ ghi nợ và nhiều phương thức khác.
            </p>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Tổ chức tiệc ABC. Tất cả quyền được bảo vệ. | Designed with ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
