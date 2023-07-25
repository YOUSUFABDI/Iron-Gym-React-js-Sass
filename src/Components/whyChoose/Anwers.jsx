import answers from './answers.module.scss'

const Anwers = ({ id, title, ans }) => {
  return (
    <div className={answers.wrapper}>
      <span className={answers.id}>{id}</span>
      <div className={answers.tit_ans}>
        <span className={answers.tit}>{title}</span>
        <span className={answers.ans}>{ans}</span>
      </div>
    </div>
  )
}

export default Anwers
