import { css } from 'styled-components/macro';

import NotoSansKR_Bold from './NotoSansKR-Bold.woff';
import NotoSansKR_Regular from './NotoSansKR-Regular.woff';
import AppleSDGothicNeo_Bold from './AppleSDGothicNeoB.woff';
import AppleSDGothicNeo_Regular from './AppleSDGothicNeoR.woff';
import OpenSans_Bold from './OpenSans-Bold.woff';
import OpenSans_Regular from './OpenSans-Regular.woff';

export default css`
  // 구글 본고딕 - 한글
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'), url(${AppleSDGothicNeo_Bold}) format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'), url(${AppleSDGothicNeo_Regular}) format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: local('Noto Sans KR'), url(${NotoSansKR_Bold}) format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: local('Noto Sans KR'), url(${NotoSansKR_Regular}) format('woff');
    font-weight: 400;
  }

  // 구글 arimo - 영어
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), url(${OpenSans_Bold}) format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), url(${OpenSans_Regular}) format('woff');
    font-weight: 400;
  }
`;
