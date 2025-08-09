import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from '@mui/icons-material/Logout';

const BarraLateral = () => {

    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('authenticated');
        localStorage.removeItem('id_usuario');
        localStorage.removeItem('token');
        navigate('/');
      }

    function reserva(){
      navigate('/reservar')
    }

    function salas(){
      navigate('/salas')
    }
    
    function disponibilidade(){
      navigate('/disponibilidade')
    }

    function quemSomos() {
      navigate('/quemsomos')
    }

    function PerfilUser() {
      navigate('/perfil')
    }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-around",
        marginLeft: "3%",
        position: "fixed",
      }}
    >
      <IconButton sx={{ backgroundColor: "#ff0002" }}>
        <CalendarTodayIcon sx={{ width: 40, height: 40, color:"#ffffff" }} onClick={reserva}/>
      </IconButton>
      <IconButton sx={{ backgroundColor: "#ff0002" }}>
        <SearchIcon sx={{ width: 40, height: 40, color:"#ffffff" }} onClick={disponibilidade}/>
      </IconButton>
      <IconButton sx={{ backgroundColor: "#ff0002" }}>
        <GroupIcon sx={{ width: 40, height: 40, color:"#ffffff" }} onClick={quemSomos}/>
      </IconButton>
      <IconButton sx={{ backgroundColor: "#ff0002" }}>
        <PersonIcon sx={{ width: 40, height: 40, color:"#ffffff" }} onClick={PerfilUser}/>
      </IconButton>
      <IconButton sx={{ backgroundColor: "#ff0002" }}>
        <FormatListBulletedIcon sx={{ width: 40, height: 40, color:"#ffffff" }} onClick={salas}/>
      </IconButton>

      <IconButton sx={{ backgroundColor: "#ff0002", marginTop:"200%" }}>
        <LogoutIcon sx={{ width: 30, height: 40, color:"#ffffff" }} onClick={logout} />
      </IconButton>
    </Box>
  );
};

export default BarraLateral;
