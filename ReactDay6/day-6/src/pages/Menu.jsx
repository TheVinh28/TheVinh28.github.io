import React, { useEffect, useState, useMemo } from 'react';
import { List, Card, Tag, Tooltip, Button, Row, Col, Input, Pagination, Select, Modal, Descriptions, Divider, Steps, Typography, Skeleton } from 'antd';
import { ShoppingCartOutlined, AppstoreAddOutlined, FileTextOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store/cartSlice';

const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { Step } = Steps;
const { Title, Text } = Typography;

const Menu = () => {
  const dispatch = useDispatch();
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

  const handleAddToCart = (recipe) => {
    dispatch(addToCart(recipe));
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
          <Tooltip title={recipe.ingredients?.join(', ')}>
            <List.Item>
              <Card
                hoverable
                cover={
                  <img
                    alt={recipe.name}
                    src={recipe.image || 'https://via.placeholder.com/150'}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                }
                onClick={() => fetchRecipeDetails(recipe.id)}
              >
                <Meta title={recipe.name} 
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
                      <Button type="primary" onClick={(e) => { e.stopPropagation(); handleAddToCart(recipe); }}>
                        Đặt món ăn
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </List.Item>
          </Tooltip>
        )}
      />
      <Pagination current={currentPage} pageSize={pageSize} total={totalCount} onChange={handlePageChange} onShowSizeChange={handlePageSizeChange} showSizeChanger />
      <Modal title={selectedRecipe?.name} open={!!selectedRecipe} onCancel={() => setSelectedRecipe(null)} footer={null}>
        {selectedRecipe ? (
          <div>
            <img alt={selectedRecipe.name} src={selectedRecipe.image || 'https://via.placeholder.com/150'} className="w-full rounded-lg shadow-md" />
            <Descriptions title="Chi tiết món ăn" bordered>
              <Descriptions.Item label="Giá">${selectedRecipe.price || 'N/A'}</Descriptions.Item>
              <Descriptions.Item label="Thành phần">{selectedRecipe.ingredients?.join(', ') || 'N/A'}</Descriptions.Item>
            </Descriptions>
            <Divider />
            <Steps direction="vertical">
              {selectedRecipe.instructions?.map((step, index) => (
                <Step key={index} title={`Bước ${index + 1}`} description={step} icon={<FileTextOutlined />} />
              ))}
            </Steps>
            <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={() => handleAddToCart(selectedRecipe)} block>
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
