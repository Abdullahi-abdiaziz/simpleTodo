
const Priority = () => {
  return (
    <div className="flex w-fit gap-3 border rounded-full  px-2 bg-white ml-auto">
      <div className="flex justify-center items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
        high
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
        medium
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
        low
      </div>
    </div>
  );
}

export default Priority