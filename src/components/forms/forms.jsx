import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import FileUpload from "./file-upload";
import { createSupabaseBrowserClient } from "@/supabase/browserClient";
import { notify } from "@/utils/notify";

const supabase = createSupabaseBrowserClient();

const validationSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  course: Yup.string().required("Course is required"),
  semester: Yup.string().required("Semester is required"),
  branch: Yup.string(),
  name: Yup.string(),
  description: Yup.string(),
});

const MyForm = () => {
  const [cloudinaryMetadata, setCloudinaryMetaData] = useState(null);
  const formik = useFormik({
    initialValues: {
      type: "",
      course: "",
      semester: "",
      branch: "NA",
      name: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!cloudinaryMetadata)
        return notify.error("You haven't uploaded any document yet.");
      notify.load("Uploading your document. Please give us a moment.");
      const { error } = await supabase.from("documents").insert({
        ...values,
        cloudinary_metadata: cloudinaryMetadata.data,
        ip_address: cloudinaryMetadata.ip,
      });
      notify.clearloading();
      if (error) {
        console.error(error);
        return notify.error(
          "We guess there was an error at our end. Please let us know the logged error message if the issue persists."
        );
      }
      notify.timedSuccess(
        "Thank you so much. Your document has been successfully uploaded.",
        5000
      );
    },
  });

  return (
    <div className="relative px-5 mb-4 sm:left-12 sm:top-2 sm:mt-4 sm:text-[21px] sm:w-3/6">
      <FileUpload setCloudinaryMetaData={setCloudinaryMetaData} />
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth margin="normal" size="small">
          <InputLabel size="small">Type</InputLabel>
          <Select
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Type"
            name="type"
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
            size="small"
          >
            <MenuItem value="question paper">Question Paper</MenuItem>
            <MenuItem value="midsem question paper">
              Midsem Question Paper
            </MenuItem>
            <MenuItem value="notes">Notes</MenuItem>
            <MenuItem value="forms">Forms</MenuItem>
            <MenuItem value="books">Books</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
          {formik.touched.type && formik.errors.type && (
            <FormHelperText error>{formik.errors.type}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth margin="normal" size="small">
          <InputLabel size="small">Course</InputLabel>
          <Select
            value={formik.values.course}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Course"
            name="course"
            error={formik.touched.course && Boolean(formik.errors.course)}
            helperText={formik.touched.course && formik.errors.course}
            size="small"
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
            <MenuItem value="bcom">B.Com.</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
          {formik.touched.course && formik.errors.course && (
            <FormHelperText error>{formik.errors.course}</FormHelperText>
          )}
        </FormControl>
        {formik.values.course === "btech" && (
          <FormControl fullWidth margin="normal" size="small">
            <InputLabel size="small">Branch</InputLabel>
            <Select
              value={formik.values.branch}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Branch"
              name="branch"
              error={formik.touched.branch && Boolean(formik.errors.branch)}
              helperText={formik.touched.branch && formik.errors.branch}
              size="small"
            >
              <MenuItem value="electrical">Electrical</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="cse">CSE</MenuItem>
              <MenuItem value="cseai">CSE AI/ML</MenuItem>
              <MenuItem value="civil">Civil</MenuItem>
              <MenuItem value="mechanical">Mechanical</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>
        )}
        <FormControl fullWidth margin="normal" size="small">
          <InputLabel size="small">Semester</InputLabel>
          <Select
            value={formik.values.semester}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Semester"
            name="semester"
            error={formik.touched.semester && Boolean(formik.errors.semester)}
            helperText={formik.touched.semester && formik.errors.semester}
            size="small"
          >
            {[...Array(10)].map((_, index) => (
              <MenuItem key={index + 1} value={(index + 1).toString()}>
                Semester {index + 1}
              </MenuItem>
            ))}
            <MenuItem value="not-applicable">Not Applicable</MenuItem>
          </Select>
          {formik.touched.semester && formik.errors.semester && (
            <FormHelperText error>{formik.errors.semester}</FormHelperText>
          )}
        </FormControl>
        <TextField
          error={!!(formik.touched.name && formik.errors.name)}
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.name && formik.errors.name}
          label="Name"
          fullWidth
          margin="normal"
          size="small"
        />
        <TextField
          error={!!(formik.touched.description && formik.errors.description)}
          name="description"
          value={formik.values.description || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.description && formik.errors.description}
          label="Description"
          fullWidth
          multiline
          rows={2}
          size="small"
          margin="normal"
        />
        <Button
          type="submit"
          sx={{marginTop: "5px"}}
          className="bg-black mt-3 hover:bg-white hover:text-black"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MyForm;
