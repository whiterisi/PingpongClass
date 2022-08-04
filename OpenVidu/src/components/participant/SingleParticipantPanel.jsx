import React from "react";

import Mic from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import Videocam from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";

import "./SingleParticipantPanel.css";

// name: 오석호
// date: 2022/07/28
// desc: 한 명의 패널을 담당하는 컴포넌트
// Todo: 사용자의 이름과 같은 상태값들을 한명씩 출력해주는 컴포넌트
const SingleParticipantPanel = (props) => {
  const { user } = props;

  const onClickPointUp = () => {
    // 누가 보냈는지는 중요하지 않다
    user.getStreamManager().stream.session.signal({
      to: [user],
      type: "point-up",
    });
  };

  const onClickPointDown = () => {
    // 누가 보냈는지는 중요하지 않다
    user.getStreamManager().stream.session.signal({
      to: [user],
      type: "point-down",
    });
  };

  return (
    <div id="oneParticipant">
      <div className="right_side">{user.nickname}</div>
      <div className="left_side">
        <button onClick={onClickPointUp}>▲</button>
        <button onClick={onClickPointDown}>▼</button>
        <span>상점 : {user.point}</span>
        <span>출석 : {user.attendenceTime}</span>
        {user.videoActive ? <Videocam /> : <VideocamOff color="secondary" />}
        {user.audioActive ? <Mic /> : <MicOff color="secondary" />}
      </div>
    </div>
  );
};

export default SingleParticipantPanel;
