import React, { useCallback, useState } from "react";
import "./MyComponent.css";

const SubPageSytel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  return (
    // <div id="root">
    //   <h2 class="title">File Upload</h2>
    //   <hr />
    //   <div class="contents">
    //     <div class="upload-box">
    //       <div id="drop-file" class="drag-file">
    //         <img
    //           src="https://img.icons8.com/pastel-glyph/2x/image-file.png"
    //           alt="파일 아이콘"
    //           class="image"
    //         />
    //         <p class="message">Drag files to upload</p>
    //       </div>
    //       <label class="file-label" htmlFor="chooseFile">
    //         Choose File
    //       </label>
    //       <input
    //         class="file"
    //         id="chooseFile"
    //         type="file"
    //         multiple
    //         onChange={previewFile}
    //       />
    //     </div>
    //   </div>
    //   <div id="files"></div>
    // </div>
    <div>
      <div>
        <label class="file-label" htmlFor="chooseFile">
          Choose File
        </label>
        <input
          class="file"
          accept="video/*"
          id="chooseFile"
          type="file"
          multiple
          onChange={handleVideoChange}
        />
        {selectedVideo && (
          <video width="320" height="240" controls>
            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default SubPageSytel;
