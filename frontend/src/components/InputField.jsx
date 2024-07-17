import React from 'react'

const InputField = ({ value, setValue, nameKey, type, invalidFields, setInvalidFields }) => {
  return (
    <div className='w-full'>
      <label htmlFor={nameKey} className="form-label text-dark fw-bold">
        {nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
      </label>
      <input
        type={type || 'text'}
        className="form-control"
        placeholder={nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
        value={value}
        onChange={e => setValue(prev => ({ ...prev, [nameKey]: e.target.value }))}
        aria-label="Email"
        onFocus={()=>setInvalidFields([])}
      />
      {invalidFields?.some(el => el.name === nameKey) && <small className='text-[12px] italic text-[#5dbc5d]'>{invalidFields.find
        (el => el.name === nameKey)?.mes}</small>}

    </div>
  )
}

export default InputField
