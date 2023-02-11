import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputField from "./InputField";

// 使用named export 給 step1/step2/step3 共用
export function FormSection({ formTitle, children }) {
  return (
    <>
      <h3>{formTitle}</h3>
      <section>{children}</section>
    </>
  );
}

function Step1Address() {
  const cities = [
    { text: "基隆市", value: "KLU" },
    { text: "新北市", value: "TPH" },
    { text: "臺北市", value: "TPE" },
    { text: "桃園市", value: "TYC" },
    { text: "新竹縣", value: "HSH" },
    { text: "新竹市", value: "HSC" },
    { text: "苗栗市", value: "MAC" },
    { text: "苗栗縣", value: "MAL" },
    { text: "臺中市", value: "TXG" },
    { text: "彰化縣", value: "CWH" },
    { text: "彰化市", value: "CWS" },
    { text: "南投市", value: "NTC" },
    { text: "南投縣", value: "NTO" },
    { text: "雲林縣", value: "YLH" },
    { text: "嘉義縣", value: "CHY" },
    { text: "嘉義市", value: "CYI" },
    { text: "臺南市", value: "TNN" },
    { text: "高雄市", value: "KHH" },
    { text: "屏東縣", value: "IUH" },
    { text: "屏東市", value: "PTS" },
    { text: "宜蘭縣", value: "ILN" },
    { text: "宜蘭市", value: "ILC" },
    { text: "花蓮縣", value: "HWA" },
    { text: "花蓮市", value: "HWC" },
    { text: "臺東市", value: "TTC" },
    { text: "臺東縣", value: "TTT" },
    { text: "澎湖縣", value: "PEH" },
    { text: "金門縣", value: "KMN" },
    { text: "連江縣", value: "LNN" },
  ];

  const [city, setCity] = useState("請選擇縣市");
  // const [inputValue, setInputValue] = useState("");

  // const onChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  // 問題點!!?? 為什麼不需要使用useState 去取得input 變化的值，依然可以在取得打出來的值

  let handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <section>
      <FormSection formTitle={"寄件資訊"}>
        <div className="inputGroup">
          {/* 待改寫CSS */}
          <label>
            稱謂
            <select name="selectedTitle">
              <option value="mr">先生</option>
              <option value="ms">女士</option>
              <option value="mx">不限</option>
            </select>
          </label>
        </div>
        <InputField label="姓名" type="text" placeholder="請輸入姓名" />
        <InputField label="電話" type="tel" placeholder="請輸入行動電話" />
        <InputField label="Email" type="email" placeholder="請輸入電子郵件" />
        <div className="inputGroup">
          <label>
            縣市
            <select onChange={handleCityChange}>
              <option value="">請選擇縣市</option>
              {cities.map((city) => (
                <option key={uuidv4()} value={city.value}>
                  {city.text}
                </option>
              ))}
            </select>
          </label>
        </div>
        <InputField label="地址" type="text" placeholder="請請輸入地址" />
      </FormSection>
    </section>
  );
}

export default Step1Address;
