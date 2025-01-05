import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const phoneRegex = /^(84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;

const validationSchema = Yup.object({
  fullName: Yup.string()
    .matches(/^[^0-9]+$/, 'Họ tên không được chứa số')
    .min(2, 'Họ tên phải có ít nhất 2 ký tự')
    .max(50, 'Họ tên không được vượt quá 50 ký tự')
    .required('Họ tên là bắt buộc'),
  phone: Yup.string()
    .matches(phoneRegex, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại là bắt buộc'),
  guestCount: Yup.number()
    .min(1, 'Số lượng khách phải lớn hơn 0')
    .max(10, 'Số lượng khách không được lớn hơn 10')
    .required('Số lượng khách là bắt buộc'),
  eventDate: Yup.date().required('Ngày tổ chức sự kiện là bắt buộc'),
  eventType: Yup.string().required('Loại sự kiện là bắt buộc'),
  confirmed: Yup.boolean().oneOf([true], 'Bạn cần xác nhận thông tin trước khi gửi')
});

const EventForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      guestCount: '',
      eventDate: '',
      eventType: '',
      confirmed: false
    },
    validationSchema,
    onSubmit: (values) => {
      if (!values.confirmed) {
        alert('Bạn cần xác nhận thông tin trước khi gửi');
        return;
      }
      
      const formData = `
        Họ và tên: ${values.fullName}
        Số điện thoại: ${values.phone}
        Số lượng khách: ${values.guestCount}
        Ngày tổ chức sự kiện: ${values.eventDate}
        Loại sự kiện: ${values.eventType}
      `;

      alert(`Thông tin đã gửi:\n${formData}`);
    }
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}>
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Liên Hệ Đặt Tiệc</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium">Họ và tên</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className={`mt-1 p-2 w-full border rounded ${formik.errors.fullName && formik.touched.fullName ? 'border-red-500' : 'border-gray-300'}`}
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="guestCount" className="block text-sm font-medium">Số lượng khách</label>
            <input
              id="guestCount"
              name="guestCount"
              type="number"
              min="0"
              max="10"
              className={`mt-1 p-2 w-full border rounded ${formik.errors.guestCount && formik.touched.guestCount ? 'border-red-500' : 'border-gray-300'}`}
              value={formik.values.guestCount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.guestCount && formik.touched.guestCount && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.guestCount}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">Số điện thoại</label>
            <input
              id="phone"
              name="phone"
              type="text"
              className={`mt-1 p-2 w-full border rounded ${formik.errors.phone && formik.touched.phone ? 'border-red-500' : 'border-gray-300'}`}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-sm font-medium">Ngày tổ chức sự kiện</label>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              className={`mt-1 p-2 w-full border rounded ${formik.errors.eventDate && formik.touched.eventDate ? 'border-red-500' : 'border-gray-300'}`}
              value={formik.values.eventDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.eventDate && formik.touched.eventDate && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.eventDate}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="eventType" className="block text-sm font-medium">Loại sự kiện</label>
          <select
            id="eventType"
            name="eventType"
            className={`mt-1 p-2 w-full border rounded ${formik.errors.eventType && formik.touched.eventType ? 'border-red-500' : 'border-gray-300'}`}
            value={formik.values.eventType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Chọn loại sự kiện</option>
            <option value="tiệc cưới">Tiệc cưới</option>
            <option value="tiệc tất niên">Tiệc tất niên</option>
            <option value="tiệc thường">Tiệc thường</option>
          </select>
          {formik.errors.eventType && formik.touched.eventType && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.eventType}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="confirmed"
              className="mr-2"
              checked={formik.values.confirmed}
              onChange={formik.handleChange}
            />
            Xác nhận thông tin
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Gửi Thông Tin
        </button>
      </form>
    </div>
  );
};

export default EventForm;
