import Signup from "./src/components/Signup";
import VerifyCode from "./src/components/VerifyCode";
import React, { useState, useEffect } from "react";

export const applyCustomCode = externalCodeSetup => {
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <VerifyCode />
	))
};