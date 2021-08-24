import React from 'react'

const CategoryFilter = ({ category, onChange }) => {

    return (
        <form className="p-6 flex flex-col justify-evenly">

            <div>
                <label className="text-white text-lg">
                    Email
                </label>

                <select value={category} onChange={onChange}>
                    <option value={null}></option>
                    <option value="hydrophobic">Hydrophobic</option>
                    <option value="polar">Polar</option>
                    <option value="charged">Charged</option>
                </select>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Submit</button>
        </form>
    )
}

export default CategoryFilter