import React from 'react'

const Form = () => {
    return (
        <form className="space-y-7">
            <div className="flex justify-center">
                <div className="w-2/3 flex justify-evenly">
                    <button>
                        <span>Places to stay</span>
                    </button>
                    <button>
                        <span>Monthly stays</span>
                    </button>
                    <button>
                        <span>Experiences</span>
                    </button>
                </div>
            </div>
            <div className="bg-gray-50  border-black text-black rounded-full flex items-center p-3 space-x-2 justify-evenly  shadow-lg shadow-gray-500">
                <div>
                    <p className="font-semibold">Location</p>
                    <span className="text-sm text-gray-500">
                        Where are you going?
                    </span>
                </div>
                <div>
                    <p className="font-semibold">Check in</p>
                    <span className="text-sm text-gray-500">Add dates</span>
                </div>
                <div>
                    <p className="font-semibold">Check out</p>
                    <span className="text-sm text-gray-500">Add dates</span>
                </div>
                <div>
                    <p className="font-semibold">Guests</p>
                    <span className="text-sm text-gray-500">Add guests</span>
                </div>
            </div>
        </form>
    )
}

export default Form
