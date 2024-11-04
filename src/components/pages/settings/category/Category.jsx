import { Plus } from 'lucide-react'
import React from 'react'
import CategoryAddForm from './CategoryAddForm';
import CategoryTable from './CategoryTable';
import { StoreContext } from '@/components/store/storeContext';
import { setIsAdd } from '@/components/store/storeAction';


const Category = () => {
 const {store, dispatch} = React.useContext(StoreContext)
  const [itemEdit, setItemEdit] = React.useState(null)

  const handleAdd = () => {
    dispatch(setIsAdd(true))
    setItemEdit(null)
  }
  return (
    <section className='p-4'>
        <button className='btn btn-accent' onClick={handleAdd}><Plus/> Add New</button>
        
        {store.isAdd && <CategoryAddForm itemEdit={itemEdit}/>}
        
        <CategoryTable setItemEdit={setItemEdit}/>

    </section>
  )
}

export default Category