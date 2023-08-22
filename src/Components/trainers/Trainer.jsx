import trainer from './trainer.module.scss'

const Trainer = ({ trainerName, trainerImage, trainerRate }) => {
  const bgImage = {
    backgroundImage: `url(${trainerImage})`,
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
  }

  return (
    <div className={trainer.container} style={bgImage}>
      <div className={trainer.bottom}>
        {trainerName && <span className={trainer.name}>{trainerName}</span>}
        <span className={trainer.rate_title}>Trainer Rate:</span>
        {trainerRate && <span className={trainer.rate}>{trainerRate}</span>}
      </div>
    </div>
  )
}

export default Trainer
