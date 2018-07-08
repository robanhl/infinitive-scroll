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

export const Title = styled.h1 `
  font-family: sans-serif;
  font-weight: 100;
  margin: 30px 30px 20px 30px;
`

const Github = styled.span `
  vertical-align: middle;
  padding: 6px 10px;
  border: 1px solid rgb(213, 213, 213);
  font-size: 14px;
  font-weight: 400;
  outline: none;
  font-family: sans-serif;
`

export const GithubButton = styled(Github)`
  border-radius: 3px 0 0 3px;
  background: rgb(248, 248, 248);
  &:hover {
    background: rgb(238, 238, 238);
  }
`

export const GithubCount = styled(Github)`
  margin-left: -1px;
  border-radius: 0 3px 3px 0;
  width: 100px;
`

export const GithubLink = styled.a `
  display: block;
  text-decoration: none;
  color: black;
`

export const Message = styled.h2 `
  font-family: sans-serif;
  font-weight: 100;
  margin-top: 30vh;
`

export const Blue = styled.span `color: rgb(0, 128, 255);`

export const FormTitle = styled.h1 `
  font-family: sans-serif;
  font-weight: 100;
  margin-top: 22vh;
  margin-bottom: 50px;
  @media (max-width: 500px) {
    margin-top: 15vh;
  }
`

export const TextField = styled.input `
  display: block;
  height: 42px;
  width: 300px;
  margin: 10px auto;
  padding: 0 12px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  outline: none;
  font-size: 17px;
  box-sizing: border-box;
  appearance: none;
  &:focus {
    border-color: rgb(0, 128, 255);
  }
`

export const Submit = styled.input `
  border: none;
  color: rgb(0, 128, 255);
  font-size: 24px;
  background: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
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
