import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { notification } from "antd";
import * as Yup from "yup";

import "./login.scss";
import axiosClient from "../../api/axiosClient";
import TextField from "../../components/TextField";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string()
      .email("Email sai định dạng")
      .required("Không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu chứa ít nhất 6 ký tự")
      .required("Không được để trống"),
  });
  const handleSubmit = (values) => {
    axiosClient
      .post("login", values)
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
          description: "Login successfully",
        });
        navigate("/");
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <div className="login">
      <h1>đăng nhập tài khoản</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => (
          <>
            <Form className="login-form">
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
              <button type="submit">đăng nhập</button>
            </Form>
            <span>
              bạn chưa có tài khoản. đăng ký <Link to="/register">tại đây</Link>
            </span>
          </>
        )}
      </Formik>
    </div>
  );
}

export default Login;
