import ArrowIcon from './assets/icon-arrow.svg'

function App() {
  return (
    <div className="main-container">
      <form action="" className="form">
        <div className="form__input-wrapper">
          <div className="form__input-group">
            <label htmlFor="date" className="form__label">
              Day
            </label>
            <input
              type="text"
              name="date"
              id="date"
              className="form__input"
              placeholder="DD"
              size={3}
              maxLength={2}
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
        <span className="text--purple">38</span> years
      </p>
      <p className="text__output">
        <span className="text--purple">3</span> months
      </p>
      <p className="text__output">
        <span className="text--purple">26</span> days
      </p>
    </div>
  )
}

export default App
