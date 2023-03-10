import React from 'react';
import Filters from '../components/Filters/Filters.jsx'
import Card2 from '../components/Card/Card2'
import Pagination from '../components/pagination/Pagination'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './Explorar.module.css'
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getStreamName } from '../store/actions/actions.js';
// import App from '../components/StreamVideo/App.js'
// import generateMuiTheme from "../components/StreamVideo/mui/theme";
// import { ThemeProvider } from "@material-ui/styles";

function Explorar() {
  const dispatch = useDispatch()
  const Streams = useSelector(state => state.streams)
  const [page, setPage] = useState(1)
  const [hasMore,setHasMore]=useState(true)
  const StreamsPerPage = 4
  const lastStreamsPerPage = page * StreamsPerPage
  const firstStreamsPerPage = lastStreamsPerPage - StreamsPerPage
  const currentPageStreams = Streams.slice(firstStreamsPerPage, lastStreamsPerPage)
  const [stream, setStream] = useState([])

  useEffect(() => {
    dispatch(getStreamName())
  }, [])

  const pages = []
  for (let i = 1; i <= Math.ceil(Streams.length / StreamsPerPage); i++) {
    pages.push(i)
  }
  function pagination(num) {
    setPage(num)
  }
  function paginationBef() {
    setPage(page - 1)
  }
  function paginationAft() {
    setPage(page + 1)
  }

  return (
    <InfiniteScroll
      dataLength={stream.length}
      next={() => setPage(prevPage => prevPage + 1)}
      hasMore={hasMore}
      loader={<h3>Loading</h3>}>
      <div className={style.globalContainer}>
        <div className={style.searchFilter}>
          <div className={style.filtersContainer}>
            {/* {typeof Streams !== 'string' &&
        <div className={style.divPagination}>
          {page !== 1 ? <div onClick={() => paginationBef()}><MdOutlineKeyboardArrowLeft className={style.buttonLeft} /></div> : null}
          <Pagination
            Streams={Streams.length}
            StreamsPerPage={StreamsPerPage}
            pagination={pagination}
            page={page}
          />
          {page !== pages.length && Streams.length ? <div onClick={() => paginationAft()}><MdOutlineKeyboardArrowRight className={style.buttonRight} /></div> : null}
        </div>} */}
            <Filters setPage={setPage} />
          </div>
        </div>
        <div className={`${style.containerProducts}`}>
          {stream.map((p, index) => {
            return (
              <section className={style.sectionCards} key={index}>
                <div>
                  <Card2
                    id={p._id}
                    name={p.name}
                    image={p.image}
                    description={p.description}
                    language={p.language}
                    key={index}
                  />
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

{/* <ThemeProvider theme={generateMuiTheme()}>
      <App/>
      </ThemeProvider> */}
export default Explorar;