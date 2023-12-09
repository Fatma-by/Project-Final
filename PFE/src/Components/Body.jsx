import Science from "./Matiere/Science/Science";
import Accueil from "./Accueil/Accueil";
import Login from "./Login/Login";
import Arabe from "./Matiere/Arabe/Arabe";
import Français from "./Matiere/Français/Français";
import { Routes, Route, Navigate } from 'react-router-dom';
import Sinscrire from'./Sinscrire/Sinscrire';
import CreerClass from "./CreerClass/CreerClass";
import AccessClass from "./AccessClass/AccessClass";
import CoursArabe from "./Matiere/Arabe/CoursArabe";
import DevoirArabe from "./Matiere/Arabe/DevoirArabe";
import ExerciceArabe from "./Matiere/Arabe/ExerciceArabe";


const Body = () => {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/science" element={<Science />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/arabe" element={<Arabe />} />
          <Route path="/français" element={<Français />} />
          <Route path="/s'inscrire" element={<Sinscrire/>} />
          <Route path="/Enseignant" element={<CreerClass/>} />
          <Route path="/Eleve" element={<AccessClass/>} />
          <Route path="Cours" element={<CoursArabe/>} />
          <Route path="Devoir" element={<DevoirArabe/>} />
          <Route path="Exercices" element={<ExerciceArabe/>} />


          



          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path="*" element={<Navigate to="/accueil" />} />
        </Routes>
      </>
    );
  };

export default Body;
