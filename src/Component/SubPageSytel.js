import React, { useCallback, useState } from "react";
import "./Test.css";

const SubPageSytel = () => {
  const downloadVideo = () => {
    // 가상의 데이터 또는 API에서 받은 Blob 객체 생성 (예: 영상 데이터)
    const videoData = new Blob(["영상 데이터"], { type: "video/mp4" });

    // Blob 객체를 URL.createObjectURL을 사용하여 다운로드 가능한 URL로 변환
    const videoUrl = URL.createObjectURL(videoData);

    // 가상의 링크 엘리먼트를 생성하여 다운로드 링크 설정
    const a = document.createElement("a");
    a.href = videoUrl;
    a.download = "video.mp4"; // 다운로드될 파일명 설정

    // 링크를 클릭하여 다운로드 시작
    a.click();

    // 다운로드가 완료되면 URL.createObjectURL로 생성된 URL 해제
    URL.revokeObjectURL(videoUrl);
  };
  return (
    <div>
      <button onClick={downloadVideo}>영상 다운로드</button>
    </div>
  );
};

export default SubPageSytel;
