import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';
import ConfirmModal from '../components/ConfirmModal';
import { FaPlus, FaCheck, FaTrash } from 'react-icons/fa';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Fade from '@mui/material/Fade';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Explore the new dashboard design', completed: false },
      { id: 2, text: 'Add a new feature', completed: false },
    ];
  });
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const openConfirmModal = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const closeConfirmModal = () => {
    setTaskToDelete(null);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      removeTask(taskToDelete);
      closeConfirmModal();
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg,rgb(196, 151, 228) 0%,rgb(216, 136, 248) 100%)' : 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)', py: 0, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth={false} disableGutters sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <Fade in timeout={1000}>
          <Box sx={{
            width: '100%',
            maxWidth: 1000,
            mx: 'auto',
            p: { xs: 2, sm: 6, md: 8 },
            borderRadius: 7,
            boxShadow: 16,
            backdropFilter: 'blur(14px)',
            background: (theme) => theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #4a148c 60%, #311b92 100%)'
              : 'linear-gradient(135deg, #ffffff 60%, #ede7f6 100%)',
            minHeight: 700,
            transition: 'background 0.3s',
          }}>
            <Typography variant="h4" fontWeight={800} gutterBottom sx={{
              color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'text.primary',
              textShadow: (theme) => theme.palette.mode === 'dark' ? '0 2px 8px rgba(74,21,140,0.2)' : 'none',
            }}>
              Welcome, {user?.name}!
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom sx={{
              color: (theme) => theme.palette.mode === 'dark' ? '#ede7f6' : 'text.secondary',
            }}>
              Here's your task list for today.
            </Typography>
            <Box sx={{ height: { xs: 32, md: 56 } }} />
            <Card sx={{ mt: 4, mb: 4, p: 2, boxShadow: 8, borderRadius: 3, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}>
              <form onSubmit={handleAddTask} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <TextField
                  label="What's next on your list?"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  fullWidth
                  size="medium"
                  InputLabelProps={{
                    sx: {
                      color: (theme) => theme.palette.mode === 'dark' ? '#000' : 'text.primary',
                    },
                  }}
                  inputProps={{
                    style: {
                      color: (theme) => theme.palette.mode === 'dark' ? '#000' : undefined,
                    },
                  }}
                />
                <Button type="submit" variant="contained" color="primary" size="large" sx={{ transition: 'background 0.2s', '&:hover': { background: 'secondary.main' } }}>
                  Add Task
                </Button>
              </form>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
                <Chip
                  label="All"
                  color={filter === 'all' ? 'primary' : 'default'}
                  onClick={() => setFilter('all')}
                  clickable
                  sx={{
                    color: (theme) => theme.palette.mode === 'dark' ? '#000' : 'text.primary',
                    bgcolor: filter === 'all' ? 'primary.main' : undefined,
                  }}
                />
                <Chip
                  label="Completed"
                  color={filter === 'completed' ? 'primary' : 'default'}
                  onClick={() => setFilter('completed')}
                  clickable
                  sx={{
                    color: (theme) => theme.palette.mode === 'dark' ? '#000' : 'text.primary',
                    bgcolor: filter === 'completed' ? 'primary.main' : undefined,
                  }}
                />
                <Chip
                  label="Incomplete"
                  color={filter === 'incomplete' ? 'primary' : 'default'}
                  onClick={() => setFilter('incomplete')}
                  clickable
                  sx={{
                    color: (theme) => theme.palette.mode === 'dark' ? '#000' : 'text.primary',
                    bgcolor: filter === 'incomplete' ? 'primary.main' : undefined,
                  }}
                />
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {tasks.filter(task => {
                  if (filter === 'completed') return task.completed;
                  if (filter === 'incomplete') return !task.completed;
                  return true;
                }).map((task) => (
                  <Grid item xs={12} key={task.id}>
                    <Card
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        bgcolor: task.completed ? 'success.lighter' : 'grey.50',
                        px: 2,
                        py: 1.5,
                        boxShadow: 2,
                        transition: 'background 0.3s',
                        borderRadius: 3,
                      }}
                    >
                      <CardContent sx={{ flex: 1, py: 0, cursor: 'pointer' }} onClick={() => toggleTaskCompletion(task.id)}>
                        <Typography
                          variant="body1"
                          sx={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: (theme) => theme.palette.mode === 'dark' ? '#000' : 'text.primary',
                            fontWeight: 500,
                          }}
                        >
                          {task.text}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton color={task.completed ? 'success' : 'default'} onClick={() => toggleTaskCompletion(task.id)}>
                          <CheckIcon />
                        </IconButton>
                        <IconButton color="error" onClick={() => openConfirmModal(task.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>
            <ConfirmModal
              isOpen={isModalOpen}
              onClose={closeConfirmModal}
              onConfirm={handleConfirmDelete}
              title="Delete Task"
              message="Are you sure you want to delete this task?"
            />
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Dashboard;
