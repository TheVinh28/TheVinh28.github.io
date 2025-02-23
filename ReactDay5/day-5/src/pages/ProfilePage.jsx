import React, { useEffect, useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Select, DatePicker } from "antd";
import axios from "axios";
import moment from "moment";
import  AuthContext  from "../context/AuthContext"; // Import AuthContext

const { Option } = Select;

const validationSchema = Yup.object({
  name: Yup.string().required("Vui lòng nhập họ tên"),
  phone: Yup.string().required("Vui lòng nhập số điện thoại"),
  email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
  gender: Yup.string().required("Vui lòng chọn giới tính"),
  birthday: Yup.date().required("Vui lòng chọn ngày sinh"),
});

const ProfilePage = () => {
  const { userData, logout } = useContext(AuthContext); // Lấy thông tin từ AuthContext
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (!userData) return;

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${userData.id}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userData]);

  if (!userData) {
    return <div>Vui lòng đăng nhập!</div>;
  }

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <div className="text-center mb-6">
          <img
            src={userProfile.image || "https://via.placeholder.com/100"}
            alt="Avatar"
            className="w-20 h-20 mx-auto rounded-full"
          />
          <h3 className="mt-2 font-medium">{userProfile.firstName} {userProfile.lastName}</h3>
        </div>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-orange-500">Thông tin cá nhân</a>
          </li>
          <li className="mb-2"><a href="#">Cài đặt địa chỉ</a></li>
          <li className="mb-2"><a href="#">Quản lý đơn hàng</a></li>
          <li className="mb-2"><a href="#">Mã đã lưu</a></li>
          <li>
            <button onClick={logout} className="text-red-500">
              Đăng xuất
            </button>
          </li>
        </ul>
      </div>

      {/* Form */}
      <div className="w-3/4 bg-white p-8">
        <Formik
          initialValues={{
            name: userProfile.firstName + " " + userProfile.lastName,
            phone: userProfile.phone,
            email: userProfile.email,
            gender: userProfile.gender,
            birthday: userProfile.birthDate,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            try {
              const updatedData = { ...userProfile, ...values }; // Gộp dữ liệu đã chỉnh sửa
              await axios.put(`https://dummyjson.com/users/${userProfile.id}`, updatedData);
              alert("Thông tin đã được cập nhật!");
            } catch (error) {
              console.error("Lỗi khi cập nhật người dùng:", error);
              alert("Lưu thông tin không thành công.");
            }
          }}
        >
          {({ errors, touched, setFieldValue, values }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Họ tên:</label>
                  <Field name="name" className="w-full p-2 border rounded" />
                  {errors.name && touched.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                </div>

                <div>
                  <label>Giới tính:</label>
                  <Select
                    value={values.gender}
                    className="w-full"
                    onChange={(value) => setFieldValue("gender", value)}
                  >
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                  </Select>
                  {errors.gender && touched.gender && <div className="text-red-500 text-sm">{errors.gender}</div>}
                </div>

                <div>
                  <label>Số điện thoại:</label>
                  <Field name="phone" className="w-full p-2 border rounded" />
                  {errors.phone && touched.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                </div>

                <div>
                  <label>Ngày sinh:</label>
                  <DatePicker
                    value={values.birthday ? moment(values.birthday) : null}
                    className="w-full"
                    onChange={(date, dateString) => setFieldValue("birthday", dateString)}
                  />
                  {errors.birthday && touched.birthday && <div className="text-red-500 text-sm">{errors.birthday}</div>}
                </div>

                <div>
                  <label>Email:</label>
                  <Field name="email" type="email" className="w-full p-2 border rounded" />
                  {errors.email && touched.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
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

export default ProfilePage;
