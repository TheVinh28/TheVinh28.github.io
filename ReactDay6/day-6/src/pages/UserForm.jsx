import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Select, DatePicker } from "antd";
import axios from "axios";
import moment from "moment"; 

const { Option } = Select;

const validationSchema = Yup.object({
  name: Yup.string().required("Vui lòng nhập họ tên"),
  phone: Yup.string().required("Vui lòng nhập số điện thoại"),
  email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
  gender: Yup.string().required("Vui lòng chọn giới tính"),
  birthday: Yup.date().required("Vui lòng chọn ngày sinh"),
});

const UserForm = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users/1"); 
        setUserData(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      }
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 p-4">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <h3 className="mt-2 font-medium">{userData.name || "Nguyễn Văn A"}</h3>
        </div>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-orange-500">Thông tin cá nhân</a>
          </li>
          <li className="mb-2"><a href="#">Cài đặt địa chỉ</a></li>
          <li className="mb-2"><a href="#">Quản lý đơn hàng</a></li>
          <li className="mb-2"><a href="#">Mã đã lưu</a></li>
          <li><a href="#" className="text-red-500">Đăng xuất</a></li>
        </ul>
      </div>

      <div className="w-3/4 bg-white p-8">
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            gender: "",
            birthday: null,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            try {
              const response = await axios.post("https://dummyjson.com/users/add", values);
              alert("Thông tin đã được lưu!");
            } catch (error) {
              console.error("Lỗi khi thêm người dùng:", error);
              alert("Lưu thông tin không thành công.");
            }
          }}
        >
          {({ errors, touched, setFieldValue, values }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Họ tên:</label>
                  <Field
                    name="name"
                    placeholder="Nhập họ tên"
                    className="w-full p-2 border rounded"
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                  )}
                </div>

                <div>
                  <label>Giới tính:</label>
                  <Select
                    value={values.gender} 
                    placeholder="Lựa chọn"
                    className="w-full"
                    onChange={(value) => setFieldValue("gender", value)}
                  >
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                  </Select>
                  {errors.gender && touched.gender && (
                    <div className="text-red-500 text-sm">{errors.gender}</div>
                  )}
                </div>

                <div>
                  <label>Số điện thoại:</label>
                  <Field
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    className="w-full p-2 border rounded"
                  />
                  {errors.phone && touched.phone && (
                    <div className="text-red-500 text-sm">{errors.phone}</div>
                  )}
                </div>

                <div>
                  <label>Ngày sinh:</label>
                  <DatePicker
                    value={values.birthday ? moment(values.birthday) : null} 
                    className="w-full"
                    onChange={(date, dateString) =>
                      setFieldValue("birthday", dateString)
                    }
                  />
                  {errors.birthday && touched.birthday && (
                    <div className="text-red-500 text-sm">{errors.birthday}</div>
                  )}
                </div>

                <div>
                  <label>Email:</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Nhập email nhận ưu đãi"
                    className="w-full p-2 border rounded"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                  Lưu thông tin
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
