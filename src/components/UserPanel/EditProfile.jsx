import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCamera, FaSave } from 'react-icons/fa';
import { updateUserProfile, uploadProfileImage } from '../../helpers/userQueries';

const EditProfile = ({ userData, onUpdate }) => {
  const [formData, setFormData] = useState({
    username: userData?.username || '',
    email: userData?.email || '',
    bio: userData?.bio || '',
    avatar: userData?.avatar || ''
  });
  
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(userData?.avatar || '');
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      let avatarUrl = formData.avatar;
      
      // Si hay una nueva imagen, subirla primero
      if (imageFile) {
        const uploadResponse = await uploadProfileImage(imageFile, userData._id);
        avatarUrl = uploadResponse.url;
      }
      
      // Actualizar perfil
      const updatedData = {
        ...formData,
        avatar: avatarUrl
      };