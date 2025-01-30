import React from 'react'

function Card({username, btntext="default Value"}){
    return(
        <div className="relative  w-[300px]  rounded-md" >
        <img
            src='https://img.freepik.com/free-photo/front-view-young-man-holding-bank-card-summer-vacation-pink-wall_140725-113026.jpg?t=st=1737374805~exp=1737378405~hmac=bf3c5f86a17afd7e19899df21f65d08c007b33874c8d66649e5aa457c5607926&w=740'
            alt='AirMax PRo'
            className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet construction adipitoration elit. Experience,
            bedates?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black">
            {/* {btntext||"Visit me->"} → */}
            {btntext} →
          </button>
        </div>
      </div>
    )
}

export default Card