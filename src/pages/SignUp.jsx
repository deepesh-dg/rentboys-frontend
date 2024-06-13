import { useState } from "react";
import TextInput from "../components/TextInput";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section class="min-h-screen flex items-center justify-center">
      <div class="max-w-[600px] mx-auto my-[30px] px-md w-full ">
        <div class="bg-[rgba(0, 0, 0, 0.55)] px-[92px] py-[52px] rounded-[20px] border border-[#303030] backdrop-blur-[30px]">
          <h1 class="login-heading line-effect">Sign Up</h1>        
          <div class="relative z-0 w-full mb-5 group">
            <svg className="absolute left-[20px] top-[0] bottom-[0] my-auto"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2C0 0.9 0.9 0 2 0ZM18 3.38V2H2V3.38L10 7.38L18 3.38ZM18 5.62L10.45 9.38999C10.167 9.53262 9.83305 9.53262 9.55 9.38999L2 5.62V14H18V5.62Z"
                  fill="#FF0000"
                />
              </svg>
              <TextInput
              value={email}
              placeholder={""}
              onChange={setEmail}
              id="floating_email"
              className="ps-[55px] block bg-black border border-[#303030] appearance-none  focus:outline-none focus:ring-0 peer"
            />
              <label for="floating_email" class="ms-[55px]  absolute text-white text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-2/4 rtl:peer-focus:left-auto peer-focus:opacity-30 peer-focus:dark:opacity-30 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email address</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <svg className="absolute left-[20px] top-[0] bottom-[0] my-auto"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2C0 0.9 0.9 0 2 0ZM18 3.38V2H2V3.38L10 7.38L18 3.38ZM18 5.62L10.45 9.38999C10.167 9.53262 9.83305 9.53262 9.55 9.38999L2 5.62V14H18V5.62Z"
                  fill="#FF0000"
                />
              </svg>
              <TextInput
              value={email}
              placeholder={""}
              onChange={setUsername}
              id="floating_username"
              className="ps-[55px] block bg-black border border-[#303030] appearance-none  focus:outline-none focus:ring-0 peer"
            />
              <label for="floating_username" class="ms-[55px]  absolute text-white text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-2/4 rtl:peer-focus:left-auto peer-focus:opacity-30 peer-focus:dark:opacity-30 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">User Name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <svg className="absolute left-[20px] top-[0] bottom-[0] my-auto"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2C0 0.9 0.9 0 2 0ZM18 3.38V2H2V3.38L10 7.38L18 3.38ZM18 5.62L10.45 9.38999C10.167 9.53262 9.83305 9.53262 9.55 9.38999L2 5.62V14H18V5.62Z"
                  fill="#FF0000"
                />
              </svg>
              <TextInput
              value={password}
              placeholder={""}
              onChange={setPassword}
              id="floating_password"
              className="ps-[55px] block bg-black border border-[#303030] appearance-none focus:outline-none focus:ring-0 peer -pt-4 "
            />
              <label for="floating_password" class="ms-[55px] peer-opacity-30  text-white absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-2/4 rtl:peer-focus:left-auto peer-focus:opacity-30 peer-focus:dark:opacity-30 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>

              <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
 
          </div>

          <div class="remeber-flex">
            <div class="form-group custom_checkbox d-flex">
              <input type="checkbox" name="" id="check1" checked="" />
              <label for="check1">Accept T&C</label>
            </div>
          </div>

          <a href="choose-user.html" class="btn btn-primary w-100">
            Sign Up
          </a>

          <div class="ls-text">
            Already have an account? <a href="login.html">Login HERE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
