import React from 'react';

const Section1Component = () => {
  return (
    <section id="section1">
      <div className="container">
        <div className="gap">
          <div className="wrap">

            <div className="slide-container">
              <div className="slide-view">
                <ul className="slide-wrap">

                  <li className="slide slide1">
                    <a href="#!" className='main-slide-btn' title='"사랑해 떠나지마"'>
                      <div className="slide-text-box">
                        <div className="txt-wrap">
                          <p className='txt tit'>"사랑해 떠나지마"</p>
                          <p className='txt'>다시 아빠를 만나면 하고 싶은 말</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="slide slide2">
                    <a href="#!" className='main-slide-btn' title='찬스팔찌'>
                      <div className="slide-text-box">
                        <div className="txt-wrap">
                          <p className='txt tit'>찬스팔찌</p>
                          <p className='txt'>빛나는 손이 늘수록! 더 많은 꿈이 환하게! 마음을 연결해 주세요</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="slide slide3">
                    <a href="#!" className='main-slide-btn' title='엄마 없는 집'>
                      <div className="slide-text-box">
                        <div className="txt-wrap">
                          <p className='txt tit'>엄마 없는 집</p>
                          <p className='txt'>"우리 엄마는 집에 없어요. 저기 하늘나라에 갔어요"</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="slide slide4">
                    <a href="#!" className='main-slide-btn' title='일주일만 우리집'>
                      <div className="slide-text-box">
                        <div className="txt-wrap">
                          <p className='txt tit'>일주일만 우리집</p>
                          <p className='txt'>일주일간의 안락을 뒤로 가족은 다시 길 위에 놓였습니다.</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="slide slide5">
                    <a href="#!" className='main-slide-btn' title='리커버리 프로젝트'>
                      <div className="slide-text-box">
                        <div className="txt-wrap">
                          <p className='txt tit'>리커버리 프로젝트</p>
                          <p className='txt'>코로나19로 인한 위기 상황에 놓인 아동 및 아동 가정의 회복을 지원합니다</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="slide slide6">
                    <a href="#!" className='main-slide-btn' title='A l r i g h t'>
                      <div className="slide-text-box">
                        <div className="txt-wrap">
                          <p className='txt tit'>A l r i g h t</p>
                          <p className='txt'>아프리카 아이들의 캄캄한 어둠을 희망의 빛으로 밝혀주세요</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="slide slide7">
                    <a href="#!" className='main-slide-btn' title='초록우산 어워드'>
                      <div className="slide-text-box">
                        <div className="txt-wrap">
                          <p className='txt tit'>초록우산 어워드</p>
                          <p className='txt'>아동이 직접 추천, 투표, 시상하는 아동중심 아동권리시상식</p>
                        </div>
                      </div>
                    </a>
                  </li>

                </ul>
              </div>

              <div className="slide-btn-wrap">
                <button className='slide-prev-btn'><i className="fa fa-play"></i></button>
                <button className='slide-next-btn'><i className="fa fa-play"></i></button>
              </div>

              <div className="sub-slide-container">
                <div className="sub-slide-view">
                  <ul className="sub-slide-wrap">
                    <li className="sub-slide sub-slide3"><img src="./images/sub_slide03.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide4"><img src="./images/sub_slide04.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide5"><img src="./images/sub_slide05.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide6"><img src="./images/sub_slide06.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide7"><img src="./images/sub_slide07.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide1"><img src="./images/sub_slide01.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide2"><img src="./images/sub_slide02.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide3"><img src="./images/sub_slide03.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide4"><img src="./images/sub_slide04.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide5"><img src="./images/sub_slide05.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide6"><img src="./images/sub_slide06.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide7"><img src="./images/sub_slide07.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide1"><img src="./images/sub_slide01.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide2"><img src="./images/sub_slide02.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide3"><img src="./images/sub_slide03.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide4"><img src="./images/sub_slide04.jpg" alt="sub-slide" /></li>
                    <li className="sub-slide sub-slide5"><img src="./images/sub_slide05.jpg" alt="sub-slide" /></li>
                  </ul>
                </div>
              </div>

              <div className="spon-box">
                <div className="sopn-wrap">
                  <ul className="spon-list">
                    <li className="spon-item spon1"><a href="#!" title='후원하기'><span>후원하기</span><i className="fa fa-angle-right"></i></a></li>
                    <li className="spon-item spon2"><a href="#!" title='정기후원'><img src="./images/icon_spon1.png" alt="spon" /><span>정기후원</span></a></li>
                    <li className="spon-item spon3"><a href="#!" title='일시후원'><img src="./images/icon_spon2.png" alt="spon" /><span>일시후원</span></a></li>
                    <li className="spon-item spon4"><a href="#!" title='해외결연후원'><img src="./images/icon_spon3.png" alt="spon" /><span>해외결연후원</span></a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1Component;