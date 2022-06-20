import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
  html{
      font-size: 16px;
      -webkit-text-size-adjust: none;
      font-family: 'Noto Sans KR',sans-serif;       
      font-display: fallback;
      -ms-overflow-style: none;
      scrollbar-width: none;
      height: 100%;
  }
  button {
      background: none;
      border: none;
      cursor: pointer;
      &:disabled {
          cursor: default;
          fill: #f2f3f4;
      }
  }
`;

export default GlobalStyles;
