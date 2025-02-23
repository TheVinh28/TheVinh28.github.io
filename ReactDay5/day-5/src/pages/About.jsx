import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 via-green-300 to-green-500 min-h-screen">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-white">Giới thiệu về nhà hàng</h1>
          <p className="text-xl text-white opacity-80">
            Chào mừng đến với nhà hàng của chúng tôi, nơi mang đến những món ăn ngon và trải nghiệm ẩm thực tuyệt vời!
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Giới thiệu nhà hàng */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Sứ mệnh của chúng tôi</h2>
            <p className="text-lg text-white opacity-80">
              Nhà hàng của chúng tôi luôn cam kết mang đến những món ăn chất lượng, tươi ngon nhất. Với đội ngũ đầu bếp tài năng và dịch vụ tận tâm, chúng tôi hy vọng sẽ đem lại cho bạn những trải nghiệm ẩm thực tuyệt vời. Mỗi món ăn đều được chế biến từ những nguyên liệu tươi ngon và theo phong cách ẩm thực đậm đà bản sắc.
            </p>
          </div>

          {/* Hình ảnh nhà hàng */}
          <div className="relative">
            <img
              src="https://example.com/restaurant-image.jpg" // Thay bằng đường dẫn hình ảnh thật của nhà hàng
              alt="Nhà hàng"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-white">Khám phá thực đơn của chúng tôi</h2>
          <p className="text-lg text-white opacity-80 mt-4">
            Từ các món khai vị tươi ngon đến các món chính hấp dẫn, chúng tôi có tất cả những gì bạn cần để làm hài lòng vị giác của mình. Hãy đặt món ngay hôm nay và tận hưởng những món ăn tuyệt vời!
          </p>
          <a
            href="/menu"
            className="mt-8 inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            Xem thực đơn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
