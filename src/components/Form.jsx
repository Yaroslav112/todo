import React, { useState } from "react";
import "../components/Form.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Form = (props) => {
  const inputTextHandler = (e) => {
    if (props.setInputText(e.target.value) === "") {
      console.log("a");
    }
  };
  const [value, setValue] = useState("All");

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 10 },
    ]);
    props.setInputText("");
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl variant="standard" fullWidth>
        <TextField
          label="todo"
          id="fullWidth"
          value={props.inputText}
          onChange={inputTextHandler}
          variant="filled"
          inputProps={{ maxLength: 35 }}
        />
        <div className="button-container">
          <Button onClick={submitTodoHandler} variant="outlined">
            Add
          </Button>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={statusHandler}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="comleted">comleted</MenuItem>
            <MenuItem value="uncompleted">uncompleted</MenuItem>
          </Select>
        </div>
      </FormControl>
    </Box>
  );
};

export default Form;
