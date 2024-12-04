import React from 'react'
import { useState } from 'react'

export const Landing = ({ onFormSubmit }) => {

    const [tripName, setTripName] = useState()
    const [tripStart, setTripStart] = useState()
    const [tripEnd, setTripEnd] = useState()
    const [startLocation, setStartLocation] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass data to the parent component
        onFormSubmit({ tripName, tripStart, tripEnd, startLocation });
    }


  return (
    <div id="Landing">
        <div>
            <img className="logo"></img>
            <form onSubmit={handleSubmit}>
                <h3>Let's Get You Started</h3>
                <div>
                    <div className="landingInput">
                        <label for="tripName">Trip Name:</label>
                        <input type="text" name="tripName" id="tripName" value={tripName} onChange={(e) => setTripName(e.target.tripName)} required />
                    </div>
                    <div className="landingInput">
                        <label for="startDate">Start Date:</label>
                        <input type="date" name="startDate" id="startDate" value={tripStart} onChange={(e) => setTripStart(e.target.tripStart)} required />
                    </div>
                    <div className="landingInput">
                        <label for="endDate">End Date:</label>
                        <input type="date" name="endDate" id="endDate" value={tripEnd} onChange={(e) => setTripEnd(e.target.tripEnd)} required />
                    </div>
                </div>
                <div className="landingInput">
                    <label for="startLocation">Starting Location:</label>
                    <input type="search" name="startLocation" id="startLocation" value={startLocation} onChange={(e) => setStartLocation(e.target.startLocation)} required />
                </div>
                <button type="submit">Start</button>
            </form>
        </div>
    </div>
  )
}
