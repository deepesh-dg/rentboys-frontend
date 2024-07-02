import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import Icons from './icons/Component'
import { ArrowDownIcon } from './icons/outline'

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

const SelectDropDown = ({ className }) => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <div className={`relative ${className}`}>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <ListboxButton className="border border-gray-50 w-full py-4 relative z-50">
                    <div className="flex justify-between items-center px-4 w-full">
                        {selectedPerson.name}
                        <Icons icon={ArrowDownIcon} className='w-6 text-red-50' />
                    </div>
                </ListboxButton>
                <ListboxOptions className="absolute w-full mt-14 bg-dark z-50">
                    {people.map((person) => (
                        <ListboxOption key={person.id} value={person} className="focus:bg-gray-50 p-2 hover:bg-gray-50">
                            {person.name}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}

export default SelectDropDown;