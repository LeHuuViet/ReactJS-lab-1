
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  export const validateEmail = (email: string) => {
      if (!email) {
        return 'Vui lòng nhập địa chỉ email'
      } else if (!email.match(mailFormat)) {
        return 'Địa chỉ email không hợp lệ'
      } else {
        return ''
      }
    }
  
  export const validatePassword = (password: string) => {
      if (!password) {
        return 'Vui lòng nhập mật khẩu'
      } else if (password.length < 4) {
          return 'Mật khẩu tối thiểu 4 ký tự'
      } else {
        return ''
      }
    }  