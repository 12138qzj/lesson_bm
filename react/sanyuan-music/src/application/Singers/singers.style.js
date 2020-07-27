import styled from 'styled-components';
import style from '../../assets/global-style';

export const NavContainer = styled.div `
    box-sizing: border-box;
    position: fixed;
    top: 95px;
    width: 100%;
    padding: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
export const List = styled.div `
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin:10px 0 10px 10px;
    color: ${style["font-color-desc"]};
    font-size: ${style["font-size-s"]};
  }
`;