import ReactPaginate from 'react-paginate'
import RecentItem from './RecentItem'
import { useEffect, useState } from 'react'

const RecentPagination = ({ allitems, itemsPerPage }) => {
  const [items, setItems] = useState(allitems)
  useEffect(() => {
    setItems(allitems)
  }, [allitems])
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <div className='divide-y divide-neutral-500'>
        {currentItems?.map((item) => <RecentItem key={item.number} data={item}/>)}  
      </div>
      <ReactPaginate
        className='flex flex-row items-center justify-end mt-2 pr-4'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageLinkClassName='text-sm text-neutral-300'
        previousLinkClassName='text-sm text-neutral-300'
        nextLinkClassName='text-sm text-neutral-300'
        activeClassName='outline outline-offset-2 outline-green-400'
        pageClassName='flex items-center justify-center mx-1 my-1 h-4 w-4 bg-neutral-700 rounded hover:bg-neutral-600'
        previousClassName='flex items-center justify-center mr-2 my-1 h-4  w-4 bg-neutral-700 rounded hover:bg-neutral-600'
        nextClassName='flex items-center justify-center mx-1 ml-2 h-4 w-4 bg-neutral-700 rounded hover:bg-neutral-600'
      />
    </>
  );
}
export default RecentPagination