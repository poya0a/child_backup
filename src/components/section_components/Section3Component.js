import React from 'react';

const Section3Component = () => {
  return (
    <section id="section3">
      <div className="sec3-bg"><img src="./images/sec3_bg1.png" alt="background" /></div>
      <div className="container">
        <div className="sec3-con-bg"></div>
        <div className="gap">
            <div className="wrap">

              <div className="title-wrap">
                <h2>투명하고 믿을 수 있는 <br /><strong>초록우산</strong> 어린이재단</h2>
                <div className="txt-box">
                  <p className='txt'>어린이에게 행복한 내일을,<br />후원자에겐 나누는 즐거움을 주는 다양한 활동을 펼치고 있습니다.</p>
                </div>
              </div>

              <div className="banner-wrap">
                <a href="#!" title='초록우산 어린이재단 이야기'>초록우산 어린이재단 이야기</a>
                <a href="#!" title='후원금, 어떻게 사용되나요?'>후원금, 어떻게 사용되나요?</a>
                <a href="#!" title='후원에 대한 11가지 궁금증'>후원에 대한 11가지 궁금증</a>
              </div>

              <div className="report-box">
                <ul className="report-list">

                  <li className="report-item">
                    <div className="img-box"><img src="./images/sec3img01.png" alt="report" /></div>
                    <p className='tit'>ChildFund Alliance<br />인증</p>
                  </li>

                  <li className="report-item">
                    <div className="img-box"><img src="./images/sec3img02.png" alt="report" /></div>
                    <p className='tit'>삼일투명경영대상</p>
                  </li>

                  <li className="report-item">
                    <div className="img-box"><img src="./images/sec3img03.png" alt="report" /></div>
                    <p className='tit'>한국가이드스타<br />6년 연속 별점 만점</p>
                  </li>

                  <li className="report-item">
                  <div className="img-box"><img src="./images/sec3img04.png" alt="report" /></div>
                    <p className='tit'>Accountable Now<br />멤버</p>
                  </li>

                  <li className="report-item">
                    <div className="img-box"><img src="./images/sec3img05.png" alt="report" /></div>
                    <p className='tit'>법질서 수준 향상<br />대통령 표창</p>
                  </li>

                  <li className="report-item">
                    <div className="img-box"><img src="./images/sec3img06.png" alt="report" /></div>
                    <p className='tit'>개인정보보호위원회<br />장관 표창</p>
                  </li>

                </ul>
              </div>

              <div className="history-box">
                <ul className="history-list">

                  <li className="history-item">
                    <div className="num"><strong className='count-num'>74</strong><i>년</i></div>
                    <p className='txt'>1948 문을 연 초록우산의 역사</p>
                  </li>

                  <li className="history-item">
                    <div className="num"><strong className='count-num'>52</strong><i>만 명</i></div>
                    <p className='txt'>마음을 나누어주신 든든한 후원자님</p>
                  </li>

                  <li className="history-item">
                    <div className="num"><strong className='count-num'>148</strong><i>만 명</i></div>
                    <p className='txt'>초록우산과 만나 행복해진 아이들</p>
                  </li>

                </ul>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3Component;