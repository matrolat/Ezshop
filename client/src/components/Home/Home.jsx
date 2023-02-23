import { useEffect } from 'react';
import { Fragment } from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux';
import Slide from './Slide';
import MidSection from './MidSection';
import MidSlide from './MidSlide';
const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`;


export default function Home() {

  const {products}= useSelector(state => state.getProducts);
  console.log(products)
  // const {products} = getProducts;
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getProducts())
    }, [dispatch]
  )
  return (
    <Fragment>
      <Navbar />
      <Component>

        <Banner />
        <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
      </Component>
    </Fragment>
  )
}
