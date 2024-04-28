import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className='label p-2 cursor-pointer'>
          <span className='label-text mr-2'>Male</span>
          <input type='checkbox' className='checkbox border-slate-900' />
        </label>
      </div>
      <div className='form-control'>
        <label className='label p-2 cursor-pointer'>
          <span className='label-text mr-2'>Female</span>
          <input type='checkbox' className='checkbox border-slate-900' />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox

//Starter code
// const GenderCheckBox = () => {
//     return (
//       <div className='flex'>
//         <div className='form-control'>
//           <label className='label p-2 cursor-pointer'>
//             <span className='label-text mr-2'>Male</span>
//             <input type='checkbox' className='checkbox border-slate-900' />
//           </label>
//         </div>
//         <div className='form-control'>
//           <label className='label p-2 cursor-pointer'>
//             <span className='label-text mr-2'>Female</span>
//             <input type='checkbox' className='checkbox border-slate-900' />
//           </label>
//         </div>
//       </div>
//     )
//   }
