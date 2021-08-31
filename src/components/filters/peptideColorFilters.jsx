import React from 'react'
import { residueCategories } from '../../constants/residue-categories'



// Choices must have id (for value) and content (for display)
export const GenericFilter = ({ category, onChange, choices, label }) => {
    return (
        <form>

            <div className="flex flex-col justify-evenly">
                <label className="text-md m-1">
                    {label}
                </label>
                <select className="mx-1" value={category} onChange={onChange}>
                    {Object.keys(choices).map((choice) => (
                        <option value={choices[choice].id} key={choices[choice].id}>{choices[choice].content}</option>
                    ))}
                </select>
            </div>

        </form>
    )
}

export const CategoryFilter = ({ category, onChange }) => {

    return (
        <form>

            <div className="flex flex-col justify-evenly">
                <label className="text-md m-1">
                    Highlight By Category
                </label>

                <select className="mx-1" value={category} onChange={onChange}>
                    <option value=""></option>
                    <option value="hydrophobic">Hydrophobic</option>
                    <option value="polar">Polar</option>
                    <option value="charged">Charged</option>
                </select>
            </div>

        </form>
    )
}

export const AACodeFilter = ({ category, onChange }) => {

    return (
        <form>

            <div className="flex flex-col justify-evenly">
                <label className="text-md m-1">
                    Highlight by Residue Code
                </label>

                <select className="mx-1" value={category} onChange={onChange}>
                    {residueCategories.all.map(code => (
                        <option value={code} key={code}>{code}</option>
                    ))}
                </select>
            </div>

        </form>
    )
}


export const FeatureFilter = ({ category, features, onChange }) => {

    return (
        <form>

            <div className="flex flex-col justify-evenly">
                <label className="text-md m-1">
                    Highlight by Residue Code
                </label>
                <select className="mx-1" value={category} onChange={onChange}>
                    {Object.keys(features).map((feat) => (
                        <option value={features[feat].id} key={features[feat].id}>{features[feat].note}</option>
                    ))}
                </select>
            </div>

        </form>
    )
}