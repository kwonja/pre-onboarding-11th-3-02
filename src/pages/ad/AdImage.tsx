import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Img = styled.img`
display : flex;
margin : 0 auto;
`
const AdImage = () =>{
    return(
        <Link to="https://www.wanted.co.kr/">
            <Img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" alt="광고"/>
        </Link>
    )
}

export default AdImage;