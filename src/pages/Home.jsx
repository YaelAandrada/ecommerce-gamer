import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import AuthModal from '../components/AuthModal';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login'); // 'login' o 'register'

  // CRUD de tareas
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);

  // Cargar usuario desde localStorage
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Cargar tareas desde localStorage
  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTask);
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // CRUD funciones
  const handleTaskSubmit = (taskData) => {
    if (editingTask) {
      setTasks(prev =>
        prev.map(task =>
          task.id === editingTask.id ? { ...taskData, id: editingTask.id } : task
        )
      );
      setEditingTask(null);
    } else {
      const newTask = { ...taskData, id: crypto.randomUUID() };
      setTasks(prev => [newTask, ...prev]);
    }
    setShowTaskForm(false);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setShowTaskForm(false);
  };

  const handleLogout = async () => {
    if (user && user.provider === 'google') {
      await googleAuthService.logout();
    }
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  // Mostrar modal si no hay usuario
  if (!user) {
    return (
      <>
        <AuthModal
          view={view}
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50">
          <button
            onClick={() => setView('login')}
            className={`px-4 py-2 rounded text-white text-sm ${
              view === 'login' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setView('register')}
            className={`px-4 py-2 rounded text-white text-sm ${
              view === 'register' ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            Registrarse
          </button>
        </div>
      </>
    );
  }

  // Render si el usuario está logueado
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                ¡Bienvenido, {user.name || user.username}!
              </h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Cerrar Sesión
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Tu información</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Usuario</p>
                  <p className="text-lg text-gray-900">{user.name || user.username}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg text-gray-900">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Sección de Tareas */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Mis Tareas</h2>
                <button
                  onClick={() => setShowTaskForm(true)}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Nueva Tarea
                </button>
              </div>

              {showTaskForm && (
                <div className="mb-6">
                  <TaskForm
                    onTaskSubmit={handleTaskSubmit}
                    editingTask={editingTask}
                    onCancelEdit={handleCancelEdit}
                  />
                </div>
              )}

              {tasks.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No hay tareas</h3>
                  <p className="mt-1 text-sm text-gray-500">Comienza creando tu primera tarea.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {tasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onEdit={handleEditTask}
                      onDelete={handleDeleteTask}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;