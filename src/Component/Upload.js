import axios from "axios";
import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleChangeFile = (event) => {
    setFile(event.target.files);
  };

  function Send() {
    const fd = new FormData();
    Object.values(file).forEach((file) => fd.append("file", file));
    fd.append("name", file.name);

    axios
      .post("/course/upload", fd, {
        headers: {
          "Content-Type": `multipart/form-data; `,
        },
        baseURL: "https://1a0b4116-1f0a-4b40-96c1-ead87954a961.mock.pstmn.io",
      })
      .then((Response) => {
        console.log("request body : " + fd.get("file").type);
        console.log("응답확인 : " + Response.data);
      })
      .catch((error) => {
        console.log("오류발생");
      });
  }

  // function Down(res) {
  //   const url = window.URL.createObjectURL(
  //     new Blob([res.data], { type: `${res.headers["content-type"]}` })
  //   );
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "file";
  //   document.body.appendChild(a);
  //   a.click();
  //   a.remove();
  // }

  return (
    <div>
      FileData
      <div>
        fileData :
        <input
          type="file"
          id="file"
          onChange={handleChangeFile}
          multiple="multiple"
        ></input>
      </div>
      <div>
        <button onClick={() => Send()}>send</button>
      </div>
      <div>
        <button>down</button>
      </div>
    </div>
  );
};
export default Upload;
