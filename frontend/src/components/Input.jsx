function Input({label, type = 'text', error, register, name, placeholder}) {
  return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input 
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {
          error &&  (
            <p className="mt-1 text-sm text-red-600">{error.message}</p>
          )
        }
        </div>
  )
}

export default Input
