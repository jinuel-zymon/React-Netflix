import { Plus } from 'lucide-react'
import React from 'react'
import GenreAddForm from './GenreAddForm';
import GenreTable from './GenreTable';


const Genre = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null)

  const handleAdd = () => {
    setIsAdd(true)
    setItemEdit(null)
  }
  return (
    <section className='p-4'>
        <button className='btn btn-accent' onClick={handleAdd}><Plus/> Add New</button>
        
        {isAdd && <GenreAddForm setIsAdd={setIsAdd} itemEdit={itemEdit}/>}
        
        <GenreTable isAdd={isAdd} setIsAdd={setIsAdd} setItemEdit={setItemEdit}/>

    </section>
  )
}

export default Genre