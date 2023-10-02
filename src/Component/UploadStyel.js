import React, { useState } from "react";
import "./MyComponent.css";
import axios from "axios";

const Uploadsytle = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [isLiClicked, setIsLiClicked] = useState(true);
  const [file, setFile] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleChangeFile = (event) => {
    setFile(event.target.files);
    setSelectedVideo(event.target.files[0]);
  };

  function handleDivClick() {
    setIsClicked(!isClicked);
  }
  function handleLiClick() {
    setIsLiClicked(!isLiClicked);
  }

  function Send() {
    console.log("send");
    const fd = new FormData();
    Object.values(file).forEach((file) => fd.append("file", file));
    fd.append("name", file.name);

    axios
      .post("/videos", fd, {
        headers: {
          "Content-Type": `multipart/form-data; `,
        },
        baseURL: "http://10.110.1.108:8080/",
      })
      .then((Response) => {
        Response.blob();
      })
      .then((blob) => {
        let fileName = "VideoImp";
        const element = document.createElement("a");
        element.href = URL.createObjectURL(blob);
        element.download = fileName;
        document.body.appendChild(element); // FireFox
        element.click();
      })
      .catch((error) => {
        console.log("오류발생");
      });
  }

  const liStyle = {
    width: "100%",
    height: 30,
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 55,
    paddingRight: 79,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "inline-flex",
    color: "#999999",
    fontSize: 12,
    backgroundColor: "#3D3E42",
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#F7F9FA",
      }}
    >
      <div
        style={{
          width: 1440,
          height: 814.95,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#2F3033",
        }}
      >
        <div
          style={{
            width: 190,
            height: 658.95,
            left: 0,
            top: 68,
            position: "absolute",
          }}
        >
          <div
            style={{
              height: 244,
              left: 0,
              top: 0,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            {/* 눌렀을 때 li펼치기 */}

            <div
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 22,
                paddingBottom: 21.39,
                paddingLeft: 55,
                paddingRight: 79,
                backgroundImage: "url(img/Link.png)",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
                backgroundColor: isClicked ? "#2F3033" : "#3D3E42",
              }}
              onClick={handleDivClick}
            ></div>

            <div
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 10,
                paddingBottom: 0,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: isClicked ? "none" : "inline-flex",
                backgroundColor: "#3D3E42",
              }}
            >
              {/* li 요소 */}
              <div style={liStyle}>Dishbaord</div>
              <div style={liStyle}>파일관리</div>
              <div style={liStyle}>잔행강좌공지</div>
              <div
                style={{
                  width: "100%",
                  height: 30,
                  paddingTop: 5,
                  paddingBottom: 0,
                  paddingLeft: 55,
                  paddingRight: 79,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                  color: "#999999",
                  fontSize: 12,
                  background: isLiClicked ? "#3D3E42" : "#044595",
                }}
                onClick={handleLiClick}
              >
                진행강좌 업데이트
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 22,
                paddingBottom: 21.39,
                paddingLeft: 55,
                paddingRight: 79,
                backgroundImage: "url(img/Link2.png)",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 22,
                paddingBottom: 21.39,
                paddingLeft: 55,
                paddingRight: 79,
                backgroundImage: "url(img/li3.png)",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 22,
                paddingBottom: 21.39,
                paddingLeft: 55,
                paddingRight: 79,
                backgroundImage: "url(img/Link4.png)",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            ></div>
          </div>
          {/* 여기까지 li */}
          <div
            style={{
              height: 103.95,
              paddingTop: 20,
              paddingBottom: 24,
              paddingLeft: 12,
              paddingRight: 12,
              left: 10,
              top: 388,
              position: "absolute",
              background: "#53555C",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 11.99,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 15.4,
                paddingRight: 89,
                opacity: 0.8,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "NanumGothic",
                  fontWeight: "400",
                  lineHeight: 0.4,
                  wordWrap: "break-word",
                }}
              >
                문의 안내
              </div>
            </div>
            <div
              style={{
                width: 146,
                height: 72.56,
                position: "relative",
                backgroundImage: "url(img/div.itl_desc.png)",
              }}
            ></div>
          </div>
          <div
            style={{
              height: 97,
              left: 0,
              top: 546.95,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 1,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 48,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img style={{ width: 170, height: 48 }} src="img/image.php.png" />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 48,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                style={{ width: 170, height: 48 }}
                src="img/imageApp.php.png"
              />
            </div>
          </div>
        </div>
        {/* 왼쪽메뉴 끝 */}
        <div
          style={{
            paddingTop: 32,
            paddingBottom: 462,
            paddingLeft: 40,
            paddingRight: 40,
            left: 190,
            top: 68,
            position: "absolute",
            background: "#F7F9FA",
            flexDirection: "column",
            justifyContent: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 20,
              display: "flex",
            }}
          >
            {/* 파일전송 */}
            <div
              class="upload-box"
              style={{ visibility: isLiClicked ? "hidden" : "visible" }}
            >
              <div id="drop-file" class="drag-file">
                <img
                  src="https://img.icons8.com/pastel-glyph/2x/image-file.png"
                  alt="파일 아이콘"
                  class="image"
                />
                <p class="message">첨부파일을 마우스로 끌어 놓으세요.</p>
              </div>
              {selectedVideo && (
                <video width="320" height="240" controls>
                  <source
                    src={URL.createObjectURL(selectedVideo)}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
              {/* 전송 */}
              <div>
                <label class="file-label" htmlFor="chooseFile">
                  Choose File
                </label>
                <input
                  class="file"
                  accept="video/*"
                  id="chooseFile"
                  type="file"
                  multiple="multiple"
                  onChange={handleChangeFile}
                />
              </div>
              <label class="file-label" htmlFor="sendFile">
                send
              </label>
              <button id="sendFile" onClick={() => Send()} />
            </div>
            <div
              style={{
                paddingLeft: 560.5,
                paddingRight: 555.5,
                display: "flex",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            paddingTop: 28,
            paddingLeft: 12,
            paddingRight: 1232.11,
            left: 0,
            top: 726.95,
            position: "absolute",
            backgroundImage: "url(https://via.placeholder.com/1440x88)",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                paddingTop: 2,
                paddingBottom: 0.14,
                paddingLeft: 12,
                paddingRight: 14,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 32.89,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "#999999",
                  fontSize: 12,
                  fontFamily: "NanumGothic",
                  fontWeight: "400",
                  lineHeight: 17.14,
                  wordWrap: "break-word",
                }}
              ></div>
              <div
                style={{
                  color: "#999999",
                  fontSize: 12,
                  fontFamily: "NanumGothic",
                  fontWeight: "400",
                  lineHeight: 17.14,
                  wordWrap: "break-word",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          left: 0,
          top: 0,
          position: "absolute",
          background: "#044595",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div style={{ width: 1440, height: 68, position: "relative" }}>
          <div
            style={{
              width: 280,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#044595",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <img style={{ width: 280, height: 68 }} src="img/kangnam.png" />
          </div>
          <div
            style={{
              width: 60,
              paddingTop: 7,
              paddingBottom: 7,
              paddingLeft: 13.1,
              paddingRight: 12.9,
              left: 1360,
              top: 18,
              position: "absolute",
              background: "#37ABF1",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 12,
                fontFamily: "NanumGothic",
                fontWeight: "400",
                lineHeight: 2.14,
                wordWrap: "break-word",
              }}
            >
              로그아웃
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Uploadsytle;
