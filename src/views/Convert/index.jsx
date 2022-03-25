import { useState, useCallback } from "react";
import "./index.css";
import { ConvertApi } from "../../utils/requests";
import JSZip from "jszip";

function Convert() {
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const [disable, setDisable] = useState(false);
  // 上传文件
  const upload = useCallback(async function (files) {
    let finished = 0;
    let results = [];
    const getPromise = function (idx) {
      return new Promise((resolve, reject) => {
        let form = new FormData();
        form.append("file", files[idx]);
        ConvertApi.upload(form)
          .then((res) => {
            finished++;
            setProgress((finished / files.length).toFixed(4) * 100);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };

    let begin = Promise.resolve();
    return files
      .reduce((pre, item, index) => {
        return pre
          .then(() => getPromise(index))
          .then((res) => {
            results.push(res);
          });
      }, begin)
      .then(() => results);
  }, []);

  // 切换文件
  const changeFile = useCallback(function (e) {
    let files = Array.prototype.slice.call(e.target.files);
    setFiles(files);
  }, []);


  // 上传文件并压缩
  const uploadFile = useCallback(function () {
    if (files.length === 0) return;
    setDisable(true);
    let names = files.map((item) => item.name.split(".")[0] + ".pdf");
    let results = upload(files);
    results.then((pdfs) => {
      let zip = new JSZip();
      for (let i = 0; i < pdfs.length; i++) {
        zip.file(names[i], pdfs[i]);
      }
      zip.generateAsync({ type: "blob" }).then((content) => {
        let a = document.createElement("a");
        a.download = "pdfs.zip";
        a.href = window.URL.createObjectURL(content);
        a.click();
        setDisable(false);
      });
    });
  }, []);

  return (
    <div className="convert-main flex center-center">
      <div className="convert-panel flex col around-center">
        <h1>Markdown-to-PDF</h1>
        <input onChange={changeFile} type="file" name="" multiple id="" />
        <div>进度：{progress}%</div>
        <button onClick={uploadFile} disabled={disable}>
          批量下载
        </button>
      </div>
    </div>
  );
}

export default Convert;
