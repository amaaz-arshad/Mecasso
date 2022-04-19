import React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { Dropzone, FileItem } from "@dropzone-ui/react"
// import { DropzoneArea } from "material-ui-dropzone";
import Select from // , { SelectChangeEvent }
"@mui/material/Select"
import Title from "../components/sharedComponent/Title"
// import { borderColor, maxWidth } from "@mui/system"

const EditProduct = () => {
  const [category, setCategory] = React.useState("")
  const handleChange = (event) => {
    setCategory(event.target.value)
  }
  const [files, setFiles] = React.useState([])
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles)
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Title>Store Name // Edit Product</Title>

      {/* #############select category############# */}
      <FormControl fullWidth sx={{ width: 440, maxWidth: "100%", mb: 2 }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="select category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          maxWidth: "100%",
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          styleid="outlined-basic"
          label="Product Name"
          variant="outlined"
        />
      </Box>
      {/* <DropzoneArea onChange={(files) => console.log("Files:", files)} /> */}
      {/* <Button variant="contained" component="label" color="primary">
        <AddIcon /> Drag and Drop images here
        <input type="file" hidden />
      </Button> */}

      {/* #############dropzone############# */}
      <Dropzone
        onChange={updateFiles}
        value={files}
        header={false}
        footer={false}
        label="Drag and Drop your images here..."
        style={{ marginBottom: "15px" }}
      >
        {files.map((file) => (
          <FileItem {...file} preview />
        ))}
      </Dropzone>

      {/* #############description############# */}
      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        sx={{
          maxWidth: "100%",
          mb: 2,
        }}
      />
      {/* <div style={{ width: "100%", height: "100px", marginBottom: "20px" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            backdropFilter: "blur(4px)",
          }}
        >
          <img
            src="/product.png"
            maxwidth="80px"
            height="90%"
            //   sx={{ resizeMode: "contain", width: "", backgroundColor: "black" }}
            alt=""
          />
        </div>
      </div> */}
      {/* <Button
        style={{
          backgroundColor: "#56B280",
          color: "white",
          width: "150px",
          marginBottom: "15px",
        }}
      >
        Add Store
      </Button> */}

      {/* #############quantity############# */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        Quantity
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          border: "1px solid #56B280",
          maxWidth: "270px",
          marginBottom: "100px",
        }}
      >
        <AddIcon />
        1
        <RemoveIcon />
      </div>

      {/* #############butttons############# */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          style={{
            backgroundColor: "#56B280",
            color: "white",
            width: "190px",
            margin: "5px",
          }}
        >
          Edit Product
        </Button>
        <Button
          style={{
            backgroundColor: "#56B280",
            color: "white",
            width: "190px",
            margin: "5px",
          }}
        >
          Delete Product
        </Button>
      </div>
    </Container>
  )
}

export default EditProduct
