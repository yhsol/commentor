import React, { useState } from "react";

function InputForm() {
  const [value, setValue] = useState("");
  const [add, setAdd] = useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">등록</button>
      <div>{add}</div>
    </form>
  );
}

export default InputForm;
