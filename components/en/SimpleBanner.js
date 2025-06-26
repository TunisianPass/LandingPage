const SimpleBanner = () => {
  return (
    <>
      <div
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex w-full items-center justify-center gap-x-6 bg-black px-6 py-3 sm:px-3.5">
          <div className="flex items-center text-sm font-medium leading-6 animate-textGradient bg-gradient-to-r from-[#FBC570] via-yellow-600 to-yellow-400 inline-block text-transparent bg-clip-text">
            <p>{`Now's your chance!`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleBanner