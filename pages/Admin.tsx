import React from 'react';
import Button from '../components/Button';

const Auth = () => {
  return (
    <div className="admin w-full  flex justify-center items-center">
      <form className="auth_box w-full  p-2">
        <div className="field_container border border-grad-two  relative w-full h-14">
          <input
            required
            type="text"
            name="email"
            id=""
            placeholder="Email"
            className="bg-primary   focus:outline-none   placeholder-textLow text-textLow w-full h-full text-xl px-3"
          />
          <span className="error absolute"></span>
        </div>

        <div className="login flex justify-between items-end mt-4">
          <Button t="submit" w="90px" h="2rem" mt={false}>
            Login
          </Button>
          <p className="forgot text-textLow font-medium text-lg underline">
            Reset Password
          </p>
        </div>
      </form>
    </div>
  );
};

export default Auth;
