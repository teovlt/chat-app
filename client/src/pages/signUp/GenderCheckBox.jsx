import React from 'react'

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label p-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className='label-text mr-2'>Male</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === 'male'}
            onChange={() => onCheckBoxChange('male')}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label p-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
          <span className='label-text mr-2'>Female</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === 'female'}
            onChange={() => onCheckBoxChange('female')}
          />
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
