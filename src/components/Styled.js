import styled, { keyframes } from 'emotion/react'

export const colors = {
  Grey: '#E7E7E7'
}

export const Body = styled.div `
  text-align: center;
  background-color: ${colors.Grey};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  min-height: 100vh;
  font-family: sans-serif;
`
export const Container = styled.div `
  margin: 20px 140px 20px 140px;
  @media (min-width: 320px) {
    margin: 0
  }
  @media (max-width : 321px) {
    margin: 0
  }
  @media (min-width : 1024px) {
    margin: 20px 140px 20px 140px;
  }
  @media (min-width : 1224px) {
    margin: 20px 190px 20px 190px;
  }
`

export const Image = styled('img')` 
  border-radius: 2%;
  box-shadow: 0 1px 2px rgba(25,25,25,0.2);
  transition: 0.3s;

  @media (max-width: 425px) {
    border-radius: 2%;
    height: 130px;
    @media (max-width : 321px) {
      height: 120px;
    }
  }
`

export const ContainerItem = styled.div `
  display: inline-flex;
  position: relative;
`

export const Overlay = styled.div `
  display:inline-flex;
  position:absolute;
  width:100%;
  flex-direction: column;
  transition: all 0.8s ease;
  background: rgba(0, 0, 0, 0.6);
  opacity:0;
  color:white;
  width: 100%;
  height: 100%;
&:hover{
  opacity:1;
}
@media (max-width: 425px) {
  opacity:1;
  }
`
export const Text = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  @media (max-width: 425px) {
    font-size: 12px;
    margin-top: 30px;
    }
`
export const Hr = styled.hr`
    width: 100px;
    margin-top: 10px;
`

export const ButtonFavorite = styled.div `
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid white;
  margin-top: 10px;
  margin-left: 70px;
  margin-right: 70px;
  padding: 5px;
@media (max-width: 425px) {
  font-size: 12px;
  margin-left: 40px;
  margin-right: 40px;
  }
`
const spin = keyframes`
0% {
  -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
}
`

export const Loader = styled.div ` 
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s ease infinite;
  `
