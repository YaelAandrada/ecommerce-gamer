import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCamera, FaSave } from 'react-icons/fa';
import { updateUserProfile } from '../../helpers/userQueriesFront';

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
      
      // Si hay una nueva imagen, se sube primero
      if (imageFile) {
        const uploadResponse = await uploadProfileImage(imageFile, userData._id);
        avatarUrl = uploadResponse.url;
      }
      
      // Actualizar perfil
      const updatedData = {
        ...formData,
        avatar: avatarUrl
      };
      await updateUserProfile(userData._id, updatedData);
      onUpdate(); // Recargar datos
      alert('Perfil actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      alert('Error al actualizar el perfil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
        <FaUser className="mr-2" /> Editar Perfil
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <img
              src={previewImage || '/default-avatar.png'}
              alt="Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 dark:border-red-500"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 bg-indigo-600 dark:bg-red-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 dark:hover:bg-red-700 transition-colors"
              title="Cambiar foto"
            >
              <FaCamera />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Haz clic en la cámara para cambiar tu foto de perfil
          </p>
        </div>
        {/* Campos del formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
              <FaUser className="mr-2" /> Nombre de usuario
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
              minLength="3"
              maxLength="30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Biografía
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Cuéntanos algo sobre ti..."
            maxLength="500"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {formData.bio.length}/500 caracteres
          </p>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 dark:bg-red-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-red-500 transition-colors disabled:opacity-50"
          >
            <FaSave className="mr-2" />
            {loading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;