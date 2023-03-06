function InputField({ value, label, name, placeholder, type, onChange }) {
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
      />
    </>
  );
}

export default InputField;
