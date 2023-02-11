function InputField({ value, label, name, placeholder, type, onChange }) {
  return (
    <div className="input-group">
      {/* 待改寫CSS */}
      <label>
        {label}
        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          // 目前沒有用到onChange 事件取值?
          // The onchange event occurs when the value of an HTML element is changed.
        />
      </label>
    </div>
  );
}

export default InputField;
