import CreatbaleReactSelect from 'react-select/creatable'

const NoteForm = () => {
    return(
        <form className="space-y-4">
            <div className="mb-4 flex">
                <label className=" text-gray-700 text-sm font-bold mb-2 mr-4">
                    Title
                    <input className="border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="title" type="text" placeholder="CSS:has Selector" required/>
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-4">
                    Tags
                    <CreatbaleReactSelect isMulti className='py-2 px-3 text-gray-700 leading-tight focus:outline-none'/>
                </label>
            </div>
            <div className='mb-4'>
                <label htmlFor="" id='body' className='flex flex-col mb-2'>
                    Body
                    <textarea id="body" name='body' rows="15" cols="15" className='border solid rounded' />
                </label>
            </div>
            <div className='mb-4 flex justify-end'>
                <button type='submit' className='mr-2 btn btn-primary'>Save</button>
                <button type='button' className='mr-2 btn btn-secondary'>Cancel</button>
            </div>
        </form>
    )
}

export default NoteForm