import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, notification, Card, Tag } from 'antd';
import { MdChair } from 'react-icons/md';

const { Title, Text } = Typography;

const Booking = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats] = useState(
    Array.from({ length: 50 }, (_, i) => ({ id: i + 1, reserved: Math.random() < 0.3 }))
  );

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const handleBooking = () => {
    notification.success({
      message: 'Đặt vé thành công!',
      description: `Bạn đã đặt ${selectedSeats.length} ghế: ${selectedSeats.join(', ')}`,
    });
    setSelectedSeats([]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      <Card bordered={false} className="mb-6">
        <Title level={2} className="text-center">
          Đặt vé cho phim ID: <Text type="secondary">{id}</Text>
        </Title>
        <Text className="block text-center">
          Chọn ghế bằng cách nhấn vào các ô bên dưới. Ghế màu xám đã được đặt trước.
        </Text>
      </Card>

      <div className="grid grid-cols-5 sm:grid-cols-8 gap-4 my-6">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg text-white font-bold cursor-pointer transition-all 
            ${seat.reserved ? 'bg-gray-400 cursor-not-allowed' : ''} 
            ${selectedSeats.includes(seat.id) ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'}`}
            onClick={() => !seat.reserved && toggleSeatSelection(seat.id)}
          >
            <MdChair size={24} />
            <span className="text-xs mt-1">{seat.id}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4">
        <Tag color="blue">Số ghế đã chọn: {selectedSeats.length}</Tag>
        <Button
          type="primary"
          size="large"
          disabled={selectedSeats.length === 0}
          onClick={handleBooking}
          className="px-6 py-2"
        >
          Xác nhận đặt vé
        </Button>
      </div>
    </div>
  );
};

export default Booking;
