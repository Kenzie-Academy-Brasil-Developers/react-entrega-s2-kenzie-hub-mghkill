import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField } from "@mui/material";
import Button from "../Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import style from "./styles";
const divBox = {
  width: "60%",
  display: "flex",
  flexDirection: "column",
};
const divBoxRemove = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "2",
};
const ConteinerModal = ({
  open,
  setOpen,
  handleAddItem,
  labelOne,
  labelTwo,
  labelThree,
  techsModal,
  remove,
  setRemove,
  handleFilter,
  itemRemove,
}) => {
  const [commit, setCommit] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [deploy, setDeploy] = useState("");

  return (
    <>
      {!remove ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleAddItem}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Box sx={divBox}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    label={labelOne}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </Box>
                {techsModal ? (
                  <>
                    <FormControl sx={{ mt: 1, minWidth: "50%" }}>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        {labelTwo}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={commit}
                        onChange={(e) => setCommit(e.target.value)}
                        autoWidth
                        label="Módulo"
                      >
                        <MenuItem value="Iniciante">Iniciante</MenuItem>
                        <MenuItem value="Intermediario">Intermediário</MenuItem>
                        <MenuItem value="Avancado">Avançado</MenuItem>
                      </Select>
                    </FormControl>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        mt: "12px",
                      }}
                    >
                      <TextField
                        fullWidth
                        label={labelTwo}
                        value={commit}
                        onChange={(e) => setCommit(e.target.value)}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        mt: "12px",
                      }}
                    >
                      <TextField
                        fullWidth
                        label={labelThree}
                        value={deploy}
                        onChange={(e) => setDeploy(e.target.value)}
                      />
                    </Box>
                  </>
                )}
              </Box>
              <Box sx={divBox}>
                <Button
                  onclick={() => {
                    handleAddItem(inputValue, commit, deploy);
                    setInputValue("");
                    setCommit("");
                  }}
                >
                  Adicionar
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      ) : (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={() => {
            setOpen(false);
            setRemove(false);
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Box sx={divBoxRemove}>
                <h1>{itemRemove.title}</h1>

                {itemRemove.status ? itemRemove.status : itemRemove.description}

                <Box sx={divBox}>
                  <Button
                    onclick={() => {
                      handleFilter();
                      setOpen(false);
                    }}
                  >
                    Excluir
                  </Button>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};
export default ConteinerModal;
