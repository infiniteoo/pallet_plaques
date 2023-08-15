import React from 'react'

const OrderNumberInput = () => {
  return (

<div>
  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Order #</label>
  <div className="relative  rounded-md shadow-sm">
    
    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Order Number"/>
    
  </div>
</div>

  )
}

export default OrderNumberInput