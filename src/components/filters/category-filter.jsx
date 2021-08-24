import React from 'react'

const CategoryFilter = ({ category, onChange }) => {

    return (
        <form>

            <div className="flex flex-col justify-evenly">
                <label className="text-lg mx-1">
                    Highlight By Category
                </label>

                <select className="mx-1" value={category} onChange={onChange}>
                    <option value={null}></option>
                    <option value="hydrophobic">Hydrophobic</option>
                    <option value="polar">Polar</option>
                    <option value="charged">Charged</option>
                </select>
            </div>

        </form>
    )
}

export default CategoryFilter