// Declare props
type Props = {
    loadingText: string
}

const Loading = (props: Props) => {
  return (
    <>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
            <span className="text-black text-xl mt-4 animate-fading">{props.loadingText}</span>
        </div>
    </>
  )
}

export default Loading