import { Plus } from 'lucide-react'
import React from 'react'
import GenreAddForm from './GenreAddForm';
import GenreTable from './GenreTable';


const Genre = () => {
  const [isAdd, setIsAdd] = React.useState(false);

  return (
    <section className='p-4'>
        <button className='btn btn-accent' onClick={()=> setIsAdd(true)}><Plus/> Add New</button>
        
        {isAdd && <GenreAddForm setIsAdd={setIsAdd}/>}
        
        <GenreTable isAdd={isAdd}/>

    </section>
  )
}

export default Genre