import "./Profile.css"

import { upload } from "../../utils/config"

import Message from "../../components/erros/Message"
import { Link, useParams } from "react-router-dom"
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails, resetMessage } from "../../slices/userSlice";
import { deletePhoto, getUserPhotos, publishPhoto } from "../../slices/photoSlice"; 

export default function Profile(){

    const { id } = useParams();

    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.user);
    const { user: userAuth } = useSelector((state) => state.auth);
    const {
        photos,
        loading: loadingPhoto,
        error: errorPhoto,
        message: messagePhoto,
      } = useSelector((state) => state.photo);

      
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    
    const [editId, setEditId] = useState();
    const [editImage, setEditImage] = useState();
    const [editTitle, setEditTitle] = useState();
      
    const newPhotoForm = useRef();
    const editPhotoForm = useRef();

    const submitHandle = (e) => {
        e.preventDefault();
    
        const photoData = {
          title,
          image,
        };
    
        // build form data
        const formData = new FormData();
    
        const photoFormData = Object.keys(photoData).forEach((key) =>
          formData.append(key, photoData[key])
        );
    
        formData.append("photo", photoFormData);
    
        dispatch(publishPhoto(formData));
    
        setTitle("");
    
        resetComponentMessage();
    };

    function resetComponentMessage() {
        setTimeout(() => {
          dispatch(resetMessage());
        }, 2000);
      }

    useEffect(() => {
        dispatch(getUserDetails(id));
        dispatch(getUserPhotos(id));
    }, [dispatch, id]);

    const handleFile = (e) => {
        const image = e.target.files[0];
    
        setImage(image);
    }

    const handleDelete = (id) => {
        dispatch(deletePhoto(id));
    
        resetComponentMessage();
    }

    function hideOrShowForms() {
        newPhotoForm.current.classList.toggle("hide");
        editPhotoForm.current.classList.toggle("hide");
    }

    const handleEdit = (photo) => {
        if (editPhotoForm.current.classList.contains("hide")) {
          hideOrShowForms();
        }
    
        setEditId(photo._id);
        setEditImage(photo.image);
        setEditTitle(photo.title);
    }

    const handleCancelEdit = () => {
        hideOrShowForms();
    }

    const handleUpdate = (e) => {
        e.preventDefault();
    
        const photoData = {
          title: editTitle,
          id: editId,
        };
    
        dispatch(updatePhoto(photoData));
    
        resetComponentMessage();
    }

    if (loading) {
    return <p>Carregando...</p>;
    }

    return(
        <div id="profile">
             <div className="profile-header">
                {user.profileImage && (
                <img src={`${upload}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className="profile-description">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                </div>
            </div>
        {id === userAuth._id && (
            <>
            <div className="new-photo" ref={newPhotoForm}>
                <h3>Compartilhe algum momento seu:</h3>
                <form onSubmit={submitHandle}>
                <label>
                    <span>Título para a foto:</span>
                    <input
                    type="text"
                    placeholder="Insira um título"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title || ""}
                    />
                </label>
                <label>
                    <span>Imagem:</span>
                    <input type="file" onChange={handleFile} />
                </label>
                {!loadingPhoto && <input type="submit" value="Postar" />}
                {loadingPhoto && (
                    <input type="submit" disabled value="Aguarde..." />
                )}
                </form>
            </div>
            <div className="edit-photo hide" ref={editPhotoForm}>
                <p>Editando:</p>
                {editImage && (
                <img src={`${upload}/photos/${editImage}`} alt={editTitle} />
                )}
                <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    onChange={(e) => setEditTitle(e.target.value)}
                    value={editTitle || ""}
                />
                <input type="submit" value="Atualizar" />
                <button className="cancel-btn" onClick={handleCancelEdit}>
                    Cancelar edição
                </button>
                </form>
            </div>
            {errorPhoto && <Message msg={errorPhoto} type="error" />}
            {messagePhoto && <Message msg={messagePhoto} type="success" />}
            </>
        )}
        <div className="user-photos">
            <h2>Fotos publicadas:</h2>
            <div className="photos-container">
            {photos &&
                photos.map((photo) => (
                <div className="photo" key={photo._id}>
                    {photo.image && (
                    <img
                        src={`${upload}/photos/${photo.image}`}
                        alt={photo.title}
                    />
                    )}
                    {id === userAuth._id ? (
                    <div className="actions">
                        <Link to={`/photos/${photo._id}`}>
                        <BsFillEyeFill />
                        </Link>
                        <BsPencilFill onClick={() => handleEdit(photo)} />
                        <BsXLg onClick={() => handleDelete(photo._id)} />
                    </div>
                    ) : (
                    <Link className="btn" to={`/photos/${photo._id}`}>
                        Ver
                    </Link>
                    )}
                </div>
                ))}
            {photos.length === 0 && <p>Ainda não há fotos publicadas...</p>}
            </div>
        </div>
        </div>
    )
}