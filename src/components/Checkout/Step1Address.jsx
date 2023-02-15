import { v4 as uuidv4 } from "uuid";
import InputField from "./InputField";

// 使用named export 給 step1/step2/step3 共用
export function FormSection({ dataPhase, formTitle, children }) {
  return (
    <form className="col col-12" data-phase={dataPhase}>
      <h3 className="form-title">{formTitle}</h3>
      <section className="form-body col col-12">{children}</section>
    </form>
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

  // const [inputValue, setInputValue] = useState("");

  // const onChange = (event) => {
  //   setInputValue(event.target.value);
  // };


  let handleCityChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="form-container col col-12">
      <FormSection dataPhase="address" formTitle={"寄件資訊"}>
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <select name="selectedTitle">
                <option value="mr">先生</option>
                <option value="ms">女士</option>
                <option value="mx">不限</option>
              </select>
            </div>
          </div>
          <div class="input-group input-w-lg-4 input-w-sm-s2">
            <InputField label="姓名" type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className="col col-12">
          <div class="input-group input-w-lg-3 input-w-sm-full">
            <InputField label="電話" type="tel" placeholder="請輸入行動電話" />
          </div>
          <div class="input-group input-w-lg-3 input-w-sm-full">
            <InputField
              label="Email"
              type="email"
              placeholder="請輸入電子郵件"
              className="input-group input-w-lg-3 input-w-sm-full"
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <div className="input-label">縣市 </div>
            <div className="select-container">
              <select onChange={handleCityChange} required>
                <option value="">請選擇縣市</option>
                {cities.map((city) => (
                  <option key={uuidv4()} value={city.value}>
                    {city.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <InputField label="地址" type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </FormSection>
    </section>
  );
}

export default Step1Address;
