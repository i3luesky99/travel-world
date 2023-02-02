import React, { useState } from "react";

function UserForm() {
  const [userForm, setUserForm] = useState({
    name: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [warning, setWarning] = useState(false);
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const str = "0906624069";
  const handleClear = () => {
    setUserForm({
      name: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChangeInput = (inputName, inputValue) => {
    setUserForm((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(userForm)) {
      if (value === "" && key !== "address") {
        setWarning(true);
        return;
      }
    }
    setWarning(false);
    window.location.replace("/");
  };

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <span className="registerTitle">Thông tin</span>
      <label>Họ và tên</label>
      <input
        value={userForm.name}
        type="text"
        className="registerInput"
        placeholder="Ví dụ: Nguyễn Văn A"
        onChange={(e) => handleChangeInput("name", e.target.value)}
        style={{
          borderColor: userForm.name === "" && warning ? "red" : "black",
        }}
      />
      <label>Số điện thoại</label>
      <input
        value={userForm.phone}
        type="number"
        className="registerInput"
        placeholder="Ví dụ: 090123456"
        onChange={(e) => handleChangeInput("phone", e.target.value)}
        style={{
          borderColor:
            !userForm.phone.match(phoneRegex) && warning ? "red" : "black",
        }}
      />
      <label>Địa chỉ</label>
      <input
        value={userForm.address}
        type="text"
        className="registerInput"
        placeholder="Ví dụ: Đường 1, phường 1, quận 1, Thành Phó Hồ Chí Minh"
        onChange={(e) => handleChangeInput("address", e.target.value)}
      />
      <label>Mật khẩu</label>
      <input
        value={userForm.password}
        type="password"
        className="registerInput"
        placeholder="Nhập mật khẩu..."
        onChange={(e) => handleChangeInput("password", e.target.value)}
        style={{
          borderColor: userForm.password === "" && warning ? "red" : "black",
        }}
      />
      <label>Nhập lại mật khẩu</label>
      <input
        value={userForm.confirmPassword}
        type="password"
        className="registerInput"
        placeholder="Nhập lại mật khẩu..."
        onChange={(e) => handleChangeInput("confirmPassword", e.target.value)}
        style={{
          borderColor:
            userForm.confirmPassword === "" && warning ? "red" : "black",
        }}
      />

      <div className="bottom">
        <button className="btn registerButton" type="submit">
          Tiếp tục
        </button>
        <button className="btn registerLoginButton" onClick={handleClear}>
          Xoá hết
        </button>
      </div>
    </form>
  );
}

export default UserForm;
