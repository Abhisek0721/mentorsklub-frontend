import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { previouspage,nextpage } from '../redux/feature/Pagination/PageSlice';


function Pagination() {
  const previous = useSelector(state => state.page.previouspage)
  const next = useSelector(state => state.page.nextpage)
  if(previous===null) previous=false;
  if(next===null) next=false;
  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    dispatch(previouspage());
};

const handleNextPage = () => {
    dispatch(nextpage());
};

  return (
    <div className='fixed bottom-10 flex gap-2'>
        <div>
            <button className={`button-style py-2 ${previous ? "":"cursor-not-allowed disaled:"}`} onClick={handlePreviousPage}>p</button> 
        </div>
        <div><input type="text" className='w-[5rem] h-[100%] rounded-[5px] border border-solid border-blue-600'/></div>
        <div><button className='button-style py-2' onClick={handleNextPage}> N</button></div>
    </div>
  )
}

export default Pagination