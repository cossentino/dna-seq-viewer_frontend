import React from 'react'

export const CategoryFilter = ({ category, onChange }) => {

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

export const AACodeFilter = ({ category, onChange }) => {

    return (
        <form>

            <div className="flex flex-col justify-evenly">
                <label className="text-lg mx-1">
                    Highlight by Residue Code
                </label>

                <select className="mx-1" value={category} onChange={onChange}>
                    <option value={null}></option>
                    <option value={'A'}>A</option>
                    <option value={'G'}>G</option>
                    <option value={'L'}>L</option>
                    <option value={'S'}>S</option>
                    <option value={'V'}>V</option>
                    <option value={'T'}>T</option>
                    <option value={'K'}>K</option>
                    <option value={'D'}>D</option>
                    <option value={'I'}>I</option>
                    <option value={'N'}>N</option>
                    <option value={'E'}>E</option>
                    <option value={'P'}>P</option>
                    <option value={'R'}>R</option>
                    <option value={'F'}>F</option>
                    <option value={'Q'}>Q</option>
                    <option value={'Y'}>Y</option>
                    <option value={'H'}>H</option>
                    <option value={'C'}>C</option>
                    <option value={'M'}>M</option>
                    <option value={'W'}>W</option>
                </select>
            </div>

        </form>
    )
}
