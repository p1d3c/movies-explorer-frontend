import './Techs.css';

function Techs() {
  return (
    <div className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__description'>
        <h3 className='techs__head'>7 технологий</h3>
        <p className='techs__shoulders'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <div className='techs__tools'>
        <div className='techs__tool'>
          <p className='techs__tool-name'>HTML</p>
        </div>
        <div className='techs__tool'>
          <p className='techs__tool-name'>CSS</p>
        </div>
        <div className='techs__tool'>
          <p className='techs__tool-name'>JS</p>
        </div>
        <div className='techs__tool'>
          <p className='techs__tool-name'>React</p>
        </div>
        <div className='techs__tool'>
          <p className='techs__tool-name'>Git</p>
        </div>
        <div className='techs__tool'>
          <p className='techs__tool-name'>Express.js</p>
        </div>
        <div className='techs__tool'>
          <p className='techs__tool-name'>mongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Techs;
