import Signup from "./src/components/Signup";
import React, { useState, useEffect } from "react";

export const applyCustomCode = externalCodeSetup => {
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <Signup />
	))
};

