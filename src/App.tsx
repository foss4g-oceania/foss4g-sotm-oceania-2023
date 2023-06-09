import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CodeOfConductPage from "./pages/CodeOfConduct";
import AccomodationPage from "./pages/Attend/Accomodation";
import NoPage from "./pages/NoPage";
import PresentPage from "./pages/Present";
import AttendTGPPage from "./pages/Attend/TravelGrantProgram";
import Workshops from "./pages/Workshops";
import CommunityDayPage from "./pages/CommunityDay";
import Sponsorship from "./pages/Sponsorship";
import OurConferenceVenuePage from "./pages/Attend/OurConferenceVenue";
import ProgramPage from "./pages/Attend/Program";
import RegisterPage from "./pages/Attend/Register";
import SocialEventsPage from "./pages/Attend/SocialEvents";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="present" element={<PresentPage />} />
          <Route path="attend/travel-grant-program" element={<AttendTGPPage />} />
          <Route path="attend/our-conference-venue" element={<OurConferenceVenuePage />} />
          <Route path="attend/accomodation" element={<AccomodationPage />} />
          <Route path="attend/program" element={<ProgramPage />} />
          <Route path="attend/register" element={<RegisterPage />} />
          <Route path="attend/social-events" element={<SocialEventsPage />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="community-day" element={<CommunityDayPage />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
