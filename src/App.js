import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <div className='note-1'>
        <div className='note-2'>
          <div className='note-3'>
            <div className='line-1'>
              <div>
                <svg>
                  <use xlinkHref='#chevron'></use>
                </svg>
              </div>
              <input placeholder='What needs to be done?'></input>
            </div>
            <div className='todos'>
              <label class="label" for="todo">
                  <input type="checkbox" name="policy" id="todo"></input>
                  <span>I’m agree with privacy policy</span>
                  <div class="checkbox__unchecked">
                      <svg>
                          <use xlinkHref="#unchecked"></use>
                      </svg>
                  </div>
                  <div class="checkbox__checked">
                      <svg>
                          <use xlinkHref="#checked"></use>
                      </svg>
                  </div>
              </label>
              <label class="label" for="todo-2">
                  <input type="checkbox" name="policy" id="todo-2"></input>
                  <span>I’m agree with privacy policy</span>
                  <div class="checkbox__unchecked">
                      <svg>
                          <use xlinkHref="#unchecked"></use>
                      </svg>
                  </div>
                  <div class="checkbox__checked">
                      <svg>
                          <use xlinkHref="#checked"></use>
                      </svg>
                  </div>
              </label>
              <label class="label" for="todo-3">
                  <input type="checkbox" name="policy" id="todo-3"></input>
                  <span>I’m agree with privacy policy</span>
                  <div class="checkbox__unchecked">
                      <svg>
                          <use xlinkHref="#unchecked"></use>
                      </svg>
                  </div>
                  <div class="checkbox__checked">
                      <svg>
                          <use xlinkHref="#checked"></use>
                      </svg>
                  </div>
              </label>
              <label class="label" for="todo-2">
                  <input type="checkbox" name="policy" id="todo-2"></input>
                  <span>I’m agree with privacy policy</span>
                  <div class="checkbox__unchecked">
                      <svg>
                          <use xlinkHref="#unchecked"></use>
                      </svg>
                  </div>
                  <div class="checkbox__checked">
                      <svg>
                          <use xlinkHref="#checked"></use>
                      </svg>
                  </div>
              </label>
            </div>
            <nav className='menu'>
              <a href=''>2 items left</a>
              <div>
                <a href='' className='active'>All</a>
                <a href=''>Active</a>
                <a href=''>Completed</a>
              </div>
              <a href=''>Clear completed</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;