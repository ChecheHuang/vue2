export const validateName = (rule, value, callback) => {
  const regex = /^[a-zA-Z0-9]{4,10}$/;
  if (value === "") {
    callback(new Error("請輸入用戶名"));
  } else if (!regex.test(value)) {
    callback(new Error("請輸入4~10位用戶名"));
  }
};

export const validatePassword = (rule, value, callback) => {
//   const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/;
    const regex = /^[a-zA-Z0-9]{6,12}$/;

  if (value === "") {
    callback(new Error("請輸入密碼"));
  } else if (!regex.test(value)) {
    callback(
      new Error("請輸入6~12位需要包含大小寫英文字和數字以及特殊符號密碼")
    );
  }
};
