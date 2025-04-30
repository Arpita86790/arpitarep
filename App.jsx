
import ViewTask from './screens/ViewTask'
import { Route, Routes } from 'react-router-dom'
import MyItem from './screens/MyItem'
import AddTask from './screens/AddTask';


function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        
        <Route path='ViewTask' element={<ViewTask />} />
        <Route path='my-items' element={<MyItem />} />
        <Route path='AddTask' element={<AddTask />} />
        <Route path='EditTask' element={<EditTask />} />
        <Route path='DeleteTask' element={<DeleteTask />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
