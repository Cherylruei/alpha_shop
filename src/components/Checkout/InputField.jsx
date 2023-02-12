function InputField({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  className,
}) {
  return (
    <>
      {/* 待改寫CSS */}
      <div className="input-label">{label}</div>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        // 目前沒有用到onChange 事件取值?
        // The onchange event occurs when the value of an HTML element is changed.
      />
    </>
  );
}

export default InputField;
