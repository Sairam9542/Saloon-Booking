import {
  Avatar,
  Badge,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Chip,
  Divider,
  Box,
  Typography,
  Fade,
  Backdrop,
} from "@mui/material";
import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Auth/action";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import useNotificationWebsoket from "../../../util/useNotificationWebsoket";
import { fetchNotificationsByUser } from "../../../Redux/Notifications/action";
import { useTheme } from "@emotion/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import StarIcon from "@mui/icons-material/Star";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, notification } = useSelector((store) => store);
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (path) => () => {
    if (path === "/logout") {
      dispatch(logout());
      navigate("/");
      handleClose();
      return;
    }
    navigate(path);
    handleClose();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (auth.user?.id) {
      dispatch(fetchNotificationsByUser({
        userId: auth.user.id,
        jwt: localStorage.getItem('jwt')
      }));
    }
  }, [auth.user]);

  useNotificationWebsoket(auth.user?.id, "user");

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-2xl bg-black/5' : 'backdrop-blur-xl bg-black/10'}`}>
        {/* Premium Glassmorphism Background */}
        <div className="absolute inset-0">
          {/* Dynamic gradient background */}
          <div className={`absolute inset-0 transition-all duration-500 ${scrolled 
            ? 'bg-gradient-to-br from-black/20 via-purple-900/10 to-pink-900/15' 
            : 'bg-gradient-to-br from-black/30 via-purple-900/20 to-pink-900/25'}`}></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-400/8 to-orange-500/5 animate-gradient-flow"></div>
          
          {/* Shimmer border effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent animate-shimmer-glow"></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-float-sparkle"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + (i % 2)}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            
            {/* Premium Logo Section */}
            <div className="flex items-center gap-6 lg:gap-10">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => navigate("/")}
              >              
                {/* Brand name with gradient text */}
                <div className="flex flex-col">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text transition-all duration-300 group-hover:scale-105 leading-tight">
                    Styluno
                  </h1>
                  <p className="text-xs text-white/60 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Beauty & Wellness
                  </p>
                </div>
              </div>
              
              {/* Navigation Links - Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/90 font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 group relative overflow-hidden backdrop-blur-sm"
                >
                  <HomeIcon className="text-lg group-hover:text-pink-300 transition-colors duration-300 group-hover:scale-110" />
                  <span>Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              
              {/* Premium Partner Button */}
              <button
                onClick={() => navigate("/become-partner")}
                className="hidden sm:flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 hover:shadow-2xl hover:shadow-pink-500/40 hover:-translate-y-1 hover:scale-105 group relative overflow-hidden text-sm lg:text-base"
              >
                <span className="relative z-10">Join as Partner</span>
                <ContentCutIcon className="text-sm relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                
                {/* Premium shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>

              {/* Enhanced Notifications */}
              <div className="relative">
                <button
                  onClick={() => navigate("/notifications")}
                  className="relative p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20 hover:scale-110 group backdrop-blur-sm border border-white/10"
                >
                  {/* Notification badge with glow */}
                  {notification.unreadCount > 0 && (
                    <>
                      <div className="absolute -top-1 -right-1 min-w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg z-10 border border-white/20">
                        {notification.unreadCount > 99 ? '99+' : notification.unreadCount}
                      </div>
                      <div className="absolute -top-1 -right-1 min-w-5 h-5 bg-red-500/60 rounded-full animate-ping"></div>
                    </>
                  )}
                  
                  <NotificationsActiveIcon 
                    className="text-white/90 text-lg sm:text-xl group-hover:text-pink-300 transition-all duration-300 group-hover:scale-110" 
                  />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>

              {/* User Profile Section */}
              {auth.user?.id ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Premium User Role Chip */}
                  {auth.user?.role === "SALON_OWNER" && (
                    <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 backdrop-blur-sm">
                      <StarIcon className="text-amber-300 text-sm" />
                      <span className="text-xs font-semibold text-amber-100">Owner</span>
                    </div>
                  )}
                  
                  {/* User greeting */}
                  <div className="hidden lg:block max-w-28 xl:max-w-32">
                    <p className="text-sm font-semibold text-white/90 truncate">
                      Hi, {auth.user?.fullName?.split(' ')[0]}
                    </p>
                  </div>

                  {/* Premium Avatar Button */}
                  <button
                    onClick={handleClick}
                    className="relative transition-all duration-300 hover:scale-110 group"
                  >
                    {/* Multi-layer gradient rings */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500 blur-lg animate-pulse"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300 blur-md"></div>
                    
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-2xl shadow-pink-500/40 transition-all duration-300 group-hover:shadow-3xl group-hover:shadow-pink-500/60 border-2 border-white/20">
                      {auth.user?.fullName && auth.user?.fullName[0].toUpperCase()}
                      
                      {/* Status indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    </div>
                  </button>

                  {/* Enhanced Menu */}
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={{
                      mt: 1,
                      '& .MuiPaper-root': {
                        borderRadius: 4,
                        minWidth: 280,
                        background: 'linear-gradient(145deg, rgba(0,0,0,0.85) 0%, rgba(88,28,135,0.8) 30%, rgba(219,39,119,0.8) 70%, rgba(251,146,60,0.8) 100%)',
                        backdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {/* User Info Header */}
                    <div className="px-5 py-4 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg border border-white/20">
                          {auth.user?.fullName && auth.user?.fullName[0].toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{auth.user?.fullName}</p>
                          <p className="text-xs text-white/60">{auth.user?.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <MenuItem
                        onClick={handleMenuClick("/bookings")}
                        className="mx-2 my-1 rounded-xl gap-3 py-3 hover:bg-white/10 transition-all duration-200 group text-white"
                      >
                        <BookmarksIcon className="text-pink-400 text-xl group-hover:scale-110 transition-transform duration-200" />
                        <div>
                          <span className="font-semibold text-white">My Bookings</span>
                          <p className="text-xs text-white/60">View your appointments</p>
                        </div>
                      </MenuItem>

                      {auth.user?.role === "SALON_OWNER" && (
                        <MenuItem
                          onClick={handleMenuClick("/salon-dashboard")}
                          className="mx-2 my-1 rounded-xl gap-3 py-3 hover:bg-white/10 transition-all duration-200 group text-white"
                        >
                          <DashboardIcon className="text-purple-400 text-xl group-hover:scale-110 transition-transform duration-200" />
                          <div>
                            <span className="font-semibold text-white">Dashboard</span>
                            <p className="text-xs text-white/60">Manage your salon</p>
                          </div>
                        </MenuItem>
                      )}
                    </div>

                    <div className="border-t border-white/10 my-1"></div>

                    <div className="py-2">
                      <MenuItem
                        onClick={handleMenuClick("/logout")}
                        className="mx-2 my-1 rounded-xl gap-3 py-3 hover:bg-red-500/20 transition-all duration-200 text-red-400 group"
                      >
                        <LogoutIcon className="text-xl group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-semibold">Sign Out</span>
                      </MenuItem>
                    </div>
                  </Menu>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 hover:shadow-2xl hover:shadow-pink-500/40 hover:-translate-y-1 hover:scale-105 group relative overflow-hidden text-sm sm:text-base"
                >
                  <PersonIcon className="text-sm sm:text-lg group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Sign In</span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="absolute top-16 sm:top-20 left-4 right-4 bg-gradient-to-br from-black/90 via-purple-900/80 to-pink-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 p-6">
            <div className="space-y-4">
              <button
                onClick={() => {navigate("/"); toggleMobileMenu();}}
                className="flex items-center gap-3 w-full p-3 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                <HomeIcon className="text-pink-400" />
                <span>Home</span>
              </button>
              <button
                onClick={() => {navigate("/become-partner"); toggleMobileMenu();}}
                className="flex items-center gap-3 w-full p-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ContentCutIcon />
                <span>Become Partner</span>
              </button>
            </div>
          </div>
        </div>
      )}

    
    </>
  );
};

export default Navbar;