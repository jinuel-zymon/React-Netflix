import { Plus } from 'lucide-react'
import React from 'react'
import CategoryTable from './CategoryTable'
import CategoryAddForm from './CategoryAddForm'

const Category = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null)

  const handleAdd = () => {
    setIsAdd(true)
    setItemEdit(null)
  }


  return (
    <section className='p-4'>
        <button className='btn btn-accent' onClick={handleAdd}><Plus/> Add New</button>
        
        {isAdd && <CategoryAddForm setIsAdd={setIsAdd} itemEdit={itemEdit}/>}
        
        <CategoryTable isAdd={isAdd}/>

    </section>
  )
}

export default Category