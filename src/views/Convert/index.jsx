import { useState, useCallback,useLayoutEffect } from "react";
import "./index.css";
import { ConvertApi } from "../../utils/requests";
import JSZip from "jszip";

function Convert() {
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const [process,setProcess] = useState(false);
  const [barLen,setBarLen] = useState(0);
  // 选择文件
  const select = useCallback(async function () {
    let fileDOM = document.createElement("input");
    fileDOM.type = "file";
    fileDOM.multiple = true;
    fileDOM.accept = ".md";
    fileDOM.click();
    fileDOM.onchange = function (e) {
      let files = Array.prototype.slice.call(e.target.files);
      setFiles(files);
    };
  });
  // 上传文件
  const upload = useCallback(async function (files) {
    setProcess(true);
    let finished = 0;
    let results = [];
    const getPromise = function (idx) {
      return new Promise((resolve, reject) => {
        let form = new FormData();
        form.append("file", files[idx]);
        ConvertApi.upload(form)
          .then((res) => {
            finished++;
            setProgress((finished / files.length).toFixed(4));
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
  }, [process]);

  // 上传文件并压缩
  const uploadFile = useCallback(function () {
    if (files.length === 0) {
      alert('请选择文件')
      return;
    }
    if(process) {
      alert('正在转换，稍安勿躁~');
      return;
    }
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
        setProcess(false);
      });
    });
  }, [files,process]);


  // 获取进度条长度
  useLayoutEffect(() => {
    let bar = document.querySelector('.convert-progress');
    setBarLen(bar.clientWidth);
  })

  return (
    <div className="convert-main flex center-center">
      <div className="convert-container flex col around-center">
        <h1 className="flex center-center">Markdown-to-PDF</h1>
        <ul className="convert-list">
          {files.map((file) => <li>{file.name} —— {(file.size/1024).toFixed(4)}KB</li>)}
        </ul>
        <div className="convert-option flex between-center">
          <div
            className="convert-btn convert-upload flex center-center"
            onClick={select}
          >
            选择文件
          </div>
          <div className="convert-progress flex center-center" style={{backgroundPositionX: '-'+((1 - progress)) * barLen+'px'}}>转换进度：{progress*100}%</div>
          <div
            className="convert-btn convert-download flex center-center"
            onClick={uploadFile}
          >
            批量转换
          </div>
        </div>
      </div>
    </div>
  );
}

export default Convert;
