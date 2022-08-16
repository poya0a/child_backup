import React from 'react';

const PopVideoComponent = () => {
  return (
    <div id='popVideo'>
      <div className="video-wrap">
        <button className='video-close-btn'></button>
        <ul className="video-list">
          
          <li className="video-item video1">
            <iframe id='sec7Video1' className='sec7-video' src="https://www.youtube.com/embed/InXmVYzAm9Q?" title="기후환경을 지키는 엉뚱한 상상" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>

          <li className="video-item video2">
            <iframe id='sec7Video2' className='sec7-video' src="https://www.youtube.com/embed/OIc1XXPCRNs?" title="# 100명의 아이들이 한목소리로 외칩니다. 지구도 한 명의 아이처럼 지켜주세요" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>

          <li className="video-item video3">
            <iframe id='sec7Video3' className='sec7-video' src="https://www.youtube.com/embed/Da5Z8tP6C5I?" title="초록우산 기후변화체감ing 한파" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>

          <li className="video-item video4">
            <iframe id='sec7Video4' className='sec7-video' src="https://www.youtube.com/embed/KK9Oj3BpnBs?" title="기후변화체감 - 폭염편 TVC" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>

          <li className="video-item video5">
            <iframe id='sec7Video5' className='sec7-video' src="https://www.youtube.com/embed/bxKjvgPLv5g?" title="초록우산 어린이재단 브랜드필름" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>

          <li className="video-item video6">
            <iframe id='sec7Video6' className='sec7-video' src="https://www.youtube.com/embed/VtJSM8uqUNw?" title="꿈을 잇는 초록우산 TVC (30s)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default PopVideoComponent;