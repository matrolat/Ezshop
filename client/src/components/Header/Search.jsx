import React from 'react'
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export default function Search() {

    const SearchContainer = styled(Box)`
    border-radius: 2px;
    margin-left: 10px;
    width: 38%;
    background-color: #fff;
    display: flex;
  `;

    const SearchIconWrapper = styled(Box)`
    margin-left: auto;
    padding: 5px;
    display: flex;
    color: blue;
  `;

    const ListWrapper = styled(List)`
    position: absolute;
    color: #000;
    background: #FFFFFF;
    margin-top: 36px;
  `;

    const InputSearchBase = styled(InputBase)`
    font-size: unset;
    width: 100%;
    padding-left: 20px;
  `;


    return (
        <SearchContainer>

            <InputSearchBase
                placeholder='Search for products,brands and more'
            // inputProps={{ 'aria-label': 'search' }}
            >
                {/* <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper> */}

            </InputSearchBase>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    )
}
