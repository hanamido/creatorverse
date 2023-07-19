import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes, useNavigate, useParams } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import { supabase } from '../client';
import '@picocss/pico';

function App() {
  const [creators, setCreators] = useState([]);
  const [currentCreator, setCurrentCreator] = useState('');
  const [creatorToEdit, setCreatorToEdit] = useState('');
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: contentCreators, error} = await supabase
          .from('creators')
          .select('*')
          .order('id', {ascending: true});
        {
          setCreators(contentCreators);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data: ', error);
      }
    }; 
    fetchData();
  }, []);

  const handleCurrentCreator = (creator) => {
    setCurrentCreator(creator);
    navigate(`/${creator.id}`); 
  }

  const handleEditCreator = (creator) => {
    setCreatorToEdit(creator);
    navigate(`/edit/${creator.id}`)
  }

  const routes = useRoutes([
    {
      path: '/',
      element: <ShowCreators 
        contentCreators={creators} 
        isLoading={isLoading} 
        handleCurrentCreator={(currentCreator) => handleCurrentCreator(currentCreator)} 
        handleEditCreator={(creatorToEdit) => handleEditCreator(creatorToEdit)} />
    },
    {
      path: '/:id',
      element: <ViewCreator 
        contentCreator={currentCreator}
        handleEditCreator={(creatorToEdit) => handleEditCreator(creatorToEdit)} />
    },
    {
      path: '/new',
      element: <AddCreator />
    },
    {
      path: 'edit/:id',
      element: <EditCreator creatorToEdit={creatorToEdit} />
    }
  ]);

  return (
    <div>
      <header className="header">
      <h1 className="title-text">Creatorverse</h1>
      <nav id="navbar">
        <ul>
          <li><a href="/" role="button">View All Creators</a></li>
          <li><a href="new" role="button">Add Creator</a></li>
        </ul>
      </nav>
      </header>
      {routes}
    </div>
  )
    // <>
    //   <ContentCreatorCard contentCreator={creator} />
    //   <ShowCreators contentCreators={creators} />
    // </>
}

export default App
