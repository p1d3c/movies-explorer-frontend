import './AboutProject.css';

function AboutProject() {
  return (
    <div id='anchor' className='project'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__container'>
        <div className='project__element'>
          <h3 className='project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление 
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__element'>
          <h3 className='project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__progress'>
        <div className='project__line'>
          <p className='project__text'>1 неделя</p>
        </div>
        <div className='project__line project__line_front'>
          <p className='project__text project__text_front'>4 недели</p>
        </div>
        <p className='project__text project__text_architecture'>Back-end</p>
        <p className='project__text project__text_architecture'>Front-end</p>
      </div>
    </div>
  )
}

export default AboutProject;