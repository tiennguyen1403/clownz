import React from "react";
import { Formik, Form } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import * as Yup from "yup";

import "./register.scss";
import axiosClient from "../../api/axiosClient";
import TextField from "../../components/TextField";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = Yup.object({
    firstName: Yup.string().required("Không được để trống"),
    lastName: Yup.string().required("Không được để trống"),
    email: Yup.string()
      .email("Email sai định dạng")
      .required("Không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu chứa ít nhất 6 ký tự")
      .required("Không được để trống"),
  });
  const handleSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    axiosClient
      .post("register", {
        name: firstName + " " + lastName,
        email,
        password,
        cart: [],
      })
      .then((res) => {
        dispatch({ type: "SET_TOKEN", payload: res.data.accessToken });
        dispatch({ type: "SET_USER_INFO", payload: res.data.user });

        const { id, name, email, cart } = res.data.user;
        localStorage.setItem("accesstoken", res.data.accessToken);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ id, name, email, cart })
        );

        notification.success({
          description: "Register successfully",
        });
        navigate("/");
      })
      .catch((err) => {
        notification.warning({
          description: err.response.data,
        });
      });
  };
  return (
    <div className="register">
      <h1>đăng ký tài khoản</h1>
      <p>Nếu chưa có tài khoản vui lòng đăng ký tại đây</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => (
          <>
            <Form className="register-form">
              <TextField
                placeholder="Nhập Họ"
                label="HỌ"
                name="lastName"
                type="text"
              />
              <TextField
                placeholder="Nhập Tên"
                label="TÊN"
                name="firstName"
                type="text"
              />
              <TextField
                placeholder="Nhập Địa chỉ Email"
                label="EMAIL"
                name="email"
                type="email"
              />
              <TextField
                placeholder="Nhập Mật khẩu"
                label="MẬT KHẨU"
                name="password"
                type="text"
              />
              <button type="submit">tạo tài khoản</button>
            </Form>
            <Link to="/login">đăng nhập</Link>
          </>
        )}
      </Formik>
    </div>
  );
}

export default Register;
