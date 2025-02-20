import React, { useEffect, useState, useMemo, useContext } from 'react';
import { List, Card, Tag, Tooltip, Button, Row, Col, Input, Pagination, Select, Modal, Descriptions, Divider, Steps, Typography, Skeleton } from 'antd';
import { ShoppingCartOutlined, AppstoreAddOutlined, FileTextOutlined } from '@ant-design/icons';
import { CartContext } from '../context/CartContext';

const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { Step } = Steps;
const { Title, Text } = Typography;

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [sortBy, setSortBy] = useState(""); 
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  

  useEffect(() => {
    const fetchRecipes = async (searchQuery = "", page = 1, limit = 6, sort = "") => {
      setLoading(true);
      try {
        const skip = (page - 1) * limit;
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchQuery}&limit=${limit}&skip=${skip}&sortBy=${sort}`);
        const data = await response.json();
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
        setTotalCount(data.total);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes(searchQuery, currentPage, pageSize, sortBy); 
  }, [searchQuery, currentPage, pageSize, sortBy]);

  const memoizedFilteredRecipes = useMemo(() => filteredRecipes, [filteredRecipes]);

  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1); 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
  };

  const handleSortChange = (value) => {
    setSortBy(value); 
    setCurrentPage(1); 
  };

  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
      const data = await response.json();
      setSelectedRecipe(data); 
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null); 
  };


  return (
    <div className="menu-container">
      <h1 className="text-center text-2xl font-bold mb-6">Menu</h1>

      <div className="mb-4 flex justify-between items-center">
        <Search
          placeholder="Tìm kiếm món ăn"
          onSearch={handleSearch}
          enterButton
          style={{ width: '300px' }}
        />
        <Select
          defaultValue=""
          onChange={handleSortChange}
          style={{ width: 150 }}
        >
          <Option value="">Sắp xếp theo</Option>
          <Option value="price">Giá (Thấp đến Cao)</Option>
          <Option value="-price">Giá (Cao đến Thấp)</Option>
          <Option value="name">Tên (A-Z)</Option>
          <Option value="-name">Tên (Z-A)</Option>
        </Select>
      </div>

      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={memoizedFilteredRecipes}
        loading={loading}
        renderItem={(recipe) => (
          <Tooltip
            title={<div style={{ color: '#fff', backgroundColor: '#333', padding: '10px', borderRadius: '8px' }}>{recipe.ingredients?.join(', ')}</div>}
            placement="bottom"
            overlayStyle={{ maxWidth: '250px', fontSize: '14px' }}
          >
            <List.Item>
              <Card
                hoverable
                cover={ 
                  <div className="relative">
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {recipe.tags?.map((tag, index) => (
                        <Tag key={index} color="blue" className="rounded-md px-2 py-1">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <img
                      alt={recipe.name}
                      src={recipe.image || 'https://via.placeholder.com/150'}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                }
                onClick={() => fetchRecipeDetails(recipe.id)} 
              >
                <Meta
                  title={recipe.name}
                  description={
                    <div>
                      <strong>Instructions:</strong>
                      <ul>
                        {recipe.instructions?.map((step, index) => (
                          <li key={index}>Step {index + 1}: {step}</li>
                        ))}
                      </ul>
                    </div>
                  }
                />
                <div className="mt-4">
                  <Row justify="space-between" align="middle">
                    <Col>
                      <p className="text-lg font-bold text-gray-800">${recipe.price || 'N/A'}</p>
                    </Col>
                    <Col>
                      <Button 
                        type="primary" 
                        onClick={(e) => {
                          e.stopPropagation(); 
                          addToCart(recipe); 
                        }}
                      >
                        Đặt món ăn
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </List.Item>
          </Tooltip>
        )}
        renderLoading={() => (
          <List.Item>
            <Skeleton active avatar paragraph={{ rows: 3 }} />
          </List.Item>
        )}
      />
      
      <div className="mt-4 text-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalCount}
          onChange={handlePageChange}
          onShowSizeChange={handlePageSizeChange}
          showSizeChanger
          pageSizeOptions={['6', '12', '18', '24', '30']}
          showQuickJumper
        />
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination current={currentPage} pageSize={pageSize} total={totalCount} onChange={setCurrentPage} showSizeChanger onShowSizeChange={(_, size) => setPageSize(size)} />
      </div>
      <Modal title={<Title level={3}><AppstoreAddOutlined /> {selectedRecipe?.name}</Title>} open={!!selectedRecipe} onCancel={() => setSelectedRecipe(null)} footer={null} width={800}>
        {selectedRecipe ? (
          <div>
            <Row gutter={16}>
              <Col span={12}><img alt={selectedRecipe.name} src={selectedRecipe.image || 'https://via.placeholder.com/150'} className="w-full rounded-lg shadow-md" /></Col>
              <Col span={12}>
                <Descriptions title="Chi tiết món ăn" bordered>
                  <Descriptions.Item label="Giá" span={3}><Text strong>${selectedRecipe.price || 'N/A'}</Text></Descriptions.Item>
                  <Descriptions.Item label="Thành phần" span={3}>{selectedRecipe.ingredients?.join(', ') || 'N/A'}</Descriptions.Item>
                  <Descriptions.Item label="Tags" span={3}>{selectedRecipe.tags?.map((tag, index) => <Tag key={index} color="green">{tag}</Tag>) || 'N/A'}</Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <Steps direction="vertical">
              {selectedRecipe.instructions?.map((step, index) => (
                <Step key={index} title={<Text strong>Bước {index + 1}</Text>} description={step} icon={<FileTextOutlined />} />
              ))}
            </Steps>
            <Divider />
            <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={() => addToCart(selectedRecipe)} block>
              Đặt món ngay
            </Button>
          </div>
        ) : (
          <Skeleton active />
        )}
      </Modal>
    </div>
  );
};

export default Menu;
