import React from 'react';
import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { CiSaveDown2 } from 'react-icons/ci';

function Profile() {
    const [image, setimage] = useState(null);
    const [editbtnvisible, seteditbtnvisible] = useState(true);
    const [othereditvisible, setothereditvisible] = useState(true)
    const [contactformdata, setcontactformdata] = useState({
        address: '',
        email: '',
        phone: ''
    });
    const [userDetail, setuserDetail] = useState({
        name: " ",
        bio: "",
        specialty: '',
        experince: '',
        mentoring_venue: '',
    });

    const handleotherdetail = (e) => {
        const { name, value } = e.target;
        setuserDetail({
            ...userDetail,
            [name]: value,
        });
    };

    const othereditbtn = () => {
        setothereditvisible(!othereditvisible)
    }

    const handlechange = (e) => {
        const { name, value } = e.target;
        setcontactformdata({
            ...contactformdata,
            [name]: value,
        });
    };

    const handleimage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimage(URL.createObjectURL(file));
        }
    };

    const handleContact = () => {
        seteditbtnvisible(!editbtnvisible);
    };

    return (
        <div className='flex flex-col md:flex-row w-screen h-screen overflow-x-hidden overflow-y-auto maincolor'>
            <div className=' w-full md:w-1/4'>

                <div className='flex  justify-center items-center py-10 gap-6'>
                    <div>
                        <img
                            src={image || 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=sph'}
                            alt=""
                            className="rounded-full w-[100px]  object-cover mx-auto"
                        />
                        <h1 className='text-center'>{userDetail.name}</h1>
                    </div>

                    <input
                        type="file"
                        onChange={handleimage}
                        className='cursor-pointer bgcolor2 text-white px-2 py-1 rounded-md text-xs  focus:outline-none  w-10 h-10'
                    />
                </div>

                <div className=''>

                    <div className='flex justify-center gap-6'>
                        <h1>Contact Detail</h1>
                        <button
                            className={`editbtn m-2 w-[20px] h-[20px] ${editbtnvisible ? 'hidden' : 'block'}`}
                            onClick={handleContact}
                        > <MdEdit /> </button>
                        <button
                            className={`editbtn m-2 w-[20px] h-[20px] ${editbtnvisible ? 'block' : 'hidden'}`}
                            onClick={handleContact}
                        > <CiSaveDown2 /> </button>
                    </div>

                    <div className='line px-12 mx-auto mb-12'></div>

                    <div className=' mb-12 pl-12 py-12'>
                        {editbtnvisible ? (<form>
                            <div>
                                <label htmlFor="address" className="block mb-2">Full Address:</label>
                                <textarea id="address" name="address" rows="2" className="w-full sm:w-[90%] px-3 border rounded-sm focus:outline-none resize-none" required onChange={handlechange} value={contactformdata.address}></textarea>
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2">Email:</label>
                                <input
                                    type="email"
                                    required
                                    className='border focus:outline-none w-[90%] p-2'
                                    onChange={handlechange}
                                    value={contactformdata.email}
                                    name="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="number" className='block mb-2'>Mobile:</label>
                                <input
                                    type="digit"
                                    required
                                    className='border focus:outline-none w-[90%] p-2'
                                    onChange={handlechange}
                                    value={contactformdata.phone}
                                    name="phone"
                                />
                            </div>
                        </form>) : (
                            <div>
                                <h2 className='pb-2 bgcolor px-3 rounded-sm w-[90%] mb-3'>{contactformdata.address}</h2>
                                <h2 className='py-2 bgcolor px-3 rounded-sm w-[90%] my-3'>{contactformdata.email}</h2>
                                <h2 className='py-2 bgcolor px-3 rounded-sm w-[90%] my-3'>{contactformdata.phone}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=' w-full md:w-3/4'>
                <div className='flex items-center'>
                    <h1 className='p-10 pb-6'>Mentor Profile</h1>


                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-12 my-auto ${othereditvisible ? 'hidden' : 'block'}`}
                        onClick={othereditbtn}
                    > edit profile </button>


                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-12 my-auto ${othereditvisible ? 'block' : 'hidden'}`}
                        onClick={othereditbtn}
                    >save changes </button>


                </div>

                <div className='line ml-10'></div>
                <form className='p-10 '>
                    <div className=' bgcolor rounded-[5px] p-4 shadow-md my-8 w-[84%]'>
                        <label htmlFor="name" className='block mb-2'>Name:</label>
                        {
                            othereditvisible ? (
                                <input
                                    type="text"
                                    name="name"
                                    className=' focus:outline-none w-1/2 p-2'
                                    onChange={handleotherdetail}
                                    value={userDetail.name}
                                />) : (
                                <h1>{userDetail.name}</h1>
                            )
                        }

                    </div>

                    <div className=' bgcolor rounded-[5px] p-4 shadow-md my-8 w-[84%]'>
                        <label htmlFor="bio" className="block mb-2">Bio:</label>
                        {othereditvisible ? (<textarea id="bio" name="bio" rows="2" className="px-3 border rounded-sm focus:outline-none resize-none w-1/2" required value={userDetail.bio} onChange={handleotherdetail}></textarea>) : (
                            <div>{userDetail.bio}</div>
                        )}
                    </div>

                    <div className=' bgcolor rounded-[5px] p-4 shadow-md my-8 w-[84%]'>
                        <label htmlFor="experience" className='block mb-2'>Experience: </label>

                        {
                            othereditvisible ? (<input
                                type="text"
                                name='experince'
                                className=' focus:outline-none p-2 w-1/2'
                                value={userDetail.experince}
                                onChange={handleotherdetail}
                            />) : (
                                <div>{userDetail.experince}</div>
                            )
                        }
                    </div>

                    <div className=' bgcolor rounded-[5px] p-4 shadow-md my-8 w-[84%]'>
                        <label htmlFor="specialty" className='block mb-2'>specialty:</label>
                        {
                            othereditvisible ? (<input
                                type="text"
                                name='specialty'
                                value={userDetail.specialty}
                                className=' focus:outline-none p-2 w-1/2'
                                onChange={handleotherdetail}
                            />) : (
                                <div>{userDetail.specialty}</div>
                            )
                        }
                    </div>

                    <div className=' bgcolor rounded-[5px] p-4 shadow-md my-8 w-[84%]'>
                        <label htmlFor="mentoring_venue" className='block mb-2'>mentoring venue:</label>
                        {
                            othereditvisible ? (
                                <input
                                    type="text"
                                    name='mentoring_venue'
                                    value={userDetail.mentoring_venue}
                                    className=' focus:outline-none p-2 w-1/2'
                                    onChange={handleotherdetail}
                                />
                            ) : (
                                <div>{userDetail.mentoring_venue}</div>
                            )
                        }

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
