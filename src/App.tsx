import { FormEventHandler, ReactEventHandler, useState } from 'react'
import ArrowIcon from './assets/icon-arrow.svg'

function App() {
  const [inputDate, setInputDate] = useState({
    day: '',
    month: '',
    year: '',
  })

  const [outputDate, setOutputDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setInputDate((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  function getTimeDifference(userDate: Date) {
    // Calculate the time difference in milliseconds
    const currentDate = new Date()
    const timeDiff = currentDate.getTime() - userDate.getTime()

    // Calculate the number of milliseconds in a day, month, and year
    const dayInMilSec = 1000 * 60 * 60 * 24
    const monthMilSec = dayInMilSec * 30
    const yearMilSec = dayInMilSec * 365

    // Calculate the number of years, months, and days in the time difference
    const years = Math.floor(timeDiff / yearMilSec)
    const months = Math.floor((timeDiff % yearMilSec) / monthMilSec)
    const days = Math.floor(
      ((timeDiff % yearMilSec) % monthMilSec) / dayInMilSec
    )

    return { years, months, days }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { day, month, year } = inputDate

    // convert user input to Numbers
    const dayInt = parseInt(day)
    const monthInt = parseInt(month)
    const yearInt = parseInt(year)

    if (isValidDate(yearInt, monthInt, dayInt)) {
      const userDate = new Date(yearInt, monthInt - 1, dayInt)
      const { years, months, days } = getTimeDifference(userDate)

      setOutputDate({
        day: days,
        month: months,
        year: years,
      })
    } else {
      console.log('invalid date')
    }
  }

  function isValidDate(year: number, month: number, day: number) {
    const date = new Date(year, month - 1, day)
    const currentDate = new Date()

    if (currentDate.getTime < date.getTime) {
      return false
    }

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    )
  }

  return (
    <div className="main-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-wrapper">
          <div className="form__input-group">
            <label htmlFor="day" className="form__label">
              Day
            </label>
            <input
              type="text"
              name="day"
              // id="day"
              className="form__input"
              placeholder="DD"
              size={3}
              maxLength={2}
              value={inputDate.day ?? ''}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-group">
            <label htmlFor="month" className="form__label">
              Month
            </label>
            <input
              type="text"
              name="month"
              id="month"
              className="form__input"
              placeholder="MM"
              size={3}
              maxLength={2}
              value={inputDate.month}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-group">
            <label htmlFor="year" className="form__label">
              Year
            </label>
            <input
              type="text"
              name="year"
              id="year"
              className="form__input"
              placeholder="YYYY"
              size={5}
              maxLength={4}
              value={inputDate.year}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="form__submit">
          <img
            src={ArrowIcon}
            alt="Down Arrow"
            className="form__submit--icon"
          />
        </button>
        <div className="break-line"></div>
      </form>

      <p className="text__output">
        <span className="text--purple">{outputDate.year}</span> years
      </p>
      <p className="text__output">
        <span className="text--purple">{outputDate.month}</span> months
      </p>
      <p className="text__output">
        <span className="text--purple">{outputDate.day}</span> days
      </p>
    </div>
  )
}

export default App
