import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
/* import Typography from '@mui/material/Typography'; */
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

/* import { BrowserRouter } from 'react-router-dom' */

import Catalog from './pages/Catalog'
import About from './pages/About'
import Admin from './pages/Admin'
import DeveloperDocs from './pages/DeveloperDocs'


function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}



function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['', '/admin', '/developer-docs', '/about']);
  const currentTab = routeMatch?.pattern?.path;
  console.log(currentTab)

  return (
    <Tabs value={currentTab}>
      <Tab label="Catalog" value="" to="" component={Link} />
      <Tab label="Admin" value="/admin" to="/admin" component={Link} />
      <Tab label="Developer Docs" value="/developer-docs" to="/developer-docs" component={Link} />
      <Tab label="About" value="/about" to="/about" component={Link} />
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

/* function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
} */




function App() {
  return (
    <div className="App w-screen h-screen">
    

      <Router>
        <Box sx={{ width: '100%' }}>
          <MenuBar />
          <Routes>
            <Route path="*" element={<Catalog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/developer-docs" element={<DeveloperDocs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Router>

    </div>
  );
}

export default App;



