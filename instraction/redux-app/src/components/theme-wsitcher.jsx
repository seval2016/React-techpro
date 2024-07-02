import React from "react";
import { Form } from "react-bootstrap";

const ThemeSwitcher = () => {
  return (
    <Form.Check // prettier-ignore
      type="switch"
      id="themeSwitcher"
      label="Dark Mode"
    />
  );
};

export default ThemeSwitcher;
