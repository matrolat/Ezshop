import AppBar from '@mui/material/AppBar';
import { styled, Box } from '@mui/material'
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from './Search';
import CustomButton from './CustomButton';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


const StyledHeader = styled(AppBar)
    `
    background-color:#2874f0;

`
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    // color: #FFFFFF;
    // text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));


const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box>
                        <SubHeading>Explore&nbsp;

                            <Box component="span" style={{ color: '#FFE500' }}>
                                Plus
                            </Box>
                            <PlusImage src={subURL} />
                        </SubHeading>
                    </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButton/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;




