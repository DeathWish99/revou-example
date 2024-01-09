
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ChampionInfoContainer, ChampionsSummaryContainer, HomeContainer, RegisterContainer } from './containers'
import PublicLayout from './layouts/PublicLayout'
import { useEffect } from 'react'
import useFetchChampion from './hooks/useFetchChampion'
import { ChampionContext } from './contexts/ChampionContext'

function App() {
  const {championData, setChampionContext} = useFetchChampion();
  
  useEffect(() => {
    setChampionContext();
  }, [])

  const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <HomeContainer />
      },
      {
        path: '/championinfo/:id',
        element: <ChampionInfoContainer />
      },
      {
        path: '/allchampions',
        element: <ChampionsSummaryContainer />
      },
      {
        path: '/register',
        element: <RegisterContainer />
      },
      {
        path: '*',
        element: <h1>404 NOT FOUND</h1>
      }
    ]
  }]);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<PublicLayout />}>
    //       <Route path='/' element={< HomeContainer />} />
    //       <Route path='/championinfo' element={< ChampionInfoContainer />} />
    //     </Route>
    //     <Route path='*' element={<h1>404 NOT FOUND</h1>} />
    //   </Routes>
    // </BrowserRouter>
    <ChampionContext.Provider value={championData}>
      <RouterProvider router={router} />
    </ChampionContext.Provider>
  )
}

export default App
