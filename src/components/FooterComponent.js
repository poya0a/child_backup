import React from 'react';

const FooterComponent = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="gap">
          <div className="wrap">
            <div className="top">
              <div className="contnet">
                <div className="left">
                  <span className='txt'>후원문의·상담</span>
                  <span className='tel'>1588-1940</span>
                  <span className='notice'>(평일 09:00 ~ 18:00 / 주말 및 공휴일 휴무)</span>
                </div>
                <div className="right">
                  <a href="#!" title='기부금 영수증 팝업 열림'>기부금 영수증</a>
                  <a href="#!" title='뉴스레터 팝업 열림'>뉴스레터</a>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="content">
                <ul className="sns-list">
                  <li className="sns-item youtube"><a href="#!" title='유튜브 새창열림'><img src="./images/icon_youtube.jpg" alt="sns" /></a></li>
                  <li className="sns-item facebook"><a href="#!" title='페이스북 새창열림'><img src="./images/icon_facebook.jpg" alt="sns" /></a></li>
                  <li className="sns-item twitter"><a href="#!" title='트위터 새창열림'><img src="./images/icon_twitter.jpg" alt="sns" /></a></li>
                  <li className="sns-item instagram"><a href="#!" title='인스타그램 새창열림'><img src="./images/icon_instagram.jpg" alt="sns" /></a></li>
                  <li className="sns-item naverblog"><a href="#!" title='네이버블로그 새창열림'><img src="./images/icon_naverblog.jpg" alt="sns" /></a></li>
                  <li className="sns-item ee"><a href="#!" title='ee 새창열림'><img src="./images/icon_ee.jpg" alt="sns" /></a></li>
                </ul>
                <div className="btm-box">

                  <div className="logo-box"><img src="./images/logo_footer.png" alt="logo" /></div>

                  <div className="left">
                    <ul className="footer-menu-list">
                      <li className='footer-menu-item'><a href="#!" title='인재채용 새창열림'>인재채용</a></li>
                      <li className='footer-menu-item'><a href="#!" title='이용약관 새창열림'>이용약관</a></li>
                      <li className='footer-menu-item'><a href="#!" title='개인정보처리방침 새창열림'>개인정보처리방침</a></li>
                      <li className='footer-menu-item'><a href="#!" title='이메일무단수집거부 새창열림'>이메일무단수집거부</a></li>
                      <li className='footer-menu-item'><a href="#!" title='ENG 새창열림'>ENG</a></li>
                    </ul>
                    <div className="footer-txt-box">
                      <p className='address'>사회복지법인 어린이재단 |<br /> 사업자등록번호 202-82-55238 | 회장 이제훈 | 대표이사 차흥봉</p>
                      <p className='address'>(04522) 서울시 중구 무교로 20 어린이재단빌딩 |<br /> 대표전화 1588-1940 | 팩스 02-756-4256</p>
                      <p className='copy'>Copyright © ChildFund Korea. All Rights Reserved.</p>
                    </div>
                  </div>

                  <div className="right">
                    <div className="select-wrap">

                      <div className="select-box">
                        <div className="select-btn-box">
                          <a href="#!" className='select-btn'>차일드펀드 회원기관</a><i className='arrow-btn'></i>
                        </div>
                        <ul className="option-list">
                          <li className="option-item"><a href="#!">차일드펀드 회원기관</a></li>
                          <li className="option-item"><a href="http://www.childfundalliance.org/">차일드펀드 얼라이언스</a></li>
                          <li className="option-item"><a href="http://www.childfund.org.nz/">뉴질랜드</a></li>
                          <li className="option-item"><a href="http://www.childfund.de/">독일</a></li>
                          <li className="option-item"><a href="https://www.educo.org/">스페인</a></li>
                          <li className="option-item"><a href="https://www.childfund.org/">미국</a></li>
                          <li className="option-item"><a href="http://www.barnfonden.se/">스웨덴</a></li>
                          <li className="option-item"><a href="http://www.childfund.ie/">이탈리아</a></li>
                          <li className="option-item"><a href="http://www.unenfantparlamain.org/">프랑스</a></li>
                          <li className="option-item"><a href="http://www.childfund.or.jp/">일본</a></li>
                          <li className="option-item"><a href="http://www.ccfcanada.ca/">캐나다</a></li>
                          <li className="option-item"><a href="http://www.childfund.org.au/">호주</a></li>
                        </ul>
                      </div>

                      <div className="select-box">
                        <div className="select-btn-box">
                          <a href="#!" className='select-btn'>어린이재단 사업기관</a><i className='arrow-btn'></i>
                        </div>
                        <ul className="option-list">
                          <li className="option-item"><a href="http://www.childfund-ydp.or.kr/">영등포종합사회복지관</a></li>
                          <li className="option-item"><a href="http://www.childfund-busan.or.kr/">부산종합사회복지관</a></li>
                          <li className="option-item"><a href="http://www.childfund-daegu.or.kr/">대구종합사회복지관</a></li>
                          <li className="option-item"><a href="http://www.childfund-daejeon.or.kr/">대전종합사회복지관</a></li>
                          <li className="option-item"><a href="http://www.childfund-cheongju.or.kr/">청주사회복지관</a></li>
                          <li className="option-item"><a href="http://www.childfund-jeonbuk.or.kr/">전북종합사회복지관</a></li>
                          <li className="option-item"><a href="http://www.childfund-jeju.or.kr/">제주종합사회복지관</a></li>
                          <li className="option-item"><a href="http://www.dg1391.or.kr/">대구아동보호전문기관</a></li>
                          <li className="option-item"><a href="http://www.cyber1391.or.kr/">광주아동보호전문기관</a></li>
                          <li className="option-item"><a href="http://www.1391.org/">강원도아동보호전문기관</a></li>
                          <li className="option-item"><a href="http://www.kd1391.or.kr/index/index.php">강원동부아동보</a></li>
                          <li className="option-item"><a href="http://www.e1391.or.kr/">전남아동보호전문기관</a></li>
                          <li className="option-item"><a href="http://www.seoul-foster.or.kr/">서울가정위탁지원센터</a></li>
                          <li className="option-item"><a href="http://www.icfoster.or.kr/">인천가정위탁지원센터</a></li>
                          <li className="option-item"><a href="http://www.gjw.or.kr/foster/">광주가정위탁지원센터</a></li>
                          <li className="option-item"><a href="http://www.gg-foster.or.kr/">경기남부가정위탁지원센터</a></li>
                          <li className="option-item"><a href="http://www.fosterservice.or.kr/">충남가정위탁지원센터</a></li>
                          <li className="option-item"><a href="http://www.knfoster.or.kr/">경남가정위탁지원센터</a></li>
                          <li className="option-item"><a href="http://www.hanlove.or.kr/">한사랑마을</a></li>
                          <li className="option-item"><a href="http://www.hsr.sc.kr/">한사랑학교</a></li>
                          <li className="option-item"><a href="http://www.ajang-ajang.or.kr/">한사랑장애영아원</a></li>
                          <li className="option-item"><a href="#!">시흥다어울림센터</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;