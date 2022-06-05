

const ProfileCard = ({data}) => {
    return (
    <>
        <div className="bg-white h-72 w-64 rounded flex flex-col items-center gap-5">
            <div className="mt-5 w-40 h-40 rounded-full"><img className="rounded-full" src={`/images/tanmay-bhat.jpg`} alt="" /></div>
            <div className="bg-gray-100 w-full h-full rounded-b text-center text-lg">
                <h1>Tanmay Bhat</h1>
            </div>
        </div>   
    </>
  )
}

export default ProfileCard