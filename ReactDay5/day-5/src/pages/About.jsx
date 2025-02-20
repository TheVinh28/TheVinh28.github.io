import React, { useState, useMemo, useCallback } from 'react';
import { Button, Card, List, Typography, Row, Col } from 'antd';

const { Title } = Typography;

// ChildComponent sử dụng React.memo để tránh re-render không cần thiết
const ChildComponent = React.memo(({ onButtonClick, evenSum }) => {
  console.log('ChildComponent re-rendered');
  return (
    <Card title="Child Component" style={{ marginBottom: '20px' }}>
      <Button type="primary" onClick={onButtonClick}>
        Click Me to Increment Count
      </Button>
      <p style={{ marginTop: '10px' }}>Sum of Even Numbers: {evenSum}</p>
    </Card>
  );
});

const ParentComponent = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [count, setCount] = useState(0);

  // Sử dụng useMemo để tính tổng các số chẵn chỉ khi `numbers` thay đổi
  const evenSum = useMemo(() => {
    console.log('useMemo is recalculating evenSum...');
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  // Sử dụng useCallback để ghi nhớ hàm xử lý click, chỉ thay đổi khi `count` thay đổi
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={2}>Optimized React Components with useMemo, useCallback, React.memo</Title>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Parent Component" style={{ marginBottom: '20px' }}>
            <p>Current Count: {count}</p>
            <Button type="primary" onClick={() => setNumbers([...numbers, Math.floor(Math.random() * 100) + 1])}>
              Add Random Number
            </Button>
            <Button
              type="dashed"
              style={{ marginLeft: '10px' }}
              onClick={() => setCount(prevCount => prevCount + 1)}
            >
              Increment Count (without affecting evenSum)
            </Button>
          </Card>
        </Col>
        <Col span={12}>
          <ChildComponent onButtonClick={handleClick} evenSum={evenSum} />
        </Col>
      </Row>

      <List
        bordered
        header={<div>Numbers List</div>}
        dataSource={numbers}
        renderItem={item => <List.Item>{item}</List.Item>}
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};

export default ParentComponent;
