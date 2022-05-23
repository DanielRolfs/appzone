import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
/* import Typography from '@mui/material/Typography'; */
import {
  Route,
  Routes,
  Link as RouterLink,
  useLocation,
  HashRouter,
} from 'react-router-dom';

import Catalog from './pages/Catalog'
import About from './pages/About'
import Admin from './pages/Admin'
import DeveloperDocs from './pages/DeveloperDocs'
import AppBase from './components/appdetail/AppBase';
import AppDetail from './components/appdetail/AppDetail';
import AppScreenshots from './components/appdetail/AppScreenshots';
import AdminDashboard from './components/AdminDashboard';


function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const { pathname } = useLocation();
  let selected = pathname
  if (selected && selected.startsWith('/apps')) {
    selected = '/'
  } else {
    const nextSlash = selected.indexOf('/', 1)
    if (nextSlash > 0) {
      selected = selected.substring(0, nextSlash)
    }
  }

  return (
    <Tabs value={selected}>
      <Tab label="Catalog" value="/" to="" component={RouterLink} />
      <Tab label="Admin" value="/admin" to="/admin" component={RouterLink} />
      <Tab label="Developer Docs" value="/developer-docs" to="/developer-docs" component={RouterLink} />
      <Tab label="About" value="/about" to="/about" component={RouterLink} />
    </Tabs>
  );
}

function MenuBar() {
  
  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          Logo
        </div>
        <div>
          <MyTabs />
        </div>
        <div>
          Icon
        </div>
      </div>
    </>
   );
}

const App = () => {
  return (
    <div className="App w-screen h-screen">
    
      <HashRouter basename="/">
        <Box sx={{ width: '100%' }}>
          <MenuBar />
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<AdminDashboard />}/>
              <Route path="apps/:uid" element={<AppBase />}>
                <Route index element={<AppDetail />} />
                <Route path="screenshots" element={<AppScreenshots />} />
              </Route>
            </Route>
            <Route path="/developer-docs" element={<DeveloperDocs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </HashRouter>

    </div>
  );
}

export default App;
