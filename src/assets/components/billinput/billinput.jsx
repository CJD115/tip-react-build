const BillInput = () => {
  return (
    <div className='inline-block w-1/2 mr-4 p-3 m-3 bg-gray-400'>
      <div>
        <p className="pb-2">Bill</p>
        <label htmlFor="billamount"></label>
        <input type='text' id='billamount' name='billamount'></input>
      </div>
    </div>
  );
}

export default BillInput;
