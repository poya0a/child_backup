import React, { useState } from 'react';

const Section8Component = ({noticeContent, bizContent, pressContent, voluntContent, institContent}) => {

  const [tabBtn, setBtn] = useState({
    btnVal1: 'on',
    btnVal2: '',
    btnVal3: '',
    btnVal4: '',
    btnVal5: '',
  });

  const clickNotice=(e)=>{
    e.preventDefault();
    setBtn({...tabBtn, btnVal1: 'on', btnVal2: '', btnVal3: '', btnVal4: '', btnVal5: ''});
  }

  const clickBiz=(e)=>{
    e.preventDefault();
    setBtn({...tabBtn, btnVal1: '', btnVal2: 'on', btnVal3: '', btnVal4: '', btnVal5: ''});
  }

  const clickPress=(e)=>{
    e.preventDefault();
    setBtn({...tabBtn, btnVal1: '', btnVal2: '', btnVal3: 'on', btnVal4: '', btnVal5: ''});
  }

  const clickVolunt=(e)=>{
    e.preventDefault();
    setBtn({...tabBtn, btnVal1: '', btnVal2: '', btnVal3: '', btnVal4: 'on', btnVal5: ''});
  }

  const clickInstit=(e)=>{
    e.preventDefault();
    setBtn({...tabBtn, btnVal1: '', btnVal2: '', btnVal3: '', btnVal4: '', btnVal5: 'on'});
  }

  const noticeTab = noticeContent.map((item)=>{
    return(
      <li key={item.index} className="news-item">
        <div className="txt-box">
          <p className='tit'>{item.titVal}</p>
          <i className='date'>{item.dateVal}</i>
        </div>
        <a href="#!" className='news-more-btn' title='자세히 보기'>자세히 보기</a>
      </li>
    )
  });

  const bizTab = bizContent.map((item)=>{
    return(
      <li key={item.index} className="news-item">
        <div className="txt-box">
          <p className='tit'>{item.titVal}</p>
          <i className='date'>{item.dateVal}</i>
        </div>
        <a href="#!" className='news-more-btn' title='자세히 보기'>자세히 보기</a>
      </li>
    )
  });

  const pressTab = pressContent.map((item)=>{
    return(
      <li key={item.index} className="news-item">
        <div className="txt-box">
          <p className='tit'>{item.titVal}</p>
          <i className='date'>{item.dateVal}</i>
        </div>
        <a href="#!" className='news-more-btn' title='자세히 보기'>자세히 보기</a>
      </li>
    )
  });

  const voluntTab = voluntContent.map((item)=>{
    return(
      <li key={item.index} className="news-item">
        <div className="txt-box">
          <p className='tit'>{item.titVal}</p>
          <i className='date'>{item.dateVal}</i>
        </div>
        <a href="#!" className='news-more-btn' title='자세히 보기'>자세히 보기</a>
      </li>
    )
  });

  const institTab = institContent.map((item)=>{
    return(
      <li key={item.index} className="news-item">
        <div className="txt-box">
          <p className='tit'>{item.titVal}</p>
          <i className='date'>{item.dateVal}</i>
        </div>
        <a href="#!" className='news-more-btn' title='자세히 보기'>자세히 보기</a>
      </li>
    )
  });

  return (
    <section id="section8">
      <div className="container">
        <div className="gap">
          <div className="wrap">

            <div className="title-wrap  title-ani">
              <h2>다양한 소식을 만나보세요.</h2>
              <a href="#!" title='더보기'>더보기<img src="./images/icon_more.png" alt="btn" /></a>
            </div>

            <div className="tab-btn-wrap">
              <div className="tab-btn-list">
                <button id='tabBtn1' className={`${tabBtn.btnVal1}`} onClick={clickNotice}>공지사항</button>
                <button id='tabBtn2' className={`${tabBtn.btnVal2}`} onClick={clickBiz}>사업소식</button>
                <button id='tabBtn3' className={`${tabBtn.btnVal3}`} onClick={clickPress}>언론보도</button>
                <button id='tabBtn4' className={`${tabBtn.btnVal4}`} onClick={clickVolunt}>자원봉사</button>
                <button id='tabBtn5' className={`${tabBtn.btnVal5}`} onClick={clickInstit}>연구소 소식</button>
              </div>
            </div>

            <div className="content-wrap">
              <div className="content">
                <ul className="news-list">
                  {tabBtn.btnVal1==='on' ? noticeTab : ''}
                  {tabBtn.btnVal2==='on' ? bizTab : ''}
                  {tabBtn.btnVal3==='on' ? pressTab : ''}
                  {tabBtn.btnVal4==='on' ? voluntTab : ''}
                  {tabBtn.btnVal5==='on' ? institTab : ''}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

Section8Component.defaultProps = {
  noticeContent: [
    {index:1, titVal:`초록우산 어린이재단과 함께하는 '스무살 함께서기' 프로그램 신청 안내`, dateVal:'2022.07.20'},
    {index:2, titVal:`제1차 월례세미나 '아동양육시설에서 성장한 아이들의 애착경험'`, dateVal:'2022.06.17'},
    {index:3, titVal:`제8차 나눔지식네트워크 공동기획포럼 개최 안내`, dateVal:'2022.06.16'},
    {index:4, titVal:`사이버폭력 예방캠페인 '우린 서로 통하는 사이'`, dateVal:'2022.06.13'}
  ],
  bizContent: [
    {index:1, titVal:`재단 - 토스와 플랫폼 서비스 확대 위한 업무협약 체결`, dateVal:'2022.06.29'},
    {index:2, titVal:`롯데케미칼-한국방송공사(KBS)와 사회공헌 협약 진행`, dateVal:'2022.04.19'},
    {index:3, titVal:`아동기본권의 보편적 보장을 위한 협약식 체결`, dateVal:'2022.04.11'},
    {index:4, titVal:`한화토탈에너지스와 함께하는 에코 더하기 그린캠페이너 모집`, dateVal:'2022.04.01'}
  ],
  pressContent: [
    {index:1, titVal:`[보도자료] 초록우산어린이재단-포커스미디어, 캠페인 및 후원금품 전달식 진행`, dateVal:'2022.07.20'},
    {index:2, titVal:`[보도자료] 코리오-토탈에너지스, 초록우산어린이재단 환경 교육 키트 백투더그린 제작 후원금 전달식 개최`, dateVal:'2022.07.18'},
    {index:3, titVal:`[보도자료] 초록우산 어린이재단-아소비교육, 기후변화 취약계층을 위한 후원금 전달식 진행`, dateVal:'2022.07.13'},
    {index:4, titVal:`[보도자료] 토트넘 홋스퍼 글로벌축구개발 코치진, 초록우산어린이재단 인재양성 아동 대상 '코칭 세션' 진행`, dateVal:'2022.07.12'}
  ],
  voluntContent: [
    {index:1, titVal:`[비대면]2022 그린라이터 7기 콘텐츠 제작 및 SNS 홍보`, dateVal:'2022.07.25'},
    {index:2, titVal:`설문지 데이터 입력 봉사자 모집`, dateVal:'2022.07.22'},
    {index:3, titVal:`[영등포종합사회복지관] 영신고등학교 미술거점학교 연계 '미술봉사활동'`, dateVal:'2022.07.21'},
    {index:4, titVal:`[혼합형]카펙발레오 지역아동센터 지원 DIY가구 제작 봉사활동`, dateVal:'2022.07.21'}
  ],
  institContent: [
    {index:1, titVal:`2022 ‘제8차 나눔지식네트워크 공동기획포럼’ 실시`, dateVal:'2022.07.14'},
    {index:2, titVal:`아동복지연구소 2022년 제1차 월례세미나 개최: 아동양육시설에서 성장한 아이들의 애착경험`, dateVal:'2022.07.06'},
    {index:3, titVal:`2022 제21차 아동복지포럼 ‘2022 아동행복지수, 아이들의 행복격차를 좁히다’`, dateVal:'2022.06.28'},
    {index:4, titVal:`2022 어린이재단 연구지원사업 면접심사 실시`, dateVal:'2022.05.30'}
  ]
}
export default Section8Component;