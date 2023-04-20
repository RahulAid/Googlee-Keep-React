import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { archive, getAllNote, trashed, updateNote} from "../../Service/NoteService";
import SPopper from "../SPopper/SPopper";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteDescription from "../TakeAnote/NoteDescription";
import { InputBase } from "@mui/material";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Notes() {
  const [notes, setNotes] = useState([]);

  const [note, setNote] = useState({
    title: "",
    description: "",
    color:"white"
  });

  const [color,setColor] = useState('white')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const setcolor = (color) => {
    console.log("Getting Color",color)
    setColor(color)
    setNote((prev) => ({...prev,color:color}))
  }

  const editTitle = (event) => {
    setNote((prev) => ({...prev,title:event.target.value}))
  }

  const editDescription = (event) => {
    setNote((prev) => ({...prev,description:event.target.value}))
  }
 
  const updatenote = (NOTE) =>{
    console.log("This is note",note)
    let data = {title:note.title,description: note.description }
    updateNote(NOTE._id,data).then((response) => {
      
    })
    .catch((err) => {
      console.log(err);
    })
  }


  

  // const id = useRef();
  useEffect(() => {
    getAllNote()
      .then((res) => {
        var resArr = res.data.data;
        console.log("response", resArr);
        setNotes(resArr);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const isArchive = (note) => {
    console.log("onCLick Event", note._id);
    archive(note._id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isTrash = (note) => {
    console.log("onCLick Event", note._id);
    trashed(note._id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return notes.map((note) => {
    return (<>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/*<Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
    </Typography>
          <InputBase placeholder={note.title}  />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  </Typography>
          <InputBase placeholder={note.description}  />*/}

<div
      style={{
        display: "flex",
        marginLeft: "2%",
        marginTop: ".7%",
        flexDirection: "column",
        backgroundColor : color,
        width:"100%",
        height:"100%"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        
        }}
      >
        {/* <div style={{ color: "grey" }}>Title</div> */}
        <InputBase placeholder="Title" onChange={editTitle}/>

        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          style={{ width: "1.5em", height: "1.5em", marginRight: "1%" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pin"
            viewBox="0 0 16 16"
          >
            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
          </svg>
        </IconButton>
      </div>
      <InputBase placeholder="Take a note" onChange={editDescription} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2%",
          marginLeft: "1%",
          width: "auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          <AddAlertOutlinedIcon
            style={{ color: "grey", cursor: "pointer" }}
            fontSize="small"
          />
          <PersonAddAltOutlinedIcon
            style={{ color: "grey", cursor: "pointer" }}
            fontSize="small"
          />
          {/*<ColorLensOutlinedIcon
            style={{ color: "grey", cursor: "pointer" }}
            fontSize="small"
        />*/}

          <SPopper bgcolor = {setcolor}/>
          <InsertPhotoOutlinedIcon
            style={{ color: "grey", cursor: "pointer" }}
            fontSize="small"
          />
          <ArchiveOutlinedIcon
            style={{ color: "grey", cursor: "pointer" }}
            fontSize="small"
          />
          <MoreVertOutlinedIcon
            style={{ color: "grey", cursor: "pointer" }}
            fontSize="small"
          />
          <div
            style={{
              height: "auto",
              width: "17%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2349/2349854.png"
              alt=""
              style={{ height: ".8em", width: ".8em", cursor: "pointer" }}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/2349/2349829.png"
              alt=""
              style={{
                height: ".8em",
                width: ".8em",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "white",
              border: "white",
              cursor: "pointer",
            }}
            onClick={()=>updatenote(note)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
        </Box>
      </Modal>
      {/*!note.archive &&
      !note.trash && (*/}
        <div
          style={{
            display: "flex",
            width: "13.85em",
            marginLeft: "2%",
            marginTop: ".7%",
            flexDirection: "column",
            border: "1px solid grey",
            borderRadius: "8px",
            backgroundColor:note.color
          }}
        >
          <div
            style={{
              height: "2em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "5%",
              marginTop: "1%",
            }}
          >
            <div onClick={handleOpen}>{note.title}</div>
            <IconButton
              size="large"
              style={{ width: "1.5em", height: "1.5em", marginRight: "1%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pin"
                viewBox="0 0 16 16"
              >
                <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
              </svg>
            </IconButton>
          </div>
          {/* <InputBase placeholder={note.description} /> */}
          <div
            style={{
              minHeight: "3em",
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "flex-start",
              marginLeft: "5%",
            }}
          >
            {note.description}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2%",
              marginLeft: "1%",
              width: "auto",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <AddAlertOutlinedIcon
                  style={{ color: "grey", cursor: "pointer" }}
                  fontSize="small"
                />
              </div>
              <div>
                <PersonAddAltOutlinedIcon
                  style={{ color: "grey", cursor: "pointer" }}
                  fontSize="small"
                />
              </div>
              {/*<div>
                <ColorLensOutlinedIcon
                  style={{ color: "grey", cursor: "pointer" }}
                  fontSize="small"
                />
            </div>*/}

            <SPopper bgcolor = {setcolor}/>

              <div>
                <InsertPhotoOutlinedIcon
                  style={{ color: "grey", cursor: "pointer" }}
                  fontSize="small"
                />
              </div>
              <div onClick={() => isArchive(note)}>
                <ArchiveOutlinedIcon
                  style={{ color: "grey", cursor: "pointer" }}
                  fontSize="small"
                />
              </div>
              <div onClick={() => isTrash(note)}>
                <MoreVertOutlinedIcon
                  style={{ color: "grey", cursor: "pointer" }}
                  fontSize="small"
                />
              </div>
            </div>
          </div>

          
        </div>
    </>  )
    
     });

}
