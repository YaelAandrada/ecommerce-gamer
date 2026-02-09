import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDashboard from '../components/UserPanel/UserDashboard';
import Wishlist from '../components/UserPanel/Wishlist';
import UserGames from '../components/UserPanel/UserGames';
import UserReviews from '../components/UserPanel/UserReviews';
import EditProfile from '../components/UserPanel/EditProfile';
import { getCurrentUser } from '../helpers/userQueries';