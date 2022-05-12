import React, { Component } from 'react'
import styled from 'styled-components';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductPreview from './components/ProductPreview';
import ProductData from './ProductData';

const Container = styled.div`
  width: 100%;
  padding: 0 4rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
`

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: 'https://i.imgur.com/iOeUBV7.png',
    currentSelectedFeature: false
  }

  onColorOptionsClick = (pos) => {
    const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({
      currentPreviewImage: updatedPreviewImage
    })
  }

  onFeatureItemClick = (pos) => {
    this.setState({
      currentSelectedFeature:pos===1 ? true : false
    })
  }

  render() {
    return (
      <div>
          <Header/>
          <Container>
            <Row>
                <ProductPreview currentSelectedFeature={this.state.currentSelectedFeature} currentPreviewImage={this.state.currentPreviewImage}/>
                <ProductDetails onFeatureItemClick={this.onFeatureItemClick} onHeartButtonClick={this.onHeartButtonClick} onColorOptionClick={this.onColorOptionsClick} data={this.state.ProductData}/>
            </Row>
          </Container>
      </div>
    )
  }
}

export default App