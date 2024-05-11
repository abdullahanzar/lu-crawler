import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  course: Yup.string().required("Course is required"),
  semester: Yup.string().required("Semester is required"),
});

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      type: "",
      course: "",
      semester: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (<div className="relative left-12 top-2 mt-4 text-[21px] w-3/6">
  <Button
    style={{
      backgroundColor: "#D5C8C8",
      color: "#000",
      borderRadius: "12px",
      marginTop: "12px",
      padding: "12px",
    }}
    className="font-sans"
    variant="contained"
  >
    Upload your files here then click submit
  </Button>
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Type</InputLabel>
        <Select
          value={formik.values.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Type"
          name="type"
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
        >
          <MenuItem value="question paper">Question Paper</MenuItem>
          <MenuItem value="notes">Notes</MenuItem>
          <MenuItem value="forms">Forms</MenuItem>
          <MenuItem value="books">Books</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
        {formik.touched.type && formik.errors.type && (
          <FormHelperText error>{formik.errors.type}</FormHelperText>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Course</InputLabel>
        <Select
          value={formik.values.course}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Course"
          name="course"
          error={formik.touched.course && Boolean(formik.errors.course)}
          helperText={formik.touched.course && formik.errors.course}
        >
          <MenuItem value="bca">BCA</MenuItem>
          <MenuItem value="mca">MCA</MenuItem>
          <MenuItem value="btech">B.Tech</MenuItem>
          <MenuItem value="bsc">B.Sc.</MenuItem>
          <MenuItem value="bba">BBA</MenuItem>
          <MenuItem value="mba">MBA</MenuItem>
          <MenuItem value="msc">M.Sc.</MenuItem>
          <MenuItem value="ba">BA</MenuItem>
          <MenuItem value="ma">MA</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
        {formik.touched.course && formik.errors.course && (
          <FormHelperText error>{formik.errors.course}</FormHelperText>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Semester</InputLabel>
        <Select
          value={formik.values.semester}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Semester"
          name="semester"
          error={formik.touched.semester && Boolean(formik.errors.semester)}
          helperText={formik.touched.semester && formik.errors.semester}
        >
          {[...Array(16)].map((_, index) => (
            <MenuItem key={index + 1} value={(index + 1).toString()}>
              Semester {index + 1}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.semester && formik.errors.semester && (
          <FormHelperText error>{formik.errors.semester}</FormHelperText>
        )}
      </FormControl>
      <Button
        type="submit"
        className="bg-black hover:bg-white hover:text-black"
        variant="contained"
      >
        Submit
      </Button>
    </form>
    </div>
  );
};

export default MyForm;
