import React from "react";
import ScreenThirteen from "pages/ScreenThirteen";
import Usercreatepost from "pages/Usercreatepost";
import Admineditdashboard from "pages/Admineditdashboard";
import Userroadmap from "pages/Userroadmap";
import Adminchangelog from "pages/Adminchangelog";
import Adminsettings from "pages/Adminsettings";
import Adminusers from "pages/Adminusers";
import Admineditroadmap from "pages/Admineditroadmap";
import Adminroadmap from "pages/Adminroadmap";
import Admincreateboard from "pages/Admincreateboard";
import AdminfeedbackThree from "pages/AdminfeedbackThree";
import AdminfeedbackTwo from "pages/AdminfeedbackTwo";
import Adminfeedback from "pages/Adminfeedback";
import Admindashboard from "pages/Admindashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/adminfeedback" element={<Adminfeedback />} />
        <Route path="/adminfeedbacktwo" element={<AdminfeedbackTwo />} />
        <Route path="/adminfeedbackthree" element={<AdminfeedbackThree />} />
        <Route path="/admincreateboard" element={<Admincreateboard />} />
        <Route path="/adminroadmap" element={<Adminroadmap />} />
        <Route path="/admineditroadmap" element={<Admineditroadmap />} />
        <Route path="/adminusers" element={<Adminusers />} />
        <Route path="/adminsettings" element={<Adminsettings />} />
        <Route path="/adminchangelog" element={<Adminchangelog />} />
        <Route path="/userroadmap" element={<Userroadmap />} />
        <Route path="/admineditdashboard" element={<Admineditdashboard />} />
        <Route path="/usercreatepost" element={<Usercreatepost />} />
        <Route path="/screenthirteen" element={<ScreenThirteen />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
