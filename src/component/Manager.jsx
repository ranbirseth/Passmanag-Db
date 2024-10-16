import 'C:\\Users\\91767\\Desktop\\Web Devlopment\\web devlopment project\\password maneger\\src\\component\\manager.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
uuidv4();
function Manager() {
    const [value, setvalue] = useState(true)
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    const getdata = async () => {
        let req = await fetch("http://localhost:3000/")
        let password = await req.json()
        setpasswordArray(password)
        console.log(password)
    }
    const show = () => {

        if (value == true) {
            setvalue(false)
        }
        if (value == false) {
            setvalue(true)
        }

    }



    useEffect(() => {
        getdata()
    }, [])
    const HandleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })


    }
    const HandelDeleat = async (id) => {
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        let req = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...form, id }) })
        // console.log("the is ", uuidv4())       
        toast("Data is Deleting");

    }

    const submiting = async () => {
        let req = await fetch("http://localhost:3000/", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        // localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        // console.log([...passwordArray, { ...form, id: uuidv4() }])
        toast("Data is Adding");

    }
    const ShowPassword = () => {
        if (click === true) {
            console.log("heyy i am clicked")
        } else {
            console.log("sorryy")
        }
    }


    return (
        <>

            <div className="main  md:ml-60 md:p-5  ml-[3rem] ">
                <input value={form.site} onChange={HandleChange} placeholder='Enter your Website URL' className='w-9/12 rounded-md inputHov  md:mt-1 mt-7  ' type="site" name='site' />
                <div className='md:flex md:gap-12 md:mt-4 grid  gap-3 '>
                    <input value={form.username} onChange={HandleChange} placeholder=' Enter Your UsreName' className='w-3/5 rounded-md inputHov md:mt-1 mt-7 ' type="email" name='username' />
                    <input value={form.password} onChange={HandleChange} placeholder='Enter your Password' className='w-32 rounded-md  inputHov md:mt-1 mt-7 ' type="password" name='password' />

                </div>
                <div className=' md:ml-72 md:p-8  -mt-4 p-0 ml-[10rem]'><button onClick={submiting} className='h-11 w-32 border-2 border-purple-800 text-white rounded-3xl hov' type="submit"><div className='invert text-black flex gap-2 ml-2 text-2xl font-bold'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                    save
                </div>
                    <ToastContainer />
                </button></div>
                <form />
                <h1 className=" font-bold text-2xl   text-white">Your Passwords</h1>
                {passwordArray.length === 0 && <div className='text-gray-300 text-xl mt-5 '>No data to show :) </div>}

            </div>
            {passwordArray.length != 0 && <div className=' text-white flex justify-center text-center md:mt-2 mt-12 '>
                <div className='rounded-t-md  bg-purple-900 w-[30%] border-white  md:border-0 md:w-[21rem]'>site</div>
                <div className='bg-purple-900 w-[30%] border-white  md:border-0 md:w-[21rem]'>username</div>
                <div className='bg-purple-900 w-[20%] border-white  md:border-0 md:w-[15rem]'>password</div>
                <div className=' rounded-tr-md bg-purple-900 w-[20%] border-white  md:border-0 md:w-[5rem]'>action</div>
            </div>}

            {passwordArray.map((item => {
                return <div className=''>

                    <div className='text-white flex justify-center text-center md:mt-1 '>
                        <div className=' bg-purple-400   w-[30%]  md:border-0  border-white border-2 md:w-[21rem] md:overflow-hidden overflow-scroll'> <a target='_blank' href={item.site} >{item.site} </a> </div>
                        <div className='bg-purple-400   w-[30%]  md:border-0  border-white border-2 md:w-[21rem] md:overflow-hidden overflow-scroll '>{item.username}  </div>
                        {/* <div className='bg-purple-400   w-[20%]  md:border-0  border-white border-2 md:w-[15rem]  md:overflow-hidden overflow-scroll'>{"*".repeat(item.password.length)}  </div> */}
                        <div  className='bg-purple-400   w-[20%]  md:border-0  border-white border-2 md:w-[15rem]  md:overflow-hidden overflow-scroll'>{value ? item.password : "*********"}  <span onClick={show}><img className='inline h-8  ml-1 mix-blend-multiply invert ' src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-white-eye-icon-on-black-background-png-image_4855459.png" alt="" /></span> </div>
                        <div onClick={() => { HandelDeleat(item.id) }} className='bg-purple-400   w-[20%]  md:border-0  border-white border-2 md:w-[5rem] md:overflow-hidden overflow-scroll'> <span  className=''><span className='invert'>< lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover">
                        </lord-icon>
                        </span>
                        </span>
                        </div>
                    </div>


                </div>
            }))}


        </>
    )
}

export default Manager





