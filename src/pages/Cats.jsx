import {Link, Outlet} from 'react-router-dom';

export default function Cats(){
          return(
            <>
             <h1 class="text-bg-dark" style={{color: 'white', margin: '0px'}}>Cats</h1>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
              <ul className="navbar-nav me-auto">
                <li className='nav-item'>
                  <Link to ='bambino' className="nav-link">Bambino</Link>
                </li>
                <li className='nav-item'>
                  <Link to = 'burmilla' className="nav-link">Burmilla</Link>
                </li>
                <li className='nav-item'>
                  <Link to = 'nibelung' className="nav-link">Nibelung</Link>
                </li>
              </ul>
            </nav>
                    <section className='cats'>
                      <Outlet/>
                    </section>
            </>
                  )
}
function CatsMain(){
  return(
    <div>
    <article style={{textAlign: 'center', marginTop: '300px'}}>
      <h3 style={{fontSize: '100px', fontWeight: 'lighter'}}>Such different cats</h3>
    </article>
    </div>
  )
}
function Bambino(){
  return(
    <article>
      <h3>Bambino</h3>
      <div className='d-flex'>
        <img src="https://kot-pes.com/wp-content/uploads/2019/03/post_5bbf53356f1bd.jpg" style={{width: '300px'}} alt="" />
        <p>Бамбино – дизайнерский гибрид канадского сфинкса и манчкина, презентованный миру в 2005 году. Опознавательные черты представителей породы – короткие лапы, гладкое, почти бесшерстное тело, огромные уши.</p>
      </div>
    </article>
  )
}

function Burmilla(){
  return(
    <article>
      <h3>Burmilla</h3>
      <div className='d-flex'>
        <img src="https://kotmastak.ru/wp-content/uploads/d/3/f/d3f523c0f4624a51d04553ff79453523.jpeg" style={{width: '300px'}} alt="" />
        <p>Бурмилла – сравнительно молодая порода кошек, выведенная в Великобритании и ведущая свое начало от бурм и персидских шиншилл. Животные унаследовали яркую внешность обоих предков, а также уникальные дымчатые и затушеванные окрасы.</p>
      </div>
    </article>
  )
}

function Nibelung(){
  return(
    <article>
      <h3>Nibelung</h3>
      <div className='d-flex'>
        <img src="https://macho-ster.com/wp-content/uploads/b/0/f/b0f7c1cfde3ce9d3ead9452577e5b7ba.jpeg" style={{width: '300px'}} alt="" />
        <p>Нибелунг – представительный американец с манерами настоящего джентльмена! Этот красавец держится с королевским благородством и требует искреннего уважения к своей кошачьей персоне.</p>
      </div>
    </article>
  )
}
export {Cats, CatsMain, Bambino, Burmilla, Nibelung}