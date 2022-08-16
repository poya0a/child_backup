import React from 'react';

const HeaderComponent = () => {
  return (
    <header id="header">
      <div className="sub-bg"></div>
      <div className="container">
        <div className="gap">
          <div className="wrap">

            <div className="logo-box">
              <a href=".index.html" title='HOME'>
                <img src="./images/logo.png" alt="logo" className='logo-color'/>
                <img src="./images/logo_active.png" alt="logo" className='logo-white'/>
              </a>
            </div>

            <div className="menu-box">

              <div className="main-menu-mobile">
                <a href="#!" className='mobile-btn'>
                  <span>
                    <i className='line line1'></i>
                    <i className='line line2'></i>
                    <i className='line line3'></i>
                  </span>
                </a>
              </div>
  
              <div className="inner-top">
                <aside id="aside">
                  <ul className='user-menu-list'>
                    <li><a href="#!" title='기부금 영수증' className='recipt'>기부금 영수증</a></li>
                    <li><a href="#!" title='온라인 상담' className='counsel'>온라인 상담</a></li>
                    <li><a href="#!" title='마이페이지' className='mypage'><img src="./images/icon_mypage.png" alt="mypage" className='icon-gray'/><img src="./images/icon_mypage_active.png" alt="mypage" className='icon-white'/></a></li>
                    <li><a href="#!" title='검색' className='search'><img src="./images/icon_search.png" alt="search" className='icon-gray' /><img src="./images/icon_search_active.png" alt="search" className='icon-white' /></a></li>
                    <li><a href="#!" title='후원하기' className='spon'>후원하기</a></li>
                  </ul>
                </aside>
              </div>
  
              <div className="inner-bottom">
                <nav id="nav">
                  <ul className='main-menu'>
  
                    <li className='menu-list menu1'>
                      <a href="#!" className='main-btn' title='소개'>소개</a>
                      <div className="sub sub1">
                        <div className="sub-gap">

                          <ul>
                            <li>
                              <dl>
                                <dt><a href="#!" title='재단소개'><span>재단소개</span></a></dt>
                                <dd><a href="#!" title='어린이재단은'><span>어린이재단은</span></a></dd>
                                <dd><a href="#!" title='CEO소개'><span>CEO소개</span></a></dd>
                                <dd><a href="#!" title='재단연혁'><span>재단연혁</span></a></dd>
                                <dd><a href="#!" title='CI'><span>CI</span></a></dd>
                                <dd><a href="#!" title='조직도'><span>조직도</span></a></dd>
                                <dd><a href="#!" title='사업기관'><span>사업기관</span></a></dd>
                                <dd><a href="#!" title='스타 서포터즈'><span>스타 서포터즈</span></a></dd>
                                <dd><a href="#!" title='전국후원회'><span>전국후원회</span></a></dd>
                                <dd><a href="#!" title='찾아오시는 길'><span>찾아오시는 길</span></a></dd>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='경영정신'>경영정신<span></span></a></dt>
                                <dd><a href="#!" title='미션, 핵심가치, 비전'><span>미션, 핵심가치, 비전</span></a></dd>
                                <dd><a href="#!" title='아동보호정책'><span>아동보호정책</span></a></dd>
                                <dd><a href="#!" title='강령/윤리 선언'><span>강령/윤리 선언</span></a></dd>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='투명경영'><span>투명경영</span></a></dt>
                                <dd><a href="#!" title='투명한 재단살림'><span>투명한 재단살림</span></a></dd>
                                <dd><a href="#!" title='예산관리절차'><span>예산관리절차</span></a></dd>
                                <dd><a href="#!" title='자주 묻는 질문'><span>자주 묻는 질문</span></a></dd>
                                <dd><a href="#!" title='공시자료'><span>공시자료</span></a></dd>
                                <dd><a href="#!" title='위기관리'><span>위기관리</span></a></dd>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='아동복지연구소'><span>아동복지연구소</span></a></dt>
                                <dd><a href="#!" title='연구소 소개'><span>연구소 소개</span></a></dd>
                                <dd><a href="#!" title='연구소 사업내용'><span>연구소 사업</span></a></dd>
                                <dd><a href="#!" title='연구소 자료실'><span>연구소 자료</span></a></dd>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='재단뉴스'><span>재단뉴스</span></a></dt>
                                <dd><a href="#!" title='공지사항'><span>공지사항</span></a></dd>
                                <dd><a href="#!" title='언론보도'><span>언론보도</span></a></dd>
                                <dd><a href="#!" title='사업소식'><span>사업소식</span></a></dd>
                                <dd><a href="#!" title='연구소 소식'><span>연구소 소식</span></a></dd>
                                <dd><a href="#!" title='후원회 소식'><span>후원회 소식</span></a></dd>
                              </dl>
                            </li>
                          </ul>

                          <div className="menu-bottom">
                            <a href="#!" className='bottom-btn'>
                              <div className="bottom-img-box">
                                <img src="./images/bottom01.jpg" alt="bottom" />
                              </div>
                              <div className="bottom-text">
                                <strong className='tit'>인재채용</strong>
                                <p className='txt'>아이들의 미래를 변화시키는 일에<br />함께할 인재를 기다립니다.</p>
                              </div>
                            </a>
                          </div>

                        </div>
                      </div>
                    </li>
  
                    <li className='menu-list menu2'>
                      <a href="#!" className='main-btn' title='사업'>사업</a>
                      <div className="sub sub2">
                        <div className="sub-gap">

                          <ul>
                            <li>
                              <dl>
                                <dt><a href="#!" title='옹호활동'><span>옹호활동</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='국내사업'><span>국내사업</span></a></dt>
                                <dd><a href="#!" title='아동지원'><span>아동지원</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='기본생활보장'><span>기본생활보장</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='아동보호'><span>아동보호</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='인재양성'><span>인재양성</span></a></dd>
                                <dd><a href="#!" title='아동교육'><span>아동교육</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='미래세대교육'><span>미래세대교육</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='감사편지쓰기'><span>감사편지쓰기</span></a></dd>
                                <dd><a href="#!" title='임팩트'><span>임팩트</span></a></dd>
                                <dd><a href="#!" title='공모사업'><span>공모사업</span></a></dd>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='해외사업'>해외사업<span></span></a></dt>
                                <dd><a href="#!" title='옹호활동'><span>옹호활동</span></a></dd>
                                <dd><a href="#!" title='아동교육'><span>아동교육</span></a></dd>
                                <dd><a href="#!" title='아동보호'><span>아동보호</span></a></dd>
                                <dd><a href="#!" title='아동지원'><span>아동지원</span></a></dd>
                                <dd><a href="#!" title='아동지원'><span>아동지원</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='보건의료'><span>보건의료</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='식수위생'><span>식수위생</span></a></dd>
                                <dd><a href="#!" className='sub-sub-btn' title='자립지원'><span>자립지원</span></a></dd>
                                <dd><a href="#!" title='재난위험경감'><span>재난위험경감</span></a></dd>
                                <dd><a href="#!" title='인도적지원'><span>인도적지원</span></a></dd>
                                <dd><a href="#!" title='해외사업국가안내'><span>해외사업국가안내</span></a></dd>
                              </dl>
                            </li>
                          </ul>

                          <div className="menu-bottom">
                            <a href="#!" className='bottom-btn'>
                              <div className="bottom-img-box">
                                <img src="./images/bottom02.jpg" alt="bottom" />
                              </div>
                              <div className="bottom-text">
                                <strong className='tit'>Chance to Change</strong>
                                <p className='txt'>기회를 더하면<br />변화가 시작됩니다!</p>
                              </div>
                            </a>
                          </div>

                        </div>
                      </div>
                    </li>
  
                    <li className='menu-list menu3'>
                      <a href="#!" className='main-btn' title='후원'>후원</a>
                      <div className="sub sub3">
                        <div className="sub-gap">
                          <ul>
                            <li>
                              <dl>
                                <dt><a href="#!" title='정기후원'><span>정기후원</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='일시후원'><span>일시후원</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='결연후원'><span>결연후원</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='기업후원'><span>기업후원</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='그린노블클럽'><span>그린노블클럽</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='유산기부'><span>유산기부</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='명예의 전당'><span>명예의 전당</span></a></dt>
                              </dl>
                            </li>
                          </ul>
  
                          <div className="menu-bottom">
                            <a href="#!" className='bottom-btm-btn'>
                              <img src="./images/bottom03_btm.png" alt="bottom" />
                            </a>

                            <a href="#!" className='bottom-btn'>
                              <div className="bottom-img-box">
                                <img src="./images/bottom03.jpg" alt="bottom" />
                              </div>
                              <div className="bottom-text">
                                <strong className='tit'>초록우산 팩트체크</strong>
                                <p className='txt'>후원자님들이 자주 묻는 질문을<br />정리했습니다.</p>
                              </div>
                            </a>
                          </div>

                        </div>
                      </div>
                    </li>
  
                    <li className='menu-list menu4'>
                      <a href="#!" className='main-btn' title='캠페인'>캠페인</a>
                      <div className="sub sub4">
                        <div className="sub-gap">
                          <ul>
                            <li>
                              <dl>
                                <dt><a href="#!" title='캠페인'><span>캠페인</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='캠페인 후기'><span>캠페인 후기</span></a></dt>
                              </dl>
                            </li>
                          </ul>

                          <div className="menu-bottom">
                            <a href="#!" className='bottom-btm-btn'>
                              <img src="./images/bottom04_btm.png" alt="bottom" />
                            </a>

                            <a href="#!" className='bottom-btn'>
                              <div className="bottom-img-box">
                                <img src="./images/bottom04.jpg" alt="bottom" />
                              </div>
                              <div className="bottom-text">
                                <strong className='tit'>잘 자랐습니다. 고맙습니다!</strong>
                                <p className='txt'>후원자님 덕분에 잘 자란 아이들이<br />감사의 인사를 전합니다.</p>
                              </div>
                            </a>
                          </div>
  
                        </div>
                      </div>
                    </li>
  
                    <li className='menu-list menu5'>
                      <a href="#!" className='main-btn' title='소식'>소식</a>
                      <div className="sub sub5">
                        <div className="sub-gap">

                          <ul>
                            <li>
                              <dl>
                                <dt><a href="#!" title='스토리'><span>스토리</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='소식지'><span>소식지</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='보고서'><span>보고서</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='동영상'><span>동영상</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='뉴스레터'><span>뉴스레터</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='자료실'><span>자료실</span></a></dt>
                                <dd><a href="#!" title='일반자료실'><span>일반자료실</span></a></dd>
                                <dd><a href="#!" title='발간물'><span>발간물</span></a></dd>
                              </dl>
                            </li>
                          </ul>

                          <div className="menu-bottom">
                            <a href="#!" className='bottom-btm-btn'>
                              <img src="./images/bottom05_btm.jpg" alt="bottom" />
                            </a>

                            <a href="#!" className='bottom-btn'>
                              <div className="bottom-img-box">
                                <img src="./images/bottom05.jpg" alt="bottom" />
                              </div>
                              <div className="bottom-text">
                                <strong className='tit'>소식</strong>
                                <p className='txt'>후원자와 후원아동이 만들어가는<br />아름다운 이야기를 확인해보세요.</p>
                              </div>
                            </a>
                          </div>

                        </div>
                      </div>
                    </li>
  
                    <li className='menu-list menu6'>
                      <a href="#!" className='main-btn' title='참여'>참여</a>
                      <div className="sub sub6">
                        <div className="sub-gap">

                          <ul>
                            <li>
                              <dl>
                                <dt><a href="#!" title='자원봉사'><span>자원봉사</span></a></dt>
                                <dd><a href="#!" title='봉사활동 안내'><span>봉사활동 안내</span></a></dd>
                                <dd><a href="#!" title='모집공고'><span>모집공고</span></a></dd>
                                <dd><a href="#!" title='자원봉사자 등록'><span>자원봉사자 등록</span></a></dd>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='후원자 모임'><span>후원자 모임</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='행사소식'><span>행사소식</span></a></dt>
                              </dl>
                            </li>
                            <li>
                              <dl>
                                <dt><a href="#!" title='공모사업'><span>공모사업</span></a></dt>
                              </dl>
                            </li>
                          </ul>
  
                          <div className="menu-bottom">
                            <a href="#!" className='bottom-btm-btn'>
                              <img src="./images/bottom06_btm.jpg" alt="bottom" />
                            </a>

                            <a href="#!" className='bottom-btn'>
                              <div className="bottom-img-box">
                                <img src="./images/bottom06.jpg" alt="bottom" />
                              </div>
                              <div className="bottom-text">
                                <strong className='tit'>참여</strong>
                                <p className='txt'>나눔과 참여로<br />더 큰 행복을 만들어갑니다.</p>
                              </div>
                            </a>
                          </div>

                        </div>
                      </div>
                    </li>
  
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;