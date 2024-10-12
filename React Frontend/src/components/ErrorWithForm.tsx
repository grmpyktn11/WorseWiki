import ErrorIcon from '../images/logo.gif'
import SearchForm from './SearchForm'

// Declare props
type Props = {
    errorText: string
}

const ErrorWithForm = (props: Props) => {
  return (
    <>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <span className="text-black text-xl mt-4">{props.errorText}</span>
            <img src={ErrorIcon} alt="pleaseee" className="w-64 mt-4"/>
            <div className="mt-12"><SearchForm /></div>
        </div>
    </>
  )
}

export default ErrorWithForm